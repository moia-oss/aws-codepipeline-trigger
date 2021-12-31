import * as codebuild from '../src/codebuild';

describe('getCodeBuildsFromActions', () => {
  it('return the actions which are codebuilds', () => {
    const codeBuilds = codebuild.getCodeBuildsFromActions([
      {
        name: 'nothing matches',
        actionTypeId: {
          category: 'SomeCategory',
          provider: 'SomeProvider',
          owner: 'SomeOwner',
          version: '1.0',
        },
      },
      {
        name: 'one field matches',
        actionTypeId: {
          category: 'Build',
          provider: 'SomeProvider',
          owner: 'SomeOwner',
          version: '1.0',
        },
      },
      {
        name: 'match',
        actionTypeId: {
          category: 'Build',
          provider: 'CodeBuild',
          owner: 'SomeOwner',
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
          owner: 'SomeOwner',
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
              category: 'SomeCategory',
              provider: 'SomeProvider',
              owner: 'SomeOwner',
              version: '1.0',
            },
          },
          {
            name: 'one field matches',
            actionTypeId: {
              category: 'Build',
              provider: 'SomeProvider',
              owner: 'SomeOwner',
              version: '1.0',
            },
          },
          {
            name: 'match',
            actionTypeId: {
              category: 'Build',
              provider: 'CodeBuild',
              owner: 'SomeOwner',
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
              owner: 'SomeOwner',
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
              owner: 'SomeOwner',
              version: '1.0',
            },
            configuration: {
              ProjectName: 'BuildProject2',
            },
          },
          {
            name: 'nothing matches',
            actionTypeId: {
              category: 'SomeCategory',
              provider: 'SomeProvider',
              owner: 'SomeOwner',
              version: '1.0',
            },
          },
          {
            name: 'one field matches',
            actionTypeId: {
              category: 'Build',
              provider: 'SomeProvider',
              owner: 'SomeOwner',
              version: '1.0',
            },
          },
          {
            name: 'match',
            actionTypeId: {
              category: 'Build',
              provider: 'CodeBuild',
              owner: 'SomeOwner',
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
              owner: 'SomeOwner',
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
