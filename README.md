# AWS CodePipeline Trigger

**_Trigger AWS CodePipeline from GitHub Actions and have the possibility to
wait for the execution result_**

## Intro

If you want to control the deployment from GitHub Actions, but have specific
parts of your deployment running on AWS CodePipeline, then this Action might be
useful for you. With this action you can also wait for AWS CodePipeline to
finish successfully and do other things after the successful CodePipeline
execution. If AWS CodePipeline fails, the GitHub Action fails with it, so that
further steps are not executed.

## Setup

To configure AWS credentials in GitHub Actions, use
[configure-aws-credentials](https://github.com/marketplace/actions/configure-aws-credentials-action-for-github-actions). The

user or role you login to needs the following permissions:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "codepipeline:StartPipelineExecution",
        "codepipeline:GetPipeline",
        "codepipeline:GetPipelineExecution",
        "codepipeline:ListPipelineExecutions"
      ],
      "Resource": ["arn:aws:codepipeline:${AWS::Region}:${AWS::AccountId}:${PipelineName}"]
    },
    {
      "Effect": "Allow",
      "Action": ["codebuild:ListBuildsForProject", "codebuild:BatchGetBuilds"],
      "Resource": ["arn:aws:codebuild:${AWS::Region}:${AWS::AccountId}:project/${CodeBuildProjectName}"]
    },
    {
      "Effect": "Allow",
      "Action": ["logs:GetLogEvents"],
      "Resource": ["arn:aws:logs:${AWS::Region}:${AWS::AccountId}:log-group:/aws/codebuild/${CodeBuildProjectName}:*"]
    }
  ]
}
```

`codepipeline:GetPipelineExecution` and `codepipeline:ListPipelineExecutions`
are only necessary, if you set `wait: true`, otherwise the GitHub Action
Workflow continues without checking the pipeline state.

Furthermore, if you have set `wait: true` and `follow-codebuild: true` then aws-codepipeline-trigger is able to forward the outputs of the CodeBuild Actions inside of the CodePipeline. To make use of this feature, the following permissions must be set as well:

- `codepipeline:GetPipeline`
- `codebuild:ListBuildsForProject`
- `codebuild:BatchGetBuilds`
- `logs:GetLogEvents`

for all the CodeBuild Projects that are part of the pipeline, which is triggered.

CURRENT RESTRICTIONS: If you have multiple CodeBuilds running in parallel in the same stage aws-codepipeline-trigger picks up the first active CodeBuild and forwards it's output, ignoring everything else until it's completed.

The GitHub Action could look like this:

```yaml
- name: configure AWS creds
  uses: aws-actions/configure-aws-credentials@v1
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-session-token: ${{ secrets.AWS_SESSION_TOKEN }}
    aws-region: eu-central-1
- name: Start CodePipeline
  uses: moia-oss/aws-codepipeline-trigger@v1
  with:
    pipeline: my-pipeline
    wait: true # optional (default: false)
    follow-codebuild: true # optional (default: false)
```

How you provide the secrets is up to you. Check the
[configure-aws-credentials](https://github.com/marketplace/actions/configure-aws-credentials-action-for-github-actions)
docs for the different possibilities.

## Advanced Example

Because of the wait feature you can wait for the AWS CodePipeline to finish
successfully and trigger another AWS CodePipeline in another account
afterwards. For example if the CodePipeline in the production environment should
only be run if the CodePipeline on integration finished successfully:

```yaml
jobs:
  deploy-int:
    name: Deploy to INT
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: configure AWS creds
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.INT_AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.INT_AWS_SECRET_ACCESS_KEY }}
          aws-session-token: ${{ secrets.INT_AWS_SESSION_TOKEN }}
          aws-region: eu-central-1
      - name: Start CodePipeline
        uses: moia-oss/aws-codepipeline-trigger@v1
        with:
          pipeline: my-pipeline-int
          wait: true
          follow-codebuild: true
  deploy-prd:
    name: Deploy to PRD
    needs: deploy-int
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      - name: configure AWS creds
        uses: aws-actions/configure-aws-credentials@v1
        with:
          aws-access-key-id: ${{ secrets.PRD_AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.PRD_AWS_SECRET_ACCESS_KEY }}
          aws-session-token: ${{ secrets.PRD_AWS_SESSION_TOKEN }}
          aws-region: eu-central-1
      - name: Start CodePipeline
        uses: moia-oss/aws-codepipeline-trigger@v1
        with:
          pipeline: my-pipeline-prd
          wait: true
          follow-codebuild: true
```
