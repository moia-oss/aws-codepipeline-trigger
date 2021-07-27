"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const core = __importStar(require("@actions/core"));
const client_codepipeline_1 = require("@aws-sdk/client-codepipeline");
const CLIENT = new client_codepipeline_1.CodePipelineClient({});
function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}
async function waitForPipeline(pipelineName, pipelineExecutionId) {
    await sleep(10);
    const command = new client_codepipeline_1.GetPipelineExecutionCommand({ pipelineName, pipelineExecutionId });
    try {
        const data = await CLIENT.send(command);
        if (data.pipelineExecution === undefined || !data.pipelineExecution.status) {
            core.error('No Status for Pipeline');
            return false;
        }
        const status = data.pipelineExecution.status;
        switch (status) {
            case client_codepipeline_1.PipelineExecutionStatus.InProgress:
                core.info(`Pipeline '${pipelineName}' in progress waiting for 10 more seconds.`);
                return waitForPipeline(pipelineName, pipelineExecutionId);
            case client_codepipeline_1.PipelineExecutionStatus.Failed:
                core.info(`Pipeline '${pipelineName}' failed.`);
                return false;
            case client_codepipeline_1.PipelineExecutionStatus.Stopping || client_codepipeline_1.PipelineExecutionStatus.Stopped:
                core.info(`Pipeline '${pipelineName}' stopped.`);
                return false;
            case client_codepipeline_1.PipelineExecutionStatus.Superseded:
                core.info(`Pipeline '${pipelineName}' was superseded.`);
                return false;
            case client_codepipeline_1.PipelineExecutionStatus.Cancelled:
                core.info(`Pipeline '${pipelineName}' was canceled. Trying to get new execution ID.`);
                //TODO: To implement
                return false;
            case client_codepipeline_1.PipelineExecutionStatus.Succeeded:
                core.info(`Pipeline '${pipelineName}' succeeded.`);
                return true;
        }
        return false;
    }
    catch (error) {
        throw new Error(`An error occured while getting the status of pipeline '${pipelineName}' exucution: '${pipelineExecutionId}'.\n ${error}`);
    }
}
async function run() {
    const pipelineName = core.getInput('pipeline', { required: true });
    const wait = core.getBooleanInput('wait', { required: false });
    const command = new client_codepipeline_1.StartPipelineExecutionCommand({ name: pipelineName });
    try {
        const data = await CLIENT.send(command);
        if (!data.pipelineExecutionId) {
            core.error('No Execution ID');
            throw new Error('No Execution ID');
        }
        if (wait) {
            const executionResult = await waitForPipeline(pipelineName, data.pipelineExecutionId);
            if (!executionResult) {
                core.error('Execution was unsucessful.');
                throw new Error('Execution was unsucessful.');
            }
        }
    }
    catch (error) {
        core.error(`An error occured while starting Codepipeline '${pipelineName}': '${error}'`);
        throw new Error(`An error occured while starting Codepipeline '${pipelineName}': '${error}'`);
    }
}
exports.run = run;
run().catch(core.setFailed);
//# sourceMappingURL=index.js.map