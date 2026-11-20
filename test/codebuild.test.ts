import * as codebuild from '../src/codebuild';
import * as core from '@actions/core';
import {
  BatchGetBuildsCommand,
  CodeBuildClient,
  ListBuildsForProjectCommand,
} from '@aws-sdk/client-codebuild';

describe('getCodeBuildsFromActions', () => {
  it('return the actions which are codebuilds', () => {
    const codeBuilds = codebuild.getCodeBuildsFromActions([
      {
        name: 'nothing matches',
        actionTypeId: {
          category: 'Source',
          provider: 'SomeProvider',
          owner: 'AWS',
          version: '1.0',
        },
      },
      {
        name: 'one field matches',
        actionTypeId: {
          category: 'Build',
          provider: 'SomeProvider',
          owner: 'AWS',
          version: '1.0',
        },
      },
      {
        name: 'match',
        actionTypeId: {
          category: 'Build',
          provider: 'CodeBuild',
          owner: 'AWS',
          version: '1.0',
        },
        configuration: {
          ProjectName: 'BuildProject',
        },
      },
      {
        name: 'no configuration',
        actionTypeId: {
          category: 'Build',
          provider: 'CodeBuild',
          owner: 'AWS',
          version: '1.0',
        },
      },
    ]);
    expect(codeBuilds).toHaveLength(1);
    expect(codeBuilds).toContain('BuildProject');
  });
});

describe('getCodeBuildsFromStages', () => {
  it('return the actions which are codebuilds', () => {
    const codeBuilds = codebuild.getCodeBuildsFromStages([
      {
        name: 'First Stage with one match',
        actions: [
          {
            name: 'nothing matches',
            actionTypeId: {
              category: 'Source',
              provider: 'SomeProvider',
              owner: 'AWS',
              version: '1.0',
            },
          },
          {
            name: 'one field matches',
            actionTypeId: {
              category: 'Build',
              provider: 'SomeProvider',
              owner: 'AWS',
              version: '1.0',
            },
          },
          {
            name: 'match',
            actionTypeId: {
              category: 'Build',
              provider: 'CodeBuild',
              owner: 'AWS',
              version: '1.0',
            },
            configuration: {
              ProjectName: 'BuildProject',
            },
          },
          {
            name: 'no configuration',
            actionTypeId: {
              category: 'Build',
              provider: 'CodeBuild',
              owner: 'AWS',
              version: '1.0',
            },
          },
        ],
      },
      {
        name: 'Second Stage with 2 Matches',
        actions: [
          {
            name: 'match',
            actionTypeId: {
              category: 'Build',
              provider: 'CodeBuild',
              owner: 'AWS',
              version: '1.0',
            },
            configuration: {
              ProjectName: 'BuildProject2',
            },
          },
          {
            name: 'nothing matches',
            actionTypeId: {
              category: 'Source',
              provider: 'SomeProvider',
              owner: 'AWS',
              version: '1.0',
            },
          },
          {
            name: 'one field matches',
            actionTypeId: {
              category: 'Build',
              provider: 'SomeProvider',
              owner: 'AWS',
              version: '1.0',
            },
          },
          {
            name: 'match',
            actionTypeId: {
              category: 'Build',
              provider: 'CodeBuild',
              owner: 'AWS',
              version: '1.0',
            },
            configuration: {
              ProjectName: 'BuildProject3',
            },
          },
          {
            name: 'no configuration',
            actionTypeId: {
              category: 'Build',
              provider: 'CodeBuild',
              owner: 'AWS',
              version: '1.0',
            },
          },
        ],
      },
    ]);
    expect(codeBuilds).toHaveLength(3);
    expect(codeBuilds).toContain('BuildProject');
    expect(codeBuilds).toContain('BuildProject2');
    expect(codeBuilds).toContain('BuildProject3');
  });
});

describe('isProjectToBuildBatchtId', () => {
  it('returns true on a ProjectToBuildBatchId match', () => {
    const result = codebuild.isProjectToBuildBatchId(['ProjectName', 'SomeId']);
    expect(result).toBe(true);
  });
  it('returns false on a ProjectToBuildBatchId without an id', () => {
    const result = codebuild.isProjectToBuildBatchId(['ProjectName', '']);
    expect(result).toBe(false);
  });
});

describe('reportCodeBuildError', () => {
  afterEach(() => jest.restoreAllMocks());

  it('reports throttling as info, without a permission hint', () => {
    const info = jest.spyOn(core, 'info');
    const warning = jest.spyOn(core, 'warning');
    codebuild.reportCodeBuildError(
      'BatchGetBuilds',
      'codebuild:BatchGetBuilds',
      'some-build',
      new Error('Rate exceeded: BatchGetBuilds'),
    );
    expect(warning).not.toHaveBeenCalled();
    expect(info).toHaveBeenCalledWith(expect.stringContaining('throttled'));
  });

  it('reports access denied as a warning with a permission hint', () => {
    const warning = jest.spyOn(core, 'warning');
    codebuild.reportCodeBuildError(
      'ListBuildsForProject',
      'codebuild:ListBuildsForProject',
      'some-project',
      Object.assign(new Error('User is not authorized to perform: x'), {
        name: 'AccessDeniedException',
      }),
    );
    expect(warning).toHaveBeenCalledWith(
      expect.stringContaining(
        "Consider adding the 'codebuild:ListBuildsForProject' permission",
      ),
    );
  });

  it('reports other errors as a warning without a permission hint', () => {
    const warning = jest.spyOn(core, 'warning');
    codebuild.reportCodeBuildError(
      'BatchGetBuilds',
      'codebuild:BatchGetBuilds',
      'some-build',
      new Error('socket hang up'),
    );
    expect(warning).toHaveBeenCalledWith(
      expect.not.stringContaining('permission'),
    );
  });
});

describe('getInProgressProjectToBatchIds', () => {
  afterEach(() => jest.restoreAllMocks());

  it('uses one BatchGetBuilds call for all projects and returns the in-progress builds', async () => {
    const batchCalls: string[][] = [];
    jest
      .spyOn(CodeBuildClient.prototype, 'send')
      .mockImplementation(async (command: unknown) => {
        if (command instanceof ListBuildsForProjectCommand) {
          const project = command.input.projectName as string;
          return project === 'idle' ? { ids: [] } : { ids: [`${project}:1`] };
        }
        if (command instanceof BatchGetBuildsCommand) {
          const ids = command.input.ids as string[];
          batchCalls.push(ids);
          return {
            builds: ids.map((id) => ({
              id,
              buildStatus: id.startsWith('running')
                ? 'IN_PROGRESS'
                : 'SUCCEEDED',
            })),
          };
        }
        throw new Error('unexpected command');
      });

    const result = await codebuild.getInProgressProjectToBatchIds([
      'running-a',
      'done-b',
      'idle',
      'running-c',
    ]);

    expect(batchCalls).toEqual([['running-a:1', 'done-b:1', 'running-c:1']]);
    expect(result).toEqual([
      ['running-a', 'running-a:1'],
      ['running-c', 'running-c:1'],
    ]);
  });

  it('does not warn when CodeBuild throttles', async () => {
    const warning = jest.spyOn(core, 'warning');
    jest
      .spyOn(CodeBuildClient.prototype, 'send')
      .mockImplementation(async () => {
        throw Object.assign(new Error('Rate exceeded'), {
          name: 'ThrottlingException',
        });
      });

    const result = await codebuild.getInProgressProjectToBatchIds(['a', 'b']);

    expect(result).toEqual([]);
    expect(warning).not.toHaveBeenCalled();
  });
});
