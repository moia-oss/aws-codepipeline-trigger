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
exports.getInProgressProjectToBatchIds = exports.forwardLogEventsFromCodebuild = exports.getInProgressBuildId = exports.getCodebuildProjectsForPipeline = void 0;
const core = __importStar(require("@actions/core"));
const client_codepipeline_1 = require("@aws-sdk/client-codepipeline");
const client_codebuild_1 = require("@aws-sdk/client-codebuild");
const cloudwatch_logs_forwarder_1 = require("./cloudwatch-logs-forwarder");
const CLIENT = new client_codebuild_1.CodeBuildClient({});
const getCodebuildProjectsForPipeline = async (client, codePipelineName) => {
    var _a, _b;
    const command = new client_codepipeline_1.GetPipelineCommand({ name: codePipelineName });
    try {
        const output = await client.send(command);
        if (((_a = output.pipeline) === null || _a === void 0 ? void 0 : _a.stages) !== undefined) {
            return getCodeBuildsFromStages((_b = output.pipeline) === null || _b === void 0 ? void 0 : _b.stages);
        }
        else {
            core.warning('Couldn\'t get pipeline information. You are probably missing permissions.');
            return [];
        }
    }
    catch (error) {
        core.error(`An error occured while getting pipeline information for '${codePipelineName}'`);
        return [];
    }
};
exports.getCodebuildProjectsForPipeline = getCodebuildProjectsForPipeline;
const getCodeBuildsFromStages = (stages) => {
    return stages.flatMap(stage => {
        if (stage.actions !== undefined) {
            return getCodeBuildsFromActions(stage.actions);
        }
        return [];
    });
};
const getCodeBuildsFromActions = (actions) => {
    return actions.map(action => {
        var _a, _b;
        if (((_a = action.actionTypeId) === null || _a === void 0 ? void 0 : _a.category) === 'Build' && ((_b = action.actionTypeId) === null || _b === void 0 ? void 0 : _b.provider) === 'CodeBuild') {
            if (action.configuration !== undefined) {
                return action.configuration['ProjectName'];
            }
        }
        return '';
    }).filter(x => x !== '');
};
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
        else {
            if (await isBuildIdInProgress(output.ids[0])) {
                return output.ids[0];
            }
            else {
                return undefined;
            }
        }
    }
    catch (error) {
        const err = error;
        core.warning(`An error occured while getting BuildBatchesForProject '${codebuildProjectName}'.\n Consider adding 'codebuild:ListBuildsForProject' permission for that project. ${err.message}`);
        throw error;
    }
};
exports.getInProgressBuildId = getInProgressBuildId;
const isBuildIdInProgress = async (id) => {
    var _a;
    const command = new client_codebuild_1.BatchGetBuildsCommand({ ids: [id] });
    try {
        const output = await CLIENT.send(command);
        if (output.builds && output.builds.length === 1) {
            return output.builds[0].buildStatus === client_codebuild_1.StatusType.IN_PROGRESS;
        }
        else {
            core.warning(`Unexpected amount of builds returned: ${(_a = output.builds) === null || _a === void 0 ? void 0 : _a.length}`);
        }
    }
    catch (error) {
        const err = error;
        core.warning(`Couldn't get build with id '${id}'. ${err.message}`);
    }
    return false;
};
const forwardLogEventsFromCodebuild = async ([projectName, buildId]) => {
    const command = new client_codebuild_1.BatchGetBuildsCommand({ ids: [buildId] });
    try {
        const output = await CLIENT.send(command);
        if (output.builds !== undefined) {
            const [build] = output.builds;
            if (build.logs && build.logs.groupName && build.logs.streamName) {
                core.info(`**** CodeBuild Project ${projectName} has started Build ${buildId} ****`);
                const forwarder = new cloudwatch_logs_forwarder_1.CloudWatchLogsForwarder(build.logs.groupName, build.logs.streamName);
                var result = false;
                while (!result) {
                    result = await forwarder.forwardLogEventsToGithubActions(buildId, undefined);
                }
                core.info(`**** CodeBuild Project ${projectName} has finished Build ${buildId} ****`);
            }
            else {
                core.warning(`CodeBuild Project ${projectName} ${buildId} is not ready!`);
            }
        }
    }
    catch (error) {
        core.warning(`Could not get build for id ${buildId} in project ${projectName}.`);
    }
};
exports.forwardLogEventsFromCodebuild = forwardLogEventsFromCodebuild;
/*
 * used in filter methods to get out just the ProjectToBuildBatchIds which have a build id set
 */
const isProjectToBuildBatchId = (x) => {
    return !!x[1];
};
/*
 * Get the BuildBatchIds of the passed CodeBuild Projects.
 */
const getInProgressProjectToBatchIds = async (codebuildProjects) => {
    const projectsToBuildBatches = await Promise.all(codebuildProjects.map(async (codebuildProject) => [codebuildProject, await (0, exports.getInProgressBuildId)(codebuildProject)]));
    return projectsToBuildBatches.filter(isProjectToBuildBatchId);
};
exports.getInProgressProjectToBatchIds = getInProgressProjectToBatchIds;
//# sourceMappingURL=codebuild.js.map