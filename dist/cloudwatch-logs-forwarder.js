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
exports.CloudWatchLogsForwarder = void 0;
const core = __importStar(require("@actions/core"));
const client_cloudwatch_logs_1 = require("@aws-sdk/client-cloudwatch-logs");
const client_codebuild_1 = require("@aws-sdk/client-codebuild");
const util_1 = require("./util");
const CLIENT = new client_cloudwatch_logs_1.CloudWatchLogsClient({});
const CODEBUILD_CLIENT = new client_codebuild_1.CodeBuildClient({});
// The default backoff is 1.5 seconds
const BACKOFF = 15;
class CloudWatchLogsForwarder {
    constructor(groupName, streamName) {
        this.consecutiveEmptyLogs = 0;
        this.totalEvents = 0;
        // We start to wait for 3 seconds and increase by BACKOFF every time we get throttled
        this.wait = 30;
        this.forwardLogEventsToGithubActions = async (buildId, nextToken) => {
            var _a;
            const batchGetBuildCommand = new client_codebuild_1.BatchGetBuildsCommand({ ids: [buildId] });
            const getLogEventsCommand = new client_cloudwatch_logs_1.GetLogEventsCommand({
                logGroupName: this.groupName,
                logStreamName: this.streamName,
                startFromHead: true,
                nextToken: nextToken,
            });
            try {
                const getBuildOutput = await CODEBUILD_CLIENT.send(batchGetBuildCommand);
                const getLogEventsOutput = await CLIENT.send(getLogEventsCommand);
                if (getBuildOutput.builds && getBuildOutput.builds.length === 1) {
                    const [currentBuild] = getBuildOutput.builds;
                    const { nextForwardToken, events = [] } = getLogEventsOutput;
                    if (events.length === 0 && (this.totalEvents > 0 || currentBuild.endTime)) {
                        this.consecutiveEmptyLogs++;
                    }
                    else {
                        this.consecutiveEmptyLogs = 0;
                    }
                    this.totalEvents += events.length;
                    events.forEach(({ message }) => message && core.info(message.trimEnd()));
                    if (this.consecutiveEmptyLogs >= 2 && currentBuild.endTime) {
                        return true;
                    }
                    (0, util_1.sleep)(this.wait);
                    return this.forwardLogEventsToGithubActions(buildId, nextForwardToken);
                }
                else {
                    core.error(`Build with id: ${buildId} doesn't exist anymore or ${(_a = getBuildOutput.builds) === null || _a === void 0 ? void 0 : _a.length} is not one build.`);
                    return true;
                }
            }
            catch (error) {
                const err = error;
                if (err.message && err.message.search("Rate exceeded") !== -1) {
                    // If we get rate exceeded, we do a backoff retry
                    this.wait += BACKOFF;
                    (0, util_1.sleep)(this.wait);
                    return this.forwardLogEventsToGithubActions(buildId, nextToken);
                }
                else {
                    core.warning(`Couldn't get log events from log group ${this.groupName}. Consider adding permission getLogEvents. ${err.message}`);
                    return true;
                }
            }
        };
        this.groupName = groupName;
        this.streamName = streamName;
    }
}
exports.CloudWatchLogsForwarder = CloudWatchLogsForwarder;
//# sourceMappingURL=cloudwatch-logs-forwarder.js.map