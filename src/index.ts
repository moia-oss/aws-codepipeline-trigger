import * as core from '@actions/core';
import {
  CodePipelineClient,
  StartPipelineExecutionCommand,
  GetPipelineExecutionCommand,
  PipelineExecutionStatus
} from '@aws-sdk/client-codepipeline';

const CLIENT = new CodePipelineClient({});

function sleep(s: number) {
  return new Promise(resolve => setTimeout(resolve, s * 1000));
}

async function waitForPipeline(pipelineName: string, pipelineExecutionId: string): Promise<boolean> {
  await sleep(10);
  const command = new GetPipelineExecutionCommand({ pipelineName, pipelineExecutionId });
  CLIENT
    .send(command)
    .then((data) => {
      if (data.pipelineExecution === undefined || data.pipelineExecution.status === undefined) {
        core.error('No Status for Pipeline');
        return false;
      }
      const status = data.pipelineExecution.status;
      switch (status) {
        case PipelineExecutionStatus.InProgress:
          core.info(`Pipeline '${pipelineName}' in progress waiting for 10 more seconds.`)
          return waitForPipeline(pipelineName, pipelineExecutionId);
        case PipelineExecutionStatus.Failed:
          core.info(`Pipeline '${pipelineName}' failed.`)
          return false;
        case PipelineExecutionStatus.Stopping || PipelineExecutionStatus.Stopped:
          core.info(`Pipeline '${pipelineName}' stopped.`)
          return false;
        case PipelineExecutionStatus.Superseded:
          core.info(`Pipeline '${pipelineName}' was superseded.`)
          return false;
        case PipelineExecutionStatus.Cancelled:
          core.info(`Pipeline '${pipelineName}' was canceled. Trying to get new execution ID.`)
          //TODO: To implement
          return false;

        case PipelineExecutionStatus.Succeeded:
          core.info(`Pipeline '${pipelineName}' succeeded.`)
          return true;
      }
      return false;
    })
    .catch((error) => {
      throw new Error(`An error occured while getting the Status of pipeline '${pipelineName}' exucution: '${pipelineExecutionId}'.\n ${error}`);
    });

  return false;
}

export async function run() {
  const pipelineName: string = core.getInput('pipeline-name', { required: true });
  const wait: boolean = core.getBooleanInput('wait', { required: false });

  const command = new StartPipelineExecutionCommand({ name: pipelineName });

  var executionId = '';

  CLIENT
    .send(command)
    .then((data) => {
      if (data.pipelineExecutionId === undefined) {
        core.error('No Execution ID');
        return false;
      }

      executionId = data.pipelineExecutionId;
      return true;
    }).catch((error) => {
      core.error(`An error occured while starting Codepipeline '${pipelineName}': '${error}'`);
    });

  if (wait) {
    const executionResult = await waitForPipeline(pipelineName, executionId);
    if (!executionResult) {
      core.error(`Execution was unsucessful.`);
    }
  }
}

run().catch(core.setFailed);
