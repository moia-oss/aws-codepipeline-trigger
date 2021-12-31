'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
Object.defineProperty(exports, '__esModule', { value: true });
const core = __importStar(require('@actions/core'));
const client_codepipeline_1 = require('@aws-sdk/client-codepipeline');
const codebuild = __importStar(require('./codebuild'));
const util_1 = require('./util');
const CLIENT = new client_codepipeline_1.CodePipelineClient({});
const getNewestExecutionId = async (pipelineName) => {
  const command = new client_codepipeline_1.ListPipelineExecutionsCommand({ pipelineName, maxResults: 1 });
  const data = await CLIENT.send(command);
  if (data.pipelineExecutionSummaries && data.pipelineExecutionSummaries.length > 0) {
    const executionId = data.pipelineExecutionSummaries[0].pipelineExecutionId;
    if (executionId) {
      return executionId;
    }
    throw new Error(`Newest pipeline execution of '${pipelineName}' has no ID`);
  }
  throw new Error('No Pipeline executions found');
};
const waitForPipeline = async (pipelineName, pipelineExecutionId, codebuilds) => {
  await (0, util_1.sleep)(10);
  const command = new client_codepipeline_1.GetPipelineExecutionCommand({ pipelineName, pipelineExecutionId });
  try {
    const data = await CLIENT.send(command);
    if (data.pipelineExecution === undefined || !data.pipelineExecution.status) {
      core.error('No Status for Pipeline');
      return false;
    }
    const { status } = data.pipelineExecution;
    switch (status) {
      case client_codepipeline_1.PipelineExecutionStatus.InProgress:
        const projectToBuildBatchId = await codebuild.getInProgressProjectToBatchIds(codebuilds);
        if (projectToBuildBatchId.length > 0) {
          await codebuild.forwardLogEventsFromCodebuild(projectToBuildBatchId[0]);
        }
        core.info(`Pipeline '${pipelineName}' in progress waiting for 10 more seconds.`);
        return await waitForPipeline(pipelineName, pipelineExecutionId, codebuilds);
      case client_codepipeline_1.PipelineExecutionStatus.Cancelled: {
        core.info(`Pipeline '${pipelineName}' was canceled. Trying to get new execution ID.`);
        const newExecutionId = await getNewestExecutionId(pipelineName);
        core.info(`Waiting on pipeline '${pipelineName}' with new execution id '${newExecutionId}'`);
        return await waitForPipeline(pipelineName, newExecutionId, codebuilds);
      }
      case client_codepipeline_1.PipelineExecutionStatus.Succeeded:
        core.info(`Pipeline '${pipelineName}' succeeded.`);
        return true;
      case client_codepipeline_1.PipelineExecutionStatus.Failed:
        core.error(`Pipeline '${pipelineName}' failed.`);
        return false;
      case client_codepipeline_1.PipelineExecutionStatus.Stopping ||
        client_codepipeline_1.PipelineExecutionStatus.Stopped:
        core.error(`Pipeline '${pipelineName}' stopped.`);
        return false;
      case client_codepipeline_1.PipelineExecutionStatus.Superseded:
        core.warning(`Pipeline '${pipelineName}' was superseded. Skipping rest of the execution.`);
        return true;
      default:
        core.error(`Unexpected status: ${status} given.`);
        return false;
    }
  } catch (error) {
    core.error(
      `An error occured while getting the status of pipeline '${pipelineName}' exucution: '${pipelineExecutionId}'.`,
    );
    throw error;
  }
};
const run = async () => {
  const pipelineName = core.getInput('pipeline', { required: true });
  const wait = core.getBooleanInput('wait', { required: false });
  const command = new client_codepipeline_1.StartPipelineExecutionCommand({ name: pipelineName });
  try {
    const data = await CLIENT.send(command);
    if (!data.pipelineExecutionId) {
      throw new Error('No Execution ID');
    }
    if (wait) {
      const codebuilds = await codebuild.getCodebuildProjectsForPipeline(CLIENT, pipelineName);
      const executionResult = await waitForPipeline(pipelineName, data.pipelineExecutionId, codebuilds);
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
//# sourceMappingURL=index.js.map
