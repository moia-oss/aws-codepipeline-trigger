import * as core from '@actions/core';
import {
  ActionDeclaration,
  CodePipelineClient,
  GetPipelineCommand,
  StageDeclaration,
} from '@aws-sdk/client-codepipeline';

import {
  CodeBuildClient,
  ListBuildBatchesForProjectCommand,
  SortOrderType,
  StatusType,
} from '@aws-sdk/client-codebuild';

const CLIENT = new CodeBuildClient({});

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

export const getInProgressBuildBatchId = async (codebuildProjectName: string): Promise<string | undefined> => {
  const command = new ListBuildBatchesForProjectCommand(
    {
      filter: {
        status: StatusType.IN_PROGRESS,
      },
      projectName: codebuildProjectName,
      sortOrder: SortOrderType.DESCENDING,
    });
  try {
  const output = await CLIENT.send(command);
    if (output.ids === undefined) {
      core.info(`CodeBuild Project ${codebuildProjectName} is currently not in progress`);
      return undefined;
    } else if ( output.ids.length > 1 || output.nextToken !== undefined ) {
      core.info(`Too many concurrend BuildBatches in progress. Don't know which one to follow.`);
      return undefined;
    } else {
      core.info(`CodeBuild Project ${codebuildProjectName} is currently in progress`);
      return output.ids[0];
    }
  } catch (error) {
    core.error(`An error occured while getting BuildBatchesForProject ${codebuildProjectName}`);
    return undefined;
  }
}
