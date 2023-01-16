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
exports.CloudWatchLogsForwarder = void 0;
const core = __importStar(require("@actions/core"));
const client_cloudwatch_logs_1 = require("@aws-sdk/client-cloudwatch-logs");
const client_codebuild_1 = require("@aws-sdk/client-codebuild");
const util_1 = require("./util");
const CLIENT = new client_cloudwatch_logs_1.CloudWatchLogsClient({});
const CODEBUILD_CLIENT = new client_codebuild_1.CodeBuildClient({});
// The default backoff is 2.5 seconds
const BACKOFF = 2.5;
class CloudWatchLogsForwarder {
    constructor(groupName, streamName) {
        this.consecutiveEmptyLogs = 0;
        this.totalEvents = 0;
        // We start to wait for 5 seconds and increase by BACKOFF every time we get throttled
        this.wait = 5;
        this.forwardLogEventsToGithubActions = async (buildId, nextToken) => {
            const batchGetBuildCommand = new client_codebuild_1.BatchGetBuildsCommand({ ids: [buildId] });
            const getLogEventsCommand = new client_cloudwatch_logs_1.GetLogEventsCommand({
                logGroupName: this.groupName,
                logStreamName: this.streamName,
                startFromHead: true,
                nextToken,
            });
            try {
                const getBuildOutput = await CODEBUILD_CLIENT.send(batchGetBuildCommand);
                const getLogEventsOutput = await CLIENT.send(getLogEventsCommand);
                if (!getBuildOutput.builds) {
                    core.error(`Build with id: ${buildId} doesn't exist anymore.`);
                    return true;
                }
                const [currentBuild] = getBuildOutput.builds;
                const { nextForwardToken, events = [] } = getLogEventsOutput;
                if (events.length === 0 && (this.totalEvents > 0 || currentBuild.endTime)) {
                    this.consecutiveEmptyLogs += 1;
                }
                else {
                    this.consecutiveEmptyLogs = 0;
                }
                this.totalEvents += events.length;
                events.forEach(({ message }) => message && core.info(message.trimEnd()));
                // If the build is finished and we didn't get new log events for 2 consecutive times
                // we jump out of the recursion
                if (this.consecutiveEmptyLogs >= 2 && currentBuild.endTime) {
                    return true;
                }
                await (0, util_1.sleep)(this.wait);
                return await this.forwardLogEventsToGithubActions(buildId, nextForwardToken);
            }
            catch (error) {
                const err = error;
                if (err.message && err.message.search('Rate exceeded') !== -1) {
                    // If we get rate exceeded, we do a backoff retry
                    this.wait += BACKOFF;
                    await (0, util_1.sleep)(this.wait);
                    return this.forwardLogEventsToGithubActions(buildId, nextToken);
                }
                core.warning(`Couldn't get log events from log group ${this.groupName}. Consider adding permission getLogEvents. ${err.message}`);
                return true;
            }
        };
        this.groupName = groupName;
        this.streamName = streamName;
    }
}
exports.CloudWatchLogsForwarder = CloudWatchLogsForwarder;
//# sourceMappingURL=cloudwatch-logs-forwarder.js.map