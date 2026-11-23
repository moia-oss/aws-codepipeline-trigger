import { CloudWatchLogsForwarder } from './cloudwatch-logs-forwarder';
import {
  chunk,
  isAccessDeniedError,
  isThrottlingError,
  mapWithConcurrency,
} from './util';
import * as core from '@actions/core';
import {
  BatchGetBuildsCommand,
  CodeBuildClient,
  ListBuildsForProjectCommand,
  StatusType,
} from '@aws-sdk/client-codebuild';
import { GetPipelineCommand } from '@aws-sdk/client-codepipeline';
import type {
  ActionDeclaration,
  CodePipelineClient,
  StageDeclaration,
} from '@aws-sdk/client-codepipeline';

const CLIENT = new CodeBuildClient({ retryMode: 'adaptive', maxAttempts: 8 });

// CodeBuild's List*/BatchGet* APIs have low rate limits. Pipelines (e.g. CDK pipelines) can contain
// dozens of CodeBuild projects, so we never query all of them at once.
const MAX_CONCURRENT_LIST_CALLS = 3;
const MAX_IDS_PER_BATCH_GET_BUILDS = 100;

type ProjectToBuildBatchId = [string, string];

export const getCodeBuildsFromActions = (
  actions: ActionDeclaration[],
): string[] =>
  actions
    .map((action) => {
      if (
        action.actionTypeId?.category === 'Build' &&
        action.actionTypeId?.provider === 'CodeBuild'
      ) {
        if (action.configuration !== undefined) {
          return action.configuration.ProjectName;
        }
      }
      return '';
    })
    .filter((x) => x !== '');

export const getCodeBuildsFromStages = (stages: StageDeclaration[]): string[] =>
  stages.flatMap((stage) => {
    if (stage.actions !== undefined) {
      return getCodeBuildsFromActions(stage.actions);
    }
    return [];
  });

/*
 * Searches through all stages of a Codepipeline and returns the included CodeBuild Project Names
 */
export const getCodebuildProjectsForPipeline = async (
  client: CodePipelineClient,
  codePipelineName: string,
): Promise<string[]> => {
  const command = new GetPipelineCommand({ name: codePipelineName });
  try {
    const output = await client.send(command);
    if (output.pipeline?.stages !== undefined) {
      return getCodeBuildsFromStages(output.pipeline?.stages);
    }
    core.warning(
      "Couldn't get pipeline information. You are probably missing permissions.",
    );
    return [];
  } catch (error) {
    core.error(
      `An error occurred while getting pipeline information for '${codePipelineName}': ${(error as Error).message}`,
    );
    return [];
  }
};

export const reportCodeBuildError = (
  operation: string,
  permission: string,
  resource: string,
  error: unknown,
): void => {
  const { message } = error as Error;
  if (isThrottlingError(error)) {
    core.info(
      `CodeBuild throttled ${operation} for '${resource}'. Retrying on the next poll.`,
    );
  } else if (isAccessDeniedError(error)) {
    core.warning(
      `Not allowed to call ${operation} for '${resource}'. Consider adding the '${permission}' permission. ${message}`,
    );
  } else {
    core.warning(
      `An error occurred while calling ${operation} for '${resource}': ${message}`,
    );
  }
};

/*
 * Returns the ID of the most recent build of a CodeBuild project, if there is one.
 */
export const getLatestBuildId = async (
  codebuildProjectName: string,
): Promise<string | undefined> => {
  const command = new ListBuildsForProjectCommand({
    projectName: codebuildProjectName,
  });
  try {
    const output = await CLIENT.send(command);
    if (output.ids === undefined || output.ids.length === 0) {
      core.info(
        `CodeBuild Project ${codebuildProjectName} is currently not in progress`,
      );
      return undefined;
    }
    return output.ids[0];
  } catch (error) {
    reportCodeBuildError(
      'ListBuildsForProject',
      'codebuild:ListBuildsForProject',
      codebuildProjectName,
      error,
    );
    return undefined;
  }
};

/*
 * Returns the subset of the given build IDs that are IN_PROGRESS, using as few BatchGetBuilds calls as possible.
 */
export const getInProgressBuildIds = async (
  buildIds: string[],
): Promise<Set<string>> => {
  const inProgress = new Set<string>();
  for (const ids of chunk(buildIds, MAX_IDS_PER_BATCH_GET_BUILDS)) {
    try {
      const output = await CLIENT.send(new BatchGetBuildsCommand({ ids }));
      (output.builds ?? [])
        .filter((build) => build.buildStatus === StatusType.IN_PROGRESS)
        .forEach((build) => build.id && inProgress.add(build.id));
    } catch (error) {
      reportCodeBuildError(
        'BatchGetBuilds',
        'codebuild:BatchGetBuilds',
        ids.join(', '),
        error,
      );
    }
  }
  return inProgress;
};

export const forwardLogEventsFromCodebuild = async ([
  projectName,
  buildId,
]: ProjectToBuildBatchId) => {
  const command = new BatchGetBuildsCommand({ ids: [buildId] });
  try {
    const output = await CLIENT.send(command);
    if (output.builds !== undefined) {
      const [build] = output.builds;
      if (build.logs?.groupName && build.logs?.streamName) {
        core.info(
          `**** Build ${buildId} has started. Following it's output ****`,
        );

        const forwarder = new CloudWatchLogsForwarder(
          build.logs.groupName,
          build.logs.streamName,
        );
        await forwarder.forwardLogEventsToGithubActions(buildId, undefined);

        core.info(
          `**** Build ${buildId} finished. Back to tracking pipeline status ****`,
        );
      } else {
        core.info(
          `CodeBuild Project ${projectName} ${buildId} has no logs yet. Waiting.`,
        );
      }
    }
  } catch (error) {
    reportCodeBuildError(
      'BatchGetBuilds',
      'codebuild:BatchGetBuilds',
      buildId,
      error,
    );
  }
};

/*
 * Used in filter methods to get out just the ProjectToBuildBatchIds which have a build id set
 */
export const isProjectToBuildBatchId = (
  x: (string | undefined)[],
): x is ProjectToBuildBatchId => !!x[1];

/*
 * Get the in-progress build IDs of the passed CodeBuild Projects.
 * Lists the latest build of each project (a few projects at a time), then checks all candidates
 * with batched BatchGetBuilds calls instead of one call per project.
 */
export const getInProgressProjectToBatchIds = async (
  codebuildProjects: string[],
): Promise<ProjectToBuildBatchId[]> => {
  const latestBuilds: (string | undefined)[][] = await mapWithConcurrency(
    codebuildProjects,
    MAX_CONCURRENT_LIST_CALLS,
    async (codebuildProject) => [
      codebuildProject,
      await getLatestBuildId(codebuildProject),
    ],
  );
  const candidates = latestBuilds.filter(isProjectToBuildBatchId);
  if (candidates.length === 0) {
    return [];
  }

  const inProgress = await getInProgressBuildIds(
    candidates.map(([, buildId]) => buildId),
  );
  return candidates.filter(([, buildId]) => inProgress.has(buildId));
};
