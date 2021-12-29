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
exports.getInProgressBuildBatchId = exports.getCodebuildProjectsForPipeline = void 0;
const core = __importStar(require("@actions/core"));
const client_codepipeline_1 = require("@aws-sdk/client-codepipeline");
const client_codebuild_1 = require("@aws-sdk/client-codebuild");
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
const getInProgressBuildBatchId = async (codebuildProjectName) => {
    const command = new client_codebuild_1.ListBuildBatchesForProjectCommand({
        filter: {
            status: client_codebuild_1.StatusType.IN_PROGRESS,
        },
        projectName: codebuildProjectName,
        sortOrder: client_codebuild_1.SortOrderType.DESCENDING,
    });
    try {
        const output = await CLIENT.send(command);
        if (output.ids === undefined) {
            core.info(`CodeBuild Project ${codebuildProjectName} is currently not in progress`);
            return undefined;
        }
        else if (output.ids.length > 1 || output.nextToken !== undefined) {
            core.info(`Too many concurrend BuildBatches in progress. Don't know which one to follow.`);
            return undefined;
        }
        else {
            core.info(`CodeBuild Project ${codebuildProjectName} is currently in progress`);
            return output.ids[0];
        }
    }
    catch (error) {
        core.error(`An error occured while getting BuildBatchesForProject ${codebuildProjectName}`);
        throw error;
    }
};
exports.getInProgressBuildBatchId = getInProgressBuildBatchId;
//# sourceMappingURL=codebuild.js.map