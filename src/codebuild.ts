import * as core from '@actions/core';
import {
  ActionDeclaration,
  CodePipelineClient,
  GetPipelineCommand,
  StageDeclaration,
} from '@aws-sdk/client-codepipeline';

export const getCodebuildProjectsForPipeline = async (client: CodePipelineClient, codePipelineName: string): Promise<string[] | undefined> => {
  const command = new GetPipelineCommand({ name: codePipelineName });
  try {
    const output = await client.send(command);
    if (output.pipeline?.stages !== undefined) {
      return getCodeBuildsFromStages(output.pipeline?.stages);
    } else {
      core.warning('Couldn\'t get pipeline information. You are probably missing permissions.');
      return undefined;
    }
  } catch (error) {
    core.error(`An error occured while getting pipeline information for '${codePipelineName}'`);
    return undefined;
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
