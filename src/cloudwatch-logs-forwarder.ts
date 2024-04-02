import { sleep } from './util';
import * as core from '@actions/core';
import {
  CloudWatchLogsClient,
  GetLogEventsCommand,
} from '@aws-sdk/client-cloudwatch-logs';
import {
  BatchGetBuildsCommand,
  CodeBuildClient,
} from '@aws-sdk/client-codebuild';

const CLIENT = new CloudWatchLogsClient({});
const CODEBUILD_CLIENT = new CodeBuildClient({});

// The default backoff is 2.5 seconds
const BACKOFF = 2.5;

export class CloudWatchLogsForwarder {
  private readonly groupName: string;

  private readonly streamName: string;

  private consecutiveEmptyLogs = 0;

  private totalEvents = 0;

  // We start to wait for 5 seconds and increase by BACKOFF every time we get throttled
  private wait = 5;

  constructor(groupName: string, streamName: string) {
    this.groupName = groupName;
    this.streamName = streamName;
  }

  public forwardLogEventsToGithubActions = async (
    buildId: string,
    nextToken?: string,
  ): Promise<boolean> => {
    const batchGetBuildCommand = new BatchGetBuildsCommand({ ids: [buildId] });
    const getLogEventsCommand = new GetLogEventsCommand({
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

      if (
        events.length === 0 &&
        (this.totalEvents > 0 || currentBuild.endTime)
      ) {
        this.consecutiveEmptyLogs += 1;
      } else {
        this.consecutiveEmptyLogs = 0;
      }
      this.totalEvents += events.length;
      events.forEach(({ message }) => message && core.info(message.trimEnd()));

      // If the build is finished and we didn't get new log events for 2 consecutive times
      // we jump out of the recursion
      if (this.consecutiveEmptyLogs >= 2 && currentBuild.endTime) {
        return true;
      }

      await sleep(this.wait);
      return await this.forwardLogEventsToGithubActions(
        buildId,
        nextForwardToken,
      );
    } catch (error) {
      const err = error as Error;
      if (err.message && err.message.search('Rate exceeded') !== -1) {
        // If we get rate exceeded, we do a backoff retry
        this.wait += BACKOFF;
        await sleep(this.wait);
        return this.forwardLogEventsToGithubActions(buildId, nextToken);
      }

      core.warning(
        `Couldn't get log events from log group ${this.groupName}. Consider adding permission getLogEvents. ${err.message}`,
      );
      return true;
    }
  };
}
