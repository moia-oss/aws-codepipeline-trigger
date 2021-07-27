import * as core from '@actions/core';
import {
  CodePipelineClient,
  StartPipelineExecutionCommand,
  GetPipelineExecutionCommand,
  PipelineExecutionStatus,
} from '@aws-sdk/client-codepipeline';

const CLIENT = new CodePipelineClient({});

const sleep = (s: number) => new Promise((resolve) => setTimeout(resolve, s * 1000));

const waitForPipeline = async (pipelineName: string, pipelineExecutionId: string): Promise<boolean> => {
  await sleep(10);
  const command = new GetPipelineExecutionCommand({ pipelineName, pipelineExecutionId });
  try {
    const data = await CLIENT.send(command);

    if (data.pipelineExecution === undefined || !data.pipelineExecution.status) {
      core.error('No Status for Pipeline');
      return false;
    }
    const { status } = data.pipelineExecution;
    switch (status) {
      case PipelineExecutionStatus.InProgress:
        core.info(`Pipeline '${pipelineName}' in progress waiting for 10 more seconds.`);
        return await waitForPipeline(pipelineName, pipelineExecutionId);
      case PipelineExecutionStatus.Failed:
        core.info(`Pipeline '${pipelineName}' failed.`);
        return false;
      case PipelineExecutionStatus.Stopping || PipelineExecutionStatus.Stopped:
        core.info(`Pipeline '${pipelineName}' stopped.`);
        return false;
      case PipelineExecutionStatus.Superseded:
        core.info(`Pipeline '${pipelineName}' was superseded.`);
        return false;
      case PipelineExecutionStatus.Cancelled:
        core.info(`Pipeline '${pipelineName}' was canceled. Trying to get new execution ID.`);
        // TODO: To implement
        return false;

      case PipelineExecutionStatus.Succeeded:
        core.info(`Pipeline '${pipelineName}' succeeded.`);
        return true;
      default:
        throw new Error(`Unexpected status: ${status} given.`);
    }
  } catch (error) {
    core.error(
      `An error occured while getting the status of pipeline '${pipelineName}' exucution: '${pipelineExecutionId}'.`,
    );
    throw error;
  }
};

const run = async (): Promise<void> => {
  const pipelineName: string = core.getInput('pipeline', { required: true });
  const wait: boolean = core.getBooleanInput('wait', { required: false });

  const command = new StartPipelineExecutionCommand({ name: pipelineName });

  try {
    const data = await CLIENT.send(command);
    if (!data.pipelineExecutionId) {
      throw new Error('No Execution ID');
    }
    if (wait) {
      const executionResult = await waitForPipeline(pipelineName, data.pipelineExecutionId);
      if (!executionResult) {
        throw new Error('Execution was unsucessful.');
      }
    }
  } catch (error) {
    core.error(`An error occured while starting Codepipeline '${pipelineName}'`);
    throw error;
  }
};

run().catch(core.setFailed);
