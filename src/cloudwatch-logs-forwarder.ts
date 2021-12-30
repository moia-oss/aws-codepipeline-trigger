import * as core from '@actions/core';
import {
  CloudWatchLogsClient,
  GetLogEventsCommand,
} from '@aws-sdk/client-cloudwatch-logs';

import {
  BatchGetBuildsCommand,
  CodeBuildClient,
} from '@aws-sdk/client-codebuild';

import { sleep } from './util';

const CLIENT = new CloudWatchLogsClient({});
const CODEBUILD_CLIENT = new CodeBuildClient({});

// The default backoff is 1.5 seconds
const BACKOFF = 15;

export class CloudWatchLogsForwarder {
  private groupName: string;
  private streamName: string;
  private consecutiveEmptyLogs: number = 0;
  private totalEvents: number = 0;
  // We start to wait for 3 seconds and increase by BACKOFF every time we get throttled
  private wait: number = 30;

  constructor(groupName: string, streamName: string) {
    this.groupName = groupName;
    this.streamName = streamName;
  }

  public forwardLogEventsToGithubActions = async (buildId: string, nextToken?: string): Promise<boolean> => {
    const batchGetBuildCommand = new BatchGetBuildsCommand({ ids: [buildId] });
    const getLogEventsCommand = new GetLogEventsCommand({
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
        } else {
          this.consecutiveEmptyLogs = 0;
        }
        this.totalEvents += events.length;
        events.forEach(({ message }) => message && core.info(message.trimEnd()));

        if (this.consecutiveEmptyLogs >= 2 && currentBuild.endTime) {
          return true;
        }
        sleep(this.wait);
        return this.forwardLogEventsToGithubActions(buildId, nextForwardToken);
      } else {
        core.error(`Build with id: ${buildId} doesn't exist anymore or ${getBuildOutput.builds?.length} is not one build.`);
        return true;
      }
    } catch (error) {
      const err = error as Error;
      if (err.message && err.message.search("Rate exceeded") !== -1) {
        // If we get rate exceeded, we do a backoff retry
        this.wait += BACKOFF;
        sleep(this.wait);
        return this.forwardLogEventsToGithubActions(buildId, nextToken);
      } else {
        core.warning(
          `Couldn't get log events from log group ${this.groupName}. Consider adding permission getLogEvents. ${err.message}`
        );
        return true;
      }
    }
  }
}
