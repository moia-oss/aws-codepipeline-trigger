import * as core from '@actions/core';
import {
  ActionDeclaration,
  CodePipelineClient,
  GetPipelineCommand,
  StageDeclaration,
} from '@aws-sdk/client-codepipeline';

import {
  BatchGetBuildsCommand,
  CodeBuildClient,
  ListBuildsForProjectCommand,
  StatusType,
} from '@aws-sdk/client-codebuild';

import { CloudWatchLogsForwarder } from './cloudwatch-logs-forwarder';

const CLIENT = new CodeBuildClient({});

type ProjectToBuildBatchId = [string, string];

export const getCodebuildProjectsForPipeline = async (client: CodePipelineClient, codePipelineName: string): Promise<string[]> => {
  const command = new GetPipelineCommand({ name: codePipelineName });
  try {
    const output = await client.send(command);
    if (output.pipeline?.stages !== undefined) {
      return getCodeBuildsFromStages(output.pipeline?.stages);
    } else {
      core.warning('Couldn\'t get pipeline information. You are probably missing permissions.');
      return [];
    }
  } catch (error) {
    core.error(`An error occured while getting pipeline information for '${codePipelineName}'`);
    return [];
  }
}

const getCodeBuildsFromStages = (stages: StageDeclaration[]): string[] => {
  return stages.flatMap(stage => {
    if (stage.actions !== undefined) {
      return getCodeBuildsFromActions(stage.actions)
    }
    return [];
  })
}

const getCodeBuildsFromActions = (actions: ActionDeclaration[]): string[] => {
  return actions.map(action => {
    if (action.actionTypeId?.category === 'Build' && action.actionTypeId?.provider === 'CodeBuild') {
      if (action.configuration !== undefined) {
        return action.configuration['ProjectName'];
      }
    }
    return '';
  }).filter(x => x !== '');
}

export const getInProgressBuildId = async (codebuildProjectName: string): Promise<string | undefined> => {
  const command = new ListBuildsForProjectCommand({
    projectName: codebuildProjectName,
  });
  try {
    const output = await CLIENT.send(command);
    if (output.ids === undefined || output.ids.length === 0) {
      core.info(`CodeBuild Project ${codebuildProjectName} is currently not in progress`);
      return undefined;
    } else {
      if (await isBuildIdInProgress(output.ids[0])) {
        return output.ids[0];
      } else {
        return undefined;
      }
    }
  } catch (error) {
    const err = error as Error;
    core.warning(`An error occured while getting BuildBatchesForProject '${codebuildProjectName}'.\n Consider adding 'codebuild:ListBuildsForProject' permission for that project. ${err.message}`);
    throw error;
  }
}

const isBuildIdInProgress = async (id:string): Promise<boolean> => {
  const command = new BatchGetBuildsCommand({ids: [id]});
  try {
    const output = await CLIENT.send(command);
    if (output.builds && output.builds.length === 1) {
      return output.builds[0].buildStatus === StatusType.IN_PROGRESS;
    } else {
      core.warning(`Unexpected amount of builds returned: ${output.builds?.length}`);
    }
  } catch (error) {
    const err = error as Error;
    core.warning(`Couldn't get build with id '${id}'. ${err.message}`);
  } 
  return false;
}

export const forwardLogEventsFromCodebuild = async ([projectName, buildId]: ProjectToBuildBatchId) => {
  const command = new BatchGetBuildsCommand({ ids: [buildId] });
  try {
    const output = await CLIENT.send(command);
    if (output.builds !== undefined) {
      const [build] = output.builds;
      if (build.logs && build.logs.groupName && build.logs.streamName) {
        core.info(`**** CodeBuild Project ${projectName} has started Build ${buildId} ****`);
        const forwarder = new CloudWatchLogsForwarder(build.logs.groupName, build.logs.streamName);
        var result = false;
        while (!result) {
          result = await forwarder.forwardLogEventsToGithubActions(buildId, undefined);
        }
        core.info(`**** CodeBuild Project ${projectName} has finished Build ${buildId} ****`);
      } else {
        core.warning(`CodeBuild Project ${projectName} ${buildId} is not ready!`);
      }
    }
  } catch (error) {
    core.warning(`Could not get build for id ${buildId} in project ${projectName}.`)
  }
}

/*
 * used in filter methods to get out just the ProjectToBuildBatchIds which have a build id set
 */
const isProjectToBuildBatchId = (x: (string | undefined)[]): x is ProjectToBuildBatchId => {
  return !!x[1];
}
/*
 * Get the BuildBatchIds of the passed CodeBuild Projects.
 */
export const getInProgressProjectToBatchIds = async (codebuildProjects: string[]): Promise<ProjectToBuildBatchId[]> => {
  const projectsToBuildBatches: (string | undefined)[][] = await Promise.all(
    codebuildProjects.map(async codebuildProject =>
      [codebuildProject, await getInProgressBuildId(codebuildProject)]
    )
  );

  return projectsToBuildBatches.filter(isProjectToBuildBatchId);
}
