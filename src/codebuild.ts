import { CloudWatchLogsForwarder } from './cloudwatch-logs-forwarder';
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

const CLIENT = new CodeBuildClient({});

type ProjectToBuildBatchId = [string, string];

export const getCodeBuildsFromActions = (
  actions: ActionDeclaration[],
): string[] =>
  actions
    .map(action => {
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
    .filter(x => x !== '');

export const getCodeBuildsFromStages = (stages: StageDeclaration[]): string[] =>
  stages.flatMap(stage => {
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
      `An error occured while getting pipeline information for '${codePipelineName}'`,
    );
    return [];
  }
};

const isBuildIdInProgress = async (buildId: string): Promise<boolean> => {
  const command = new BatchGetBuildsCommand({ ids: [buildId] });
  try {
    const output = await CLIENT.send(command);
    if (!output.builds) {
      core.warning(`No builds found for build ID: ${buildId}`);
      return false;
    }

    return output.builds[0].buildStatus === StatusType.IN_PROGRESS;
  } catch (error) {
    const err = error as Error;
    core.warning(
      `Couldn't get build with id '${buildId}', consider adding the codebuild:BatchGetBuilds permission. ${err.message}`,
    );
  }
  return false;
};

/*
 * Searches through the passed CodeBuild Projects and returns build IDs, which are IN_PROGRESS
 */
export const getInProgressBuildId = async (
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
    if (await isBuildIdInProgress(output.ids[0])) {
      return output.ids[0];
    }

    return undefined;
  } catch (error) {
    const err = error as Error;
    core.warning(
      `An error occured while getting BuildBatchesForProject '${codebuildProjectName}'.\n Consider adding 'codebuild:ListBuildsForProject' permission for that project. ${err.message}`,
    );

    return undefined;
  }
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
        core.warning(
          `CodeBuild Project ${projectName} ${buildId} is not ready!`,
        );
      }
    }
  } catch (error) {
    const err = error as Error;
    core.warning(
      `Could not get build with id '${buildId}', consider adding the codebuild:BatchGetBuilds permission. ${err.message}.`,
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
 * Get the BuildBatchIds of the passed CodeBuild Projects.
 */
export const getInProgressProjectToBatchIds = async (
  codebuildProjects: string[],
): Promise<ProjectToBuildBatchId[]> => {
  const projectsToBuildBatches: (string | undefined)[][] = await Promise.all(
    codebuildProjects.map(async codebuildProject => [
      codebuildProject,
      await getInProgressBuildId(codebuildProject),
    ]),
  );

  return projectsToBuildBatches.filter(isProjectToBuildBatchId);
};
