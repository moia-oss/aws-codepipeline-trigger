"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
exports.getInProgressProjectToBatchIds = exports.isProjectToBuildBatchId = exports.forwardLogEventsFromCodebuild = exports.getInProgressBuildId = exports.getCodebuildProjectsForPipeline = exports.getCodeBuildsFromStages = exports.getCodeBuildsFromActions = void 0;
const core = __importStar(require("@actions/core"));
const client_codebuild_1 = require("@aws-sdk/client-codebuild");
const client_codepipeline_1 = require("@aws-sdk/client-codepipeline");
const cloudwatch_logs_forwarder_1 = require("./cloudwatch-logs-forwarder");
const CLIENT = new client_codebuild_1.CodeBuildClient({});
const getCodeBuildsFromActions = (actions) => actions
    .map((action) => {
    var _a, _b;
    if (((_a = action.actionTypeId) === null || _a === void 0 ? void 0 : _a.category) === 'Build' && ((_b = action.actionTypeId) === null || _b === void 0 ? void 0 : _b.provider) === 'CodeBuild') {
        if (action.configuration !== undefined) {
            return action.configuration.ProjectName;
        }
    }
    return '';
})
    .filter((x) => x !== '');
exports.getCodeBuildsFromActions = getCodeBuildsFromActions;
const getCodeBuildsFromStages = (stages) => stages.flatMap((stage) => {
    if (stage.actions !== undefined) {
        return (0, exports.getCodeBuildsFromActions)(stage.actions);
    }
    return [];
});
exports.getCodeBuildsFromStages = getCodeBuildsFromStages;
/*
 * Searches through all stages of a Codepipeline and returns the included CodeBuild Project Names
 */
const getCodebuildProjectsForPipeline = async (client, codePipelineName) => {
    var _a, _b;
    const command = new client_codepipeline_1.GetPipelineCommand({ name: codePipelineName });
    try {
        const output = await client.send(command);
        if (((_a = output.pipeline) === null || _a === void 0 ? void 0 : _a.stages) !== undefined) {
            return (0, exports.getCodeBuildsFromStages)((_b = output.pipeline) === null || _b === void 0 ? void 0 : _b.stages);
        }
        core.warning("Couldn't get pipeline information. You are probably missing permissions.");
        return [];
    }
    catch (error) {
        core.error(`An error occured while getting pipeline information for '${codePipelineName}'`);
        return [];
    }
};
exports.getCodebuildProjectsForPipeline = getCodebuildProjectsForPipeline;
const isBuildIdInProgress = async (buildId) => {
    const command = new client_codebuild_1.BatchGetBuildsCommand({ ids: [buildId] });
    try {
        const output = await CLIENT.send(command);
        if (!output.builds) {
            core.warning(`No builds found for build ID: ${buildId}`);
            return false;
        }
        return output.builds[0].buildStatus === client_codebuild_1.StatusType.IN_PROGRESS;
    }
    catch (error) {
        const err = error;
        core.warning(`Couldn't get build with id '${buildId}', consider adding the codebuild:BatchGetBuilds permission. ${err.message}`);
    }
    return false;
};
/*
 * Searches through the passed CodeBuild Projects and returns build IDs, which are IN_PROGRESS
 */
const getInProgressBuildId = async (codebuildProjectName) => {
    const command = new client_codebuild_1.ListBuildsForProjectCommand({
        projectName: codebuildProjectName,
    });
    try {
        const output = await CLIENT.send(command);
        if (output.ids === undefined || output.ids.length === 0) {
            core.info(`CodeBuild Project ${codebuildProjectName} is currently not in progress`);
            return undefined;
        }
        if (await isBuildIdInProgress(output.ids[0])) {
            return output.ids[0];
        }
        return undefined;
    }
    catch (error) {
        const err = error;
        core.warning(`An error occured while getting BuildBatchesForProject '${codebuildProjectName}'.\n Consider adding 'codebuild:ListBuildsForProject' permission for that project. ${err.message}`);
        return undefined;
    }
};
exports.getInProgressBuildId = getInProgressBuildId;
const forwardLogEventsFromCodebuild = async ([projectName, buildId]) => {
    var _a, _b;
    const command = new client_codebuild_1.BatchGetBuildsCommand({ ids: [buildId] });
    try {
        const output = await CLIENT.send(command);
        if (output.builds !== undefined) {
            const [build] = output.builds;
            if (((_a = build.logs) === null || _a === void 0 ? void 0 : _a.groupName) && ((_b = build.logs) === null || _b === void 0 ? void 0 : _b.streamName)) {
                core.info(`**** Build ${buildId} has started. Following it's output ****`);
                const forwarder = new cloudwatch_logs_forwarder_1.CloudWatchLogsForwarder(build.logs.groupName, build.logs.streamName);
                await forwarder.forwardLogEventsToGithubActions(buildId, undefined);
                core.info(`**** Build ${buildId} finished. Back to tracking pipeline status ****`);
            }
            else {
                core.warning(`CodeBuild Project ${projectName} ${buildId} is not ready!`);
            }
        }
    }
    catch (error) {
        const err = error;
        core.warning(`Could not get build with id '${buildId}', consider adding the codebuild:BatchGetBuilds permission. ${err.message}.`);
    }
};
exports.forwardLogEventsFromCodebuild = forwardLogEventsFromCodebuild;
/*
 * Used in filter methods to get out just the ProjectToBuildBatchIds which have a build id set
 */
const isProjectToBuildBatchId = (x) => !!x[1];
exports.isProjectToBuildBatchId = isProjectToBuildBatchId;
/*
 * Get the BuildBatchIds of the passed CodeBuild Projects.
 */
const getInProgressProjectToBatchIds = async (codebuildProjects) => {
    const projectsToBuildBatches = await Promise.all(codebuildProjects.map(async (codebuildProject) => [codebuildProject, await (0, exports.getInProgressBuildId)(codebuildProject)]));
    return projectsToBuildBatches.filter(exports.isProjectToBuildBatchId);
};
exports.getInProgressProjectToBatchIds = getInProgressProjectToBatchIds;
//# sourceMappingURL=codebuild.js.map