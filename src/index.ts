import * as codebuild from './codebuild';
import { sleep } from './util';
import * as core from '@actions/core';
import {
  CodePipelineClient,
  StartPipelineExecutionCommand,
  GetPipelineExecutionCommand,
  PipelineExecutionStatus,
  ListPipelineExecutionsCommand,
} from '@aws-sdk/client-codepipeline';

const CLIENT = new CodePipelineClient({});

const getNewestExecutionId = async (pipelineName: string): Promise<string> => {
  const command = new ListPipelineExecutionsCommand({
    pipelineName,
    maxResults: 1,
  });
  const data = await CLIENT.send(command);
  if (
    data.pipelineExecutionSummaries &&
    data.pipelineExecutionSummaries.length > 0
  ) {
    const executionId = data.pipelineExecutionSummaries[0].pipelineExecutionId;
    if (executionId) {
      return executionId;
    }
    throw new Error(`Newest pipeline execution of '${pipelineName}' has no ID`);
  }
  throw new Error('No Pipeline executions found');
};

const waitForPipeline = async (
  pipelineName: string,
  pipelineExecutionId: string,
  codebuilds?: string[],
): Promise<boolean> => {
  await sleep(10);
  const command = new GetPipelineExecutionCommand({
    pipelineName,
    pipelineExecutionId,
  });
  try {
    const data = await CLIENT.send(command);

    if (!data.pipelineExecution?.status) {
      core.error('No Status for Pipeline');
      return false;
    }
    const { status } = data.pipelineExecution;
    switch (status) {
      case PipelineExecutionStatus.InProgress: {
        if (codebuilds) {
          const projectToBuildBatchId =
            await codebuild.getInProgressProjectToBatchIds(codebuilds);
          if (projectToBuildBatchId.length > 0) {
            await codebuild.forwardLogEventsFromCodebuild(
              projectToBuildBatchId[0],
            );
          }
        }
        core.info(
          `Pipeline '${pipelineName}' in progress waiting for 10 more seconds.`,
        );
        return await waitForPipeline(
          pipelineName,
          pipelineExecutionId,
          codebuilds,
        );
      }
      case PipelineExecutionStatus.Cancelled: {
        core.info(
          `Pipeline '${pipelineName}' was canceled. Trying to get new execution ID.`,
        );
        const newExecutionId = await getNewestExecutionId(pipelineName);
        core.info(
          `Waiting on pipeline '${pipelineName}' with new execution id '${newExecutionId}'`,
        );
        return await waitForPipeline(pipelineName, newExecutionId, codebuilds);
      }
      case PipelineExecutionStatus.Succeeded:
        core.info(`Pipeline '${pipelineName}' succeeded.`);
        return true;
      case PipelineExecutionStatus.Failed:
        core.error(`Pipeline '${pipelineName}' failed.`);
        return false;
      case PipelineExecutionStatus.Stopping || PipelineExecutionStatus.Stopped:
        core.error(`Pipeline '${pipelineName}' stopped.`);
        return false;
      case PipelineExecutionStatus.Superseded:
        core.warning(
          `Pipeline '${pipelineName}' was superseded. Skipping rest of the execution.`,
        );
        return true;
      default:
        core.error(`Unexpected status: ${status} given.`);
        return false;
    }
  } catch (error) {
    core.error(
      `An error occured while getting the status of pipeline '${pipelineName}' execution: '${pipelineExecutionId}'.`,
    );
    throw error;
  }
};

const run = async (): Promise<void> => {
  let codebuilds;
  const pipelineName: string = core.getInput('pipeline', { required: true });
  const wait: boolean = core.getBooleanInput('wait', { required: false });
  const followCodeBuild: boolean = core.getBooleanInput('follow-codebuild', {
    required: false,
  });

  const command = new StartPipelineExecutionCommand({ name: pipelineName });

  try {
    const data = await CLIENT.send(command);
    if (!data.pipelineExecutionId) {
      throw new Error('No Execution ID');
    }
    if (wait) {
      if (followCodeBuild) {
        codebuilds = await codebuild.getCodebuildProjectsForPipeline(
          CLIENT,
          pipelineName,
        );
      }

      const executionResult = await waitForPipeline(
        pipelineName,
        data.pipelineExecutionId,
        codebuilds,
      );
      if (!executionResult) {
        throw new Error('Execution was unsucessful.');
      }
    }
  } catch (error) {
    core.error(
      `An error occured while starting Codepipeline '${pipelineName}'`,
    );
    throw error;
  }
};

run().catch(core.setFailed);
