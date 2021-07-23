"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApprovalResult = exports.ApprovalStatus = exports.ApprovalAlreadyCompletedException = exports.ActionTypeNotFoundException = exports.ActionTypeDeclaration = exports.ActionTypeUrls = exports.ActionTypeProperty = exports.ActionTypePermissions = exports.ActionTypeIdentifier = exports.ActionTypeExecutor = exports.ExecutorType = exports.ExecutorConfiguration = exports.LambdaExecutorConfiguration = exports.JobWorkerExecutorConfiguration = exports.ActionTypeArtifactDetails = exports.ActionType = exports.ActionTypeSettings = exports.ArtifactDetails = exports.ActionState = exports.ActionRevision = exports.ActionNotFoundException = exports.ActionExecutionFilter = exports.ActionExecutionDetail = exports.ActionExecutionOutput = exports.ActionExecutionResult = exports.ActionExecutionInput = exports.ArtifactDetail = exports.S3Location = exports.ActionExecution = exports.ActionExecutionStatus = exports.ErrorDetails = exports.ActionDeclaration = exports.OutputArtifact = exports.InputArtifact = exports.ActionTypeId = exports.ActionOwner = exports.ActionContext = exports.ActionConfigurationProperty = exports.ActionConfigurationPropertyType = exports.ActionConfiguration = exports.ActionCategory = exports.InvalidClientTokenException = exports.AcknowledgeThirdPartyJobOutput = exports.AcknowledgeThirdPartyJobInput = exports.ValidationException = exports.JobNotFoundException = exports.InvalidNonceException = exports.AcknowledgeJobOutput = exports.JobStatus = exports.AcknowledgeJobInput = void 0;
exports.PipelineMetadata = exports.GetPipelineInput = exports.GetJobDetailsOutput = exports.JobDetails = exports.JobData = exports.PipelineContext = exports.StageContext = exports.GetJobDetailsInput = exports.GetActionTypeOutput = exports.GetActionTypeInput = exports.EnableStageTransitionInput = exports.StageNotFoundException = exports.PipelineNotFoundException = exports.DisableStageTransitionInput = exports.StageTransitionType = exports.WebhookNotFoundException = exports.DeregisterWebhookWithThirdPartyOutput = exports.DeregisterWebhookWithThirdPartyInput = exports.DeleteWebhookOutput = exports.DeleteWebhookInput = exports.DeletePipelineInput = exports.DeleteCustomActionTypeInput = exports.PipelineNameInUseException = exports.InvalidStructureException = exports.InvalidStageDeclarationException = exports.InvalidBlockerDeclarationException = exports.InvalidActionDeclarationException = exports.CreatePipelineOutput = exports.CreatePipelineInput = exports.PipelineDeclaration = exports.StageDeclaration = exports.TooManyTagsException = exports.LimitExceededException = exports.InvalidTagsException = exports.CreateCustomActionTypeOutput = exports.CreateCustomActionTypeInput = exports.Tag = exports.ConcurrentModificationException = exports.BlockerDeclaration = exports.BlockerType = exports.AWSSessionCredentials = exports.ArtifactStore = exports.ArtifactStoreType = exports.EncryptionKey = exports.EncryptionKeyType = exports.ArtifactRevision = exports.Artifact = exports.ArtifactLocation = exports.ArtifactLocationType = exports.S3ArtifactLocation = void 0;
exports.PollForThirdPartyJobsOutput = exports.ThirdPartyJob = exports.PollForThirdPartyJobsInput = exports.PollForJobsOutput = exports.Job = exports.PollForJobsInput = exports.ListWebhooksOutput = exports.ListWebhookItem = exports.WebhookDefinition = exports.WebhookFilterRule = exports.WebhookAuthConfiguration = exports.WebhookAuthenticationType = exports.ListWebhooksInput = exports.ResourceNotFoundException = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.InvalidArnException = exports.ListPipelinesOutput = exports.PipelineSummary = exports.ListPipelinesInput = exports.ListPipelineExecutionsOutput = exports.PipelineExecutionSummary = exports.ExecutionTrigger = exports.TriggerType = exports.StopExecutionTrigger = exports.SourceRevision = exports.ListPipelineExecutionsInput = exports.ListActionTypesOutput = exports.ListActionTypesInput = exports.ListActionExecutionsOutput = exports.ListActionExecutionsInput = exports.InvalidNextTokenException = exports.InvalidJobException = exports.GetThirdPartyJobDetailsOutput = exports.ThirdPartyJobDetails = exports.ThirdPartyJobData = exports.GetThirdPartyJobDetailsInput = exports.GetPipelineStateOutput = exports.StageState = exports.TransitionState = exports.StageExecution = exports.StageExecutionStatus = exports.GetPipelineStateInput = exports.PipelineExecutionNotFoundException = exports.GetPipelineExecutionOutput = exports.PipelineExecution = exports.PipelineExecutionStatus = exports.GetPipelineExecutionInput = exports.PipelineVersionNotFoundException = exports.GetPipelineOutput = void 0;
exports.UpdatePipelineOutput = exports.UpdatePipelineInput = exports.UpdateActionTypeInput = exports.RequestFailedException = exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.StopPipelineExecutionOutput = exports.StopPipelineExecutionInput = exports.PipelineExecutionNotStoppableException = exports.DuplicatedStopRequestException = exports.StartPipelineExecutionOutput = exports.StartPipelineExecutionInput = exports.StageNotRetryableException = exports.RetryStageExecutionOutput = exports.RetryStageExecutionInput = exports.StageRetryMode = exports.NotLatestPipelineExecutionException = exports.ConflictException = exports.RegisterWebhookWithThirdPartyOutput = exports.RegisterWebhookWithThirdPartyInput = exports.PutWebhookOutput = exports.PutWebhookInput = exports.InvalidWebhookFilterPatternException = exports.InvalidWebhookAuthenticationParametersException = exports.PutThirdPartyJobSuccessResultInput = exports.PutThirdPartyJobFailureResultInput = exports.PutJobSuccessResultInput = exports.ExecutionDetails = exports.CurrentRevision = exports.OutputVariablesSizeExceededException = exports.PutJobFailureResultInput = exports.FailureDetails = exports.FailureType = exports.InvalidJobStateException = exports.PutApprovalResultOutput = exports.PutApprovalResultInput = exports.InvalidApprovalTokenException = exports.PutActionRevisionOutput = exports.PutActionRevisionInput = void 0;
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AcknowledgeJobInput;
(function (AcknowledgeJobInput) {
    /**
     * @internal
     */
    AcknowledgeJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcknowledgeJobInput = exports.AcknowledgeJobInput || (exports.AcknowledgeJobInput = {}));
var JobStatus;
(function (JobStatus) {
    JobStatus["Created"] = "Created";
    JobStatus["Dispatched"] = "Dispatched";
    JobStatus["Failed"] = "Failed";
    JobStatus["InProgress"] = "InProgress";
    JobStatus["Queued"] = "Queued";
    JobStatus["Succeeded"] = "Succeeded";
    JobStatus["TimedOut"] = "TimedOut";
})(JobStatus = exports.JobStatus || (exports.JobStatus = {}));
var AcknowledgeJobOutput;
(function (AcknowledgeJobOutput) {
    /**
     * @internal
     */
    AcknowledgeJobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcknowledgeJobOutput = exports.AcknowledgeJobOutput || (exports.AcknowledgeJobOutput = {}));
var InvalidNonceException;
(function (InvalidNonceException) {
    /**
     * @internal
     */
    InvalidNonceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNonceException = exports.InvalidNonceException || (exports.InvalidNonceException = {}));
var JobNotFoundException;
(function (JobNotFoundException) {
    /**
     * @internal
     */
    JobNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobNotFoundException = exports.JobNotFoundException || (exports.JobNotFoundException = {}));
var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationException = exports.ValidationException || (exports.ValidationException = {}));
var AcknowledgeThirdPartyJobInput;
(function (AcknowledgeThirdPartyJobInput) {
    /**
     * @internal
     */
    AcknowledgeThirdPartyJobInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcknowledgeThirdPartyJobInput = exports.AcknowledgeThirdPartyJobInput || (exports.AcknowledgeThirdPartyJobInput = {}));
var AcknowledgeThirdPartyJobOutput;
(function (AcknowledgeThirdPartyJobOutput) {
    /**
     * @internal
     */
    AcknowledgeThirdPartyJobOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AcknowledgeThirdPartyJobOutput = exports.AcknowledgeThirdPartyJobOutput || (exports.AcknowledgeThirdPartyJobOutput = {}));
var InvalidClientTokenException;
(function (InvalidClientTokenException) {
    /**
     * @internal
     */
    InvalidClientTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidClientTokenException = exports.InvalidClientTokenException || (exports.InvalidClientTokenException = {}));
var ActionCategory;
(function (ActionCategory) {
    ActionCategory["Approval"] = "Approval";
    ActionCategory["Build"] = "Build";
    ActionCategory["Deploy"] = "Deploy";
    ActionCategory["Invoke"] = "Invoke";
    ActionCategory["Source"] = "Source";
    ActionCategory["Test"] = "Test";
})(ActionCategory = exports.ActionCategory || (exports.ActionCategory = {}));
var ActionConfiguration;
(function (ActionConfiguration) {
    /**
     * @internal
     */
    ActionConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionConfiguration = exports.ActionConfiguration || (exports.ActionConfiguration = {}));
var ActionConfigurationPropertyType;
(function (ActionConfigurationPropertyType) {
    ActionConfigurationPropertyType["Boolean"] = "Boolean";
    ActionConfigurationPropertyType["Number"] = "Number";
    ActionConfigurationPropertyType["String"] = "String";
})(ActionConfigurationPropertyType = exports.ActionConfigurationPropertyType || (exports.ActionConfigurationPropertyType = {}));
var ActionConfigurationProperty;
(function (ActionConfigurationProperty) {
    /**
     * @internal
     */
    ActionConfigurationProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionConfigurationProperty = exports.ActionConfigurationProperty || (exports.ActionConfigurationProperty = {}));
var ActionContext;
(function (ActionContext) {
    /**
     * @internal
     */
    ActionContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionContext = exports.ActionContext || (exports.ActionContext = {}));
var ActionOwner;
(function (ActionOwner) {
    ActionOwner["AWS"] = "AWS";
    ActionOwner["Custom"] = "Custom";
    ActionOwner["ThirdParty"] = "ThirdParty";
})(ActionOwner = exports.ActionOwner || (exports.ActionOwner = {}));
var ActionTypeId;
(function (ActionTypeId) {
    /**
     * @internal
     */
    ActionTypeId.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeId = exports.ActionTypeId || (exports.ActionTypeId = {}));
var InputArtifact;
(function (InputArtifact) {
    /**
     * @internal
     */
    InputArtifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InputArtifact = exports.InputArtifact || (exports.InputArtifact = {}));
var OutputArtifact;
(function (OutputArtifact) {
    /**
     * @internal
     */
    OutputArtifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputArtifact = exports.OutputArtifact || (exports.OutputArtifact = {}));
var ActionDeclaration;
(function (ActionDeclaration) {
    /**
     * @internal
     */
    ActionDeclaration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionDeclaration = exports.ActionDeclaration || (exports.ActionDeclaration = {}));
var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ErrorDetails = exports.ErrorDetails || (exports.ErrorDetails = {}));
var ActionExecutionStatus;
(function (ActionExecutionStatus) {
    ActionExecutionStatus["Abandoned"] = "Abandoned";
    ActionExecutionStatus["Failed"] = "Failed";
    ActionExecutionStatus["InProgress"] = "InProgress";
    ActionExecutionStatus["Succeeded"] = "Succeeded";
})(ActionExecutionStatus = exports.ActionExecutionStatus || (exports.ActionExecutionStatus = {}));
var ActionExecution;
(function (ActionExecution) {
    /**
     * @internal
     */
    ActionExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionExecution = exports.ActionExecution || (exports.ActionExecution = {}));
var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3Location = exports.S3Location || (exports.S3Location = {}));
var ArtifactDetail;
(function (ArtifactDetail) {
    /**
     * @internal
     */
    ArtifactDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactDetail = exports.ArtifactDetail || (exports.ArtifactDetail = {}));
var ActionExecutionInput;
(function (ActionExecutionInput) {
    /**
     * @internal
     */
    ActionExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionExecutionInput = exports.ActionExecutionInput || (exports.ActionExecutionInput = {}));
var ActionExecutionResult;
(function (ActionExecutionResult) {
    /**
     * @internal
     */
    ActionExecutionResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionExecutionResult = exports.ActionExecutionResult || (exports.ActionExecutionResult = {}));
var ActionExecutionOutput;
(function (ActionExecutionOutput) {
    /**
     * @internal
     */
    ActionExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionExecutionOutput = exports.ActionExecutionOutput || (exports.ActionExecutionOutput = {}));
var ActionExecutionDetail;
(function (ActionExecutionDetail) {
    /**
     * @internal
     */
    ActionExecutionDetail.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionExecutionDetail = exports.ActionExecutionDetail || (exports.ActionExecutionDetail = {}));
var ActionExecutionFilter;
(function (ActionExecutionFilter) {
    /**
     * @internal
     */
    ActionExecutionFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionExecutionFilter = exports.ActionExecutionFilter || (exports.ActionExecutionFilter = {}));
var ActionNotFoundException;
(function (ActionNotFoundException) {
    /**
     * @internal
     */
    ActionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionNotFoundException = exports.ActionNotFoundException || (exports.ActionNotFoundException = {}));
var ActionRevision;
(function (ActionRevision) {
    /**
     * @internal
     */
    ActionRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionRevision = exports.ActionRevision || (exports.ActionRevision = {}));
var ActionState;
(function (ActionState) {
    /**
     * @internal
     */
    ActionState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionState = exports.ActionState || (exports.ActionState = {}));
var ArtifactDetails;
(function (ArtifactDetails) {
    /**
     * @internal
     */
    ArtifactDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactDetails = exports.ArtifactDetails || (exports.ArtifactDetails = {}));
var ActionTypeSettings;
(function (ActionTypeSettings) {
    /**
     * @internal
     */
    ActionTypeSettings.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeSettings = exports.ActionTypeSettings || (exports.ActionTypeSettings = {}));
var ActionType;
(function (ActionType) {
    /**
     * @internal
     */
    ActionType.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var ActionTypeArtifactDetails;
(function (ActionTypeArtifactDetails) {
    /**
     * @internal
     */
    ActionTypeArtifactDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeArtifactDetails = exports.ActionTypeArtifactDetails || (exports.ActionTypeArtifactDetails = {}));
var JobWorkerExecutorConfiguration;
(function (JobWorkerExecutorConfiguration) {
    /**
     * @internal
     */
    JobWorkerExecutorConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JobWorkerExecutorConfiguration = exports.JobWorkerExecutorConfiguration || (exports.JobWorkerExecutorConfiguration = {}));
var LambdaExecutorConfiguration;
(function (LambdaExecutorConfiguration) {
    /**
     * @internal
     */
    LambdaExecutorConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LambdaExecutorConfiguration = exports.LambdaExecutorConfiguration || (exports.LambdaExecutorConfiguration = {}));
var ExecutorConfiguration;
(function (ExecutorConfiguration) {
    /**
     * @internal
     */
    ExecutorConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutorConfiguration = exports.ExecutorConfiguration || (exports.ExecutorConfiguration = {}));
var ExecutorType;
(function (ExecutorType) {
    ExecutorType["JobWorker"] = "JobWorker";
    ExecutorType["Lambda"] = "Lambda";
})(ExecutorType = exports.ExecutorType || (exports.ExecutorType = {}));
var ActionTypeExecutor;
(function (ActionTypeExecutor) {
    /**
     * @internal
     */
    ActionTypeExecutor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeExecutor = exports.ActionTypeExecutor || (exports.ActionTypeExecutor = {}));
var ActionTypeIdentifier;
(function (ActionTypeIdentifier) {
    /**
     * @internal
     */
    ActionTypeIdentifier.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeIdentifier = exports.ActionTypeIdentifier || (exports.ActionTypeIdentifier = {}));
var ActionTypePermissions;
(function (ActionTypePermissions) {
    /**
     * @internal
     */
    ActionTypePermissions.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypePermissions = exports.ActionTypePermissions || (exports.ActionTypePermissions = {}));
var ActionTypeProperty;
(function (ActionTypeProperty) {
    /**
     * @internal
     */
    ActionTypeProperty.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeProperty = exports.ActionTypeProperty || (exports.ActionTypeProperty = {}));
var ActionTypeUrls;
(function (ActionTypeUrls) {
    /**
     * @internal
     */
    ActionTypeUrls.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeUrls = exports.ActionTypeUrls || (exports.ActionTypeUrls = {}));
var ActionTypeDeclaration;
(function (ActionTypeDeclaration) {
    /**
     * @internal
     */
    ActionTypeDeclaration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeDeclaration = exports.ActionTypeDeclaration || (exports.ActionTypeDeclaration = {}));
var ActionTypeNotFoundException;
(function (ActionTypeNotFoundException) {
    /**
     * @internal
     */
    ActionTypeNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionTypeNotFoundException = exports.ActionTypeNotFoundException || (exports.ActionTypeNotFoundException = {}));
var ApprovalAlreadyCompletedException;
(function (ApprovalAlreadyCompletedException) {
    /**
     * @internal
     */
    ApprovalAlreadyCompletedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalAlreadyCompletedException = exports.ApprovalAlreadyCompletedException || (exports.ApprovalAlreadyCompletedException = {}));
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus["Approved"] = "Approved";
    ApprovalStatus["Rejected"] = "Rejected";
})(ApprovalStatus = exports.ApprovalStatus || (exports.ApprovalStatus = {}));
var ApprovalResult;
(function (ApprovalResult) {
    /**
     * @internal
     */
    ApprovalResult.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ApprovalResult = exports.ApprovalResult || (exports.ApprovalResult = {}));
var S3ArtifactLocation;
(function (S3ArtifactLocation) {
    /**
     * @internal
     */
    S3ArtifactLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(S3ArtifactLocation = exports.S3ArtifactLocation || (exports.S3ArtifactLocation = {}));
var ArtifactLocationType;
(function (ArtifactLocationType) {
    ArtifactLocationType["S3"] = "S3";
})(ArtifactLocationType = exports.ArtifactLocationType || (exports.ArtifactLocationType = {}));
var ArtifactLocation;
(function (ArtifactLocation) {
    /**
     * @internal
     */
    ArtifactLocation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactLocation = exports.ArtifactLocation || (exports.ArtifactLocation = {}));
var Artifact;
(function (Artifact) {
    /**
     * @internal
     */
    Artifact.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Artifact = exports.Artifact || (exports.Artifact = {}));
var ArtifactRevision;
(function (ArtifactRevision) {
    /**
     * @internal
     */
    ArtifactRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactRevision = exports.ArtifactRevision || (exports.ArtifactRevision = {}));
var EncryptionKeyType;
(function (EncryptionKeyType) {
    EncryptionKeyType["KMS"] = "KMS";
})(EncryptionKeyType = exports.EncryptionKeyType || (exports.EncryptionKeyType = {}));
var EncryptionKey;
(function (EncryptionKey) {
    /**
     * @internal
     */
    EncryptionKey.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EncryptionKey = exports.EncryptionKey || (exports.EncryptionKey = {}));
var ArtifactStoreType;
(function (ArtifactStoreType) {
    ArtifactStoreType["S3"] = "S3";
})(ArtifactStoreType = exports.ArtifactStoreType || (exports.ArtifactStoreType = {}));
var ArtifactStore;
(function (ArtifactStore) {
    /**
     * @internal
     */
    ArtifactStore.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ArtifactStore = exports.ArtifactStore || (exports.ArtifactStore = {}));
var AWSSessionCredentials;
(function (AWSSessionCredentials) {
    /**
     * @internal
     */
    AWSSessionCredentials.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.accessKeyId && { accessKeyId: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.secretAccessKey && { secretAccessKey: smithy_client_1.SENSITIVE_STRING }),
        ...(obj.sessionToken && { sessionToken: smithy_client_1.SENSITIVE_STRING }),
    });
})(AWSSessionCredentials = exports.AWSSessionCredentials || (exports.AWSSessionCredentials = {}));
var BlockerType;
(function (BlockerType) {
    BlockerType["Schedule"] = "Schedule";
})(BlockerType = exports.BlockerType || (exports.BlockerType = {}));
var BlockerDeclaration;
(function (BlockerDeclaration) {
    /**
     * @internal
     */
    BlockerDeclaration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockerDeclaration = exports.BlockerDeclaration || (exports.BlockerDeclaration = {}));
var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConcurrentModificationException = exports.ConcurrentModificationException || (exports.ConcurrentModificationException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateCustomActionTypeInput;
(function (CreateCustomActionTypeInput) {
    /**
     * @internal
     */
    CreateCustomActionTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomActionTypeInput = exports.CreateCustomActionTypeInput || (exports.CreateCustomActionTypeInput = {}));
var CreateCustomActionTypeOutput;
(function (CreateCustomActionTypeOutput) {
    /**
     * @internal
     */
    CreateCustomActionTypeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateCustomActionTypeOutput = exports.CreateCustomActionTypeOutput || (exports.CreateCustomActionTypeOutput = {}));
var InvalidTagsException;
(function (InvalidTagsException) {
    /**
     * @internal
     */
    InvalidTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidTagsException = exports.InvalidTagsException || (exports.InvalidTagsException = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TooManyTagsException = exports.TooManyTagsException || (exports.TooManyTagsException = {}));
var StageDeclaration;
(function (StageDeclaration) {
    /**
     * @internal
     */
    StageDeclaration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StageDeclaration = exports.StageDeclaration || (exports.StageDeclaration = {}));
var PipelineDeclaration;
(function (PipelineDeclaration) {
    /**
     * @internal
     */
    PipelineDeclaration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineDeclaration = exports.PipelineDeclaration || (exports.PipelineDeclaration = {}));
var CreatePipelineInput;
(function (CreatePipelineInput) {
    /**
     * @internal
     */
    CreatePipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineInput = exports.CreatePipelineInput || (exports.CreatePipelineInput = {}));
var CreatePipelineOutput;
(function (CreatePipelineOutput) {
    /**
     * @internal
     */
    CreatePipelineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineOutput = exports.CreatePipelineOutput || (exports.CreatePipelineOutput = {}));
var InvalidActionDeclarationException;
(function (InvalidActionDeclarationException) {
    /**
     * @internal
     */
    InvalidActionDeclarationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidActionDeclarationException = exports.InvalidActionDeclarationException || (exports.InvalidActionDeclarationException = {}));
var InvalidBlockerDeclarationException;
(function (InvalidBlockerDeclarationException) {
    /**
     * @internal
     */
    InvalidBlockerDeclarationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidBlockerDeclarationException = exports.InvalidBlockerDeclarationException || (exports.InvalidBlockerDeclarationException = {}));
var InvalidStageDeclarationException;
(function (InvalidStageDeclarationException) {
    /**
     * @internal
     */
    InvalidStageDeclarationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStageDeclarationException = exports.InvalidStageDeclarationException || (exports.InvalidStageDeclarationException = {}));
var InvalidStructureException;
(function (InvalidStructureException) {
    /**
     * @internal
     */
    InvalidStructureException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidStructureException = exports.InvalidStructureException || (exports.InvalidStructureException = {}));
var PipelineNameInUseException;
(function (PipelineNameInUseException) {
    /**
     * @internal
     */
    PipelineNameInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineNameInUseException = exports.PipelineNameInUseException || (exports.PipelineNameInUseException = {}));
var DeleteCustomActionTypeInput;
(function (DeleteCustomActionTypeInput) {
    /**
     * @internal
     */
    DeleteCustomActionTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCustomActionTypeInput = exports.DeleteCustomActionTypeInput || (exports.DeleteCustomActionTypeInput = {}));
var DeletePipelineInput;
(function (DeletePipelineInput) {
    /**
     * @internal
     */
    DeletePipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePipelineInput = exports.DeletePipelineInput || (exports.DeletePipelineInput = {}));
var DeleteWebhookInput;
(function (DeleteWebhookInput) {
    /**
     * @internal
     */
    DeleteWebhookInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWebhookInput = exports.DeleteWebhookInput || (exports.DeleteWebhookInput = {}));
var DeleteWebhookOutput;
(function (DeleteWebhookOutput) {
    /**
     * @internal
     */
    DeleteWebhookOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWebhookOutput = exports.DeleteWebhookOutput || (exports.DeleteWebhookOutput = {}));
var DeregisterWebhookWithThirdPartyInput;
(function (DeregisterWebhookWithThirdPartyInput) {
    /**
     * @internal
     */
    DeregisterWebhookWithThirdPartyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterWebhookWithThirdPartyInput = exports.DeregisterWebhookWithThirdPartyInput || (exports.DeregisterWebhookWithThirdPartyInput = {}));
var DeregisterWebhookWithThirdPartyOutput;
(function (DeregisterWebhookWithThirdPartyOutput) {
    /**
     * @internal
     */
    DeregisterWebhookWithThirdPartyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeregisterWebhookWithThirdPartyOutput = exports.DeregisterWebhookWithThirdPartyOutput || (exports.DeregisterWebhookWithThirdPartyOutput = {}));
var WebhookNotFoundException;
(function (WebhookNotFoundException) {
    /**
     * @internal
     */
    WebhookNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebhookNotFoundException = exports.WebhookNotFoundException || (exports.WebhookNotFoundException = {}));
var StageTransitionType;
(function (StageTransitionType) {
    StageTransitionType["Inbound"] = "Inbound";
    StageTransitionType["Outbound"] = "Outbound";
})(StageTransitionType = exports.StageTransitionType || (exports.StageTransitionType = {}));
var DisableStageTransitionInput;
(function (DisableStageTransitionInput) {
    /**
     * @internal
     */
    DisableStageTransitionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisableStageTransitionInput = exports.DisableStageTransitionInput || (exports.DisableStageTransitionInput = {}));
var PipelineNotFoundException;
(function (PipelineNotFoundException) {
    /**
     * @internal
     */
    PipelineNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineNotFoundException = exports.PipelineNotFoundException || (exports.PipelineNotFoundException = {}));
var StageNotFoundException;
(function (StageNotFoundException) {
    /**
     * @internal
     */
    StageNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StageNotFoundException = exports.StageNotFoundException || (exports.StageNotFoundException = {}));
var EnableStageTransitionInput;
(function (EnableStageTransitionInput) {
    /**
     * @internal
     */
    EnableStageTransitionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EnableStageTransitionInput = exports.EnableStageTransitionInput || (exports.EnableStageTransitionInput = {}));
var GetActionTypeInput;
(function (GetActionTypeInput) {
    /**
     * @internal
     */
    GetActionTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetActionTypeInput = exports.GetActionTypeInput || (exports.GetActionTypeInput = {}));
var GetActionTypeOutput;
(function (GetActionTypeOutput) {
    /**
     * @internal
     */
    GetActionTypeOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetActionTypeOutput = exports.GetActionTypeOutput || (exports.GetActionTypeOutput = {}));
var GetJobDetailsInput;
(function (GetJobDetailsInput) {
    /**
     * @internal
     */
    GetJobDetailsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetJobDetailsInput = exports.GetJobDetailsInput || (exports.GetJobDetailsInput = {}));
var StageContext;
(function (StageContext) {
    /**
     * @internal
     */
    StageContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StageContext = exports.StageContext || (exports.StageContext = {}));
var PipelineContext;
(function (PipelineContext) {
    /**
     * @internal
     */
    PipelineContext.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineContext = exports.PipelineContext || (exports.PipelineContext = {}));
var JobData;
(function (JobData) {
    /**
     * @internal
     */
    JobData.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.artifactCredentials && { artifactCredentials: smithy_client_1.SENSITIVE_STRING }),
    });
})(JobData = exports.JobData || (exports.JobData = {}));
var JobDetails;
(function (JobDetails) {
    /**
     * @internal
     */
    JobDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.data && { data: JobData.filterSensitiveLog(obj.data) }),
    });
})(JobDetails = exports.JobDetails || (exports.JobDetails = {}));
var GetJobDetailsOutput;
(function (GetJobDetailsOutput) {
    /**
     * @internal
     */
    GetJobDetailsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.jobDetails && { jobDetails: JobDetails.filterSensitiveLog(obj.jobDetails) }),
    });
})(GetJobDetailsOutput = exports.GetJobDetailsOutput || (exports.GetJobDetailsOutput = {}));
var GetPipelineInput;
(function (GetPipelineInput) {
    /**
     * @internal
     */
    GetPipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineInput = exports.GetPipelineInput || (exports.GetPipelineInput = {}));
var PipelineMetadata;
(function (PipelineMetadata) {
    /**
     * @internal
     */
    PipelineMetadata.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineMetadata = exports.PipelineMetadata || (exports.PipelineMetadata = {}));
var GetPipelineOutput;
(function (GetPipelineOutput) {
    /**
     * @internal
     */
    GetPipelineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineOutput = exports.GetPipelineOutput || (exports.GetPipelineOutput = {}));
var PipelineVersionNotFoundException;
(function (PipelineVersionNotFoundException) {
    /**
     * @internal
     */
    PipelineVersionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineVersionNotFoundException = exports.PipelineVersionNotFoundException || (exports.PipelineVersionNotFoundException = {}));
var GetPipelineExecutionInput;
(function (GetPipelineExecutionInput) {
    /**
     * @internal
     */
    GetPipelineExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineExecutionInput = exports.GetPipelineExecutionInput || (exports.GetPipelineExecutionInput = {}));
var PipelineExecutionStatus;
(function (PipelineExecutionStatus) {
    PipelineExecutionStatus["Cancelled"] = "Cancelled";
    PipelineExecutionStatus["Failed"] = "Failed";
    PipelineExecutionStatus["InProgress"] = "InProgress";
    PipelineExecutionStatus["Stopped"] = "Stopped";
    PipelineExecutionStatus["Stopping"] = "Stopping";
    PipelineExecutionStatus["Succeeded"] = "Succeeded";
    PipelineExecutionStatus["Superseded"] = "Superseded";
})(PipelineExecutionStatus = exports.PipelineExecutionStatus || (exports.PipelineExecutionStatus = {}));
var PipelineExecution;
(function (PipelineExecution) {
    /**
     * @internal
     */
    PipelineExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecution = exports.PipelineExecution || (exports.PipelineExecution = {}));
var GetPipelineExecutionOutput;
(function (GetPipelineExecutionOutput) {
    /**
     * @internal
     */
    GetPipelineExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineExecutionOutput = exports.GetPipelineExecutionOutput || (exports.GetPipelineExecutionOutput = {}));
var PipelineExecutionNotFoundException;
(function (PipelineExecutionNotFoundException) {
    /**
     * @internal
     */
    PipelineExecutionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecutionNotFoundException = exports.PipelineExecutionNotFoundException || (exports.PipelineExecutionNotFoundException = {}));
var GetPipelineStateInput;
(function (GetPipelineStateInput) {
    /**
     * @internal
     */
    GetPipelineStateInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineStateInput = exports.GetPipelineStateInput || (exports.GetPipelineStateInput = {}));
var StageExecutionStatus;
(function (StageExecutionStatus) {
    StageExecutionStatus["Cancelled"] = "Cancelled";
    StageExecutionStatus["Failed"] = "Failed";
    StageExecutionStatus["InProgress"] = "InProgress";
    StageExecutionStatus["Stopped"] = "Stopped";
    StageExecutionStatus["Stopping"] = "Stopping";
    StageExecutionStatus["Succeeded"] = "Succeeded";
})(StageExecutionStatus = exports.StageExecutionStatus || (exports.StageExecutionStatus = {}));
var StageExecution;
(function (StageExecution) {
    /**
     * @internal
     */
    StageExecution.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StageExecution = exports.StageExecution || (exports.StageExecution = {}));
var TransitionState;
(function (TransitionState) {
    /**
     * @internal
     */
    TransitionState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TransitionState = exports.TransitionState || (exports.TransitionState = {}));
var StageState;
(function (StageState) {
    /**
     * @internal
     */
    StageState.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StageState = exports.StageState || (exports.StageState = {}));
var GetPipelineStateOutput;
(function (GetPipelineStateOutput) {
    /**
     * @internal
     */
    GetPipelineStateOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineStateOutput = exports.GetPipelineStateOutput || (exports.GetPipelineStateOutput = {}));
var GetThirdPartyJobDetailsInput;
(function (GetThirdPartyJobDetailsInput) {
    /**
     * @internal
     */
    GetThirdPartyJobDetailsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetThirdPartyJobDetailsInput = exports.GetThirdPartyJobDetailsInput || (exports.GetThirdPartyJobDetailsInput = {}));
var ThirdPartyJobData;
(function (ThirdPartyJobData) {
    /**
     * @internal
     */
    ThirdPartyJobData.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.artifactCredentials && { artifactCredentials: smithy_client_1.SENSITIVE_STRING }),
    });
})(ThirdPartyJobData = exports.ThirdPartyJobData || (exports.ThirdPartyJobData = {}));
var ThirdPartyJobDetails;
(function (ThirdPartyJobDetails) {
    /**
     * @internal
     */
    ThirdPartyJobDetails.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.data && { data: ThirdPartyJobData.filterSensitiveLog(obj.data) }),
    });
})(ThirdPartyJobDetails = exports.ThirdPartyJobDetails || (exports.ThirdPartyJobDetails = {}));
var GetThirdPartyJobDetailsOutput;
(function (GetThirdPartyJobDetailsOutput) {
    /**
     * @internal
     */
    GetThirdPartyJobDetailsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.jobDetails && { jobDetails: ThirdPartyJobDetails.filterSensitiveLog(obj.jobDetails) }),
    });
})(GetThirdPartyJobDetailsOutput = exports.GetThirdPartyJobDetailsOutput || (exports.GetThirdPartyJobDetailsOutput = {}));
var InvalidJobException;
(function (InvalidJobException) {
    /**
     * @internal
     */
    InvalidJobException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidJobException = exports.InvalidJobException || (exports.InvalidJobException = {}));
var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidNextTokenException = exports.InvalidNextTokenException || (exports.InvalidNextTokenException = {}));
var ListActionExecutionsInput;
(function (ListActionExecutionsInput) {
    /**
     * @internal
     */
    ListActionExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionExecutionsInput = exports.ListActionExecutionsInput || (exports.ListActionExecutionsInput = {}));
var ListActionExecutionsOutput;
(function (ListActionExecutionsOutput) {
    /**
     * @internal
     */
    ListActionExecutionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionExecutionsOutput = exports.ListActionExecutionsOutput || (exports.ListActionExecutionsOutput = {}));
var ListActionTypesInput;
(function (ListActionTypesInput) {
    /**
     * @internal
     */
    ListActionTypesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionTypesInput = exports.ListActionTypesInput || (exports.ListActionTypesInput = {}));
var ListActionTypesOutput;
(function (ListActionTypesOutput) {
    /**
     * @internal
     */
    ListActionTypesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActionTypesOutput = exports.ListActionTypesOutput || (exports.ListActionTypesOutput = {}));
var ListPipelineExecutionsInput;
(function (ListPipelineExecutionsInput) {
    /**
     * @internal
     */
    ListPipelineExecutionsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineExecutionsInput = exports.ListPipelineExecutionsInput || (exports.ListPipelineExecutionsInput = {}));
var SourceRevision;
(function (SourceRevision) {
    /**
     * @internal
     */
    SourceRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SourceRevision = exports.SourceRevision || (exports.SourceRevision = {}));
var StopExecutionTrigger;
(function (StopExecutionTrigger) {
    /**
     * @internal
     */
    StopExecutionTrigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopExecutionTrigger = exports.StopExecutionTrigger || (exports.StopExecutionTrigger = {}));
var TriggerType;
(function (TriggerType) {
    TriggerType["CloudWatchEvent"] = "CloudWatchEvent";
    TriggerType["CreatePipeline"] = "CreatePipeline";
    TriggerType["PollForSourceChanges"] = "PollForSourceChanges";
    TriggerType["PutActionRevision"] = "PutActionRevision";
    TriggerType["StartPipelineExecution"] = "StartPipelineExecution";
    TriggerType["Webhook"] = "Webhook";
})(TriggerType = exports.TriggerType || (exports.TriggerType = {}));
var ExecutionTrigger;
(function (ExecutionTrigger) {
    /**
     * @internal
     */
    ExecutionTrigger.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionTrigger = exports.ExecutionTrigger || (exports.ExecutionTrigger = {}));
var PipelineExecutionSummary;
(function (PipelineExecutionSummary) {
    /**
     * @internal
     */
    PipelineExecutionSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecutionSummary = exports.PipelineExecutionSummary || (exports.PipelineExecutionSummary = {}));
var ListPipelineExecutionsOutput;
(function (ListPipelineExecutionsOutput) {
    /**
     * @internal
     */
    ListPipelineExecutionsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelineExecutionsOutput = exports.ListPipelineExecutionsOutput || (exports.ListPipelineExecutionsOutput = {}));
var ListPipelinesInput;
(function (ListPipelinesInput) {
    /**
     * @internal
     */
    ListPipelinesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesInput = exports.ListPipelinesInput || (exports.ListPipelinesInput = {}));
var PipelineSummary;
(function (PipelineSummary) {
    /**
     * @internal
     */
    PipelineSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineSummary = exports.PipelineSummary || (exports.PipelineSummary = {}));
var ListPipelinesOutput;
(function (ListPipelinesOutput) {
    /**
     * @internal
     */
    ListPipelinesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesOutput = exports.ListPipelinesOutput || (exports.ListPipelinesOutput = {}));
var InvalidArnException;
(function (InvalidArnException) {
    /**
     * @internal
     */
    InvalidArnException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidArnException = exports.InvalidArnException || (exports.InvalidArnException = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var ListWebhooksInput;
(function (ListWebhooksInput) {
    /**
     * @internal
     */
    ListWebhooksInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebhooksInput = exports.ListWebhooksInput || (exports.ListWebhooksInput = {}));
var WebhookAuthenticationType;
(function (WebhookAuthenticationType) {
    WebhookAuthenticationType["GITHUB_HMAC"] = "GITHUB_HMAC";
    WebhookAuthenticationType["IP"] = "IP";
    WebhookAuthenticationType["UNAUTHENTICATED"] = "UNAUTHENTICATED";
})(WebhookAuthenticationType = exports.WebhookAuthenticationType || (exports.WebhookAuthenticationType = {}));
var WebhookAuthConfiguration;
(function (WebhookAuthConfiguration) {
    /**
     * @internal
     */
    WebhookAuthConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebhookAuthConfiguration = exports.WebhookAuthConfiguration || (exports.WebhookAuthConfiguration = {}));
var WebhookFilterRule;
(function (WebhookFilterRule) {
    /**
     * @internal
     */
    WebhookFilterRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebhookFilterRule = exports.WebhookFilterRule || (exports.WebhookFilterRule = {}));
var WebhookDefinition;
(function (WebhookDefinition) {
    /**
     * @internal
     */
    WebhookDefinition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebhookDefinition = exports.WebhookDefinition || (exports.WebhookDefinition = {}));
var ListWebhookItem;
(function (ListWebhookItem) {
    /**
     * @internal
     */
    ListWebhookItem.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebhookItem = exports.ListWebhookItem || (exports.ListWebhookItem = {}));
var ListWebhooksOutput;
(function (ListWebhooksOutput) {
    /**
     * @internal
     */
    ListWebhooksOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebhooksOutput = exports.ListWebhooksOutput || (exports.ListWebhooksOutput = {}));
var PollForJobsInput;
(function (PollForJobsInput) {
    /**
     * @internal
     */
    PollForJobsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PollForJobsInput = exports.PollForJobsInput || (exports.PollForJobsInput = {}));
var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.data && { data: JobData.filterSensitiveLog(obj.data) }),
    });
})(Job = exports.Job || (exports.Job = {}));
var PollForJobsOutput;
(function (PollForJobsOutput) {
    /**
     * @internal
     */
    PollForJobsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.jobs && { jobs: obj.jobs.map((item) => Job.filterSensitiveLog(item)) }),
    });
})(PollForJobsOutput = exports.PollForJobsOutput || (exports.PollForJobsOutput = {}));
var PollForThirdPartyJobsInput;
(function (PollForThirdPartyJobsInput) {
    /**
     * @internal
     */
    PollForThirdPartyJobsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PollForThirdPartyJobsInput = exports.PollForThirdPartyJobsInput || (exports.PollForThirdPartyJobsInput = {}));
var ThirdPartyJob;
(function (ThirdPartyJob) {
    /**
     * @internal
     */
    ThirdPartyJob.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThirdPartyJob = exports.ThirdPartyJob || (exports.ThirdPartyJob = {}));
var PollForThirdPartyJobsOutput;
(function (PollForThirdPartyJobsOutput) {
    /**
     * @internal
     */
    PollForThirdPartyJobsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PollForThirdPartyJobsOutput = exports.PollForThirdPartyJobsOutput || (exports.PollForThirdPartyJobsOutput = {}));
var PutActionRevisionInput;
(function (PutActionRevisionInput) {
    /**
     * @internal
     */
    PutActionRevisionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutActionRevisionInput = exports.PutActionRevisionInput || (exports.PutActionRevisionInput = {}));
var PutActionRevisionOutput;
(function (PutActionRevisionOutput) {
    /**
     * @internal
     */
    PutActionRevisionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutActionRevisionOutput = exports.PutActionRevisionOutput || (exports.PutActionRevisionOutput = {}));
var InvalidApprovalTokenException;
(function (InvalidApprovalTokenException) {
    /**
     * @internal
     */
    InvalidApprovalTokenException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidApprovalTokenException = exports.InvalidApprovalTokenException || (exports.InvalidApprovalTokenException = {}));
var PutApprovalResultInput;
(function (PutApprovalResultInput) {
    /**
     * @internal
     */
    PutApprovalResultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutApprovalResultInput = exports.PutApprovalResultInput || (exports.PutApprovalResultInput = {}));
var PutApprovalResultOutput;
(function (PutApprovalResultOutput) {
    /**
     * @internal
     */
    PutApprovalResultOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutApprovalResultOutput = exports.PutApprovalResultOutput || (exports.PutApprovalResultOutput = {}));
var InvalidJobStateException;
(function (InvalidJobStateException) {
    /**
     * @internal
     */
    InvalidJobStateException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidJobStateException = exports.InvalidJobStateException || (exports.InvalidJobStateException = {}));
var FailureType;
(function (FailureType) {
    FailureType["ConfigurationError"] = "ConfigurationError";
    FailureType["JobFailed"] = "JobFailed";
    FailureType["PermissionError"] = "PermissionError";
    FailureType["RevisionOutOfSync"] = "RevisionOutOfSync";
    FailureType["RevisionUnavailable"] = "RevisionUnavailable";
    FailureType["SystemUnavailable"] = "SystemUnavailable";
})(FailureType = exports.FailureType || (exports.FailureType = {}));
var FailureDetails;
(function (FailureDetails) {
    /**
     * @internal
     */
    FailureDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FailureDetails = exports.FailureDetails || (exports.FailureDetails = {}));
var PutJobFailureResultInput;
(function (PutJobFailureResultInput) {
    /**
     * @internal
     */
    PutJobFailureResultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutJobFailureResultInput = exports.PutJobFailureResultInput || (exports.PutJobFailureResultInput = {}));
var OutputVariablesSizeExceededException;
(function (OutputVariablesSizeExceededException) {
    /**
     * @internal
     */
    OutputVariablesSizeExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OutputVariablesSizeExceededException = exports.OutputVariablesSizeExceededException || (exports.OutputVariablesSizeExceededException = {}));
var CurrentRevision;
(function (CurrentRevision) {
    /**
     * @internal
     */
    CurrentRevision.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CurrentRevision = exports.CurrentRevision || (exports.CurrentRevision = {}));
var ExecutionDetails;
(function (ExecutionDetails) {
    /**
     * @internal
     */
    ExecutionDetails.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExecutionDetails = exports.ExecutionDetails || (exports.ExecutionDetails = {}));
var PutJobSuccessResultInput;
(function (PutJobSuccessResultInput) {
    /**
     * @internal
     */
    PutJobSuccessResultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutJobSuccessResultInput = exports.PutJobSuccessResultInput || (exports.PutJobSuccessResultInput = {}));
var PutThirdPartyJobFailureResultInput;
(function (PutThirdPartyJobFailureResultInput) {
    /**
     * @internal
     */
    PutThirdPartyJobFailureResultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutThirdPartyJobFailureResultInput = exports.PutThirdPartyJobFailureResultInput || (exports.PutThirdPartyJobFailureResultInput = {}));
var PutThirdPartyJobSuccessResultInput;
(function (PutThirdPartyJobSuccessResultInput) {
    /**
     * @internal
     */
    PutThirdPartyJobSuccessResultInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutThirdPartyJobSuccessResultInput = exports.PutThirdPartyJobSuccessResultInput || (exports.PutThirdPartyJobSuccessResultInput = {}));
var InvalidWebhookAuthenticationParametersException;
(function (InvalidWebhookAuthenticationParametersException) {
    /**
     * @internal
     */
    InvalidWebhookAuthenticationParametersException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidWebhookAuthenticationParametersException = exports.InvalidWebhookAuthenticationParametersException || (exports.InvalidWebhookAuthenticationParametersException = {}));
var InvalidWebhookFilterPatternException;
(function (InvalidWebhookFilterPatternException) {
    /**
     * @internal
     */
    InvalidWebhookFilterPatternException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidWebhookFilterPatternException = exports.InvalidWebhookFilterPatternException || (exports.InvalidWebhookFilterPatternException = {}));
var PutWebhookInput;
(function (PutWebhookInput) {
    /**
     * @internal
     */
    PutWebhookInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutWebhookInput = exports.PutWebhookInput || (exports.PutWebhookInput = {}));
var PutWebhookOutput;
(function (PutWebhookOutput) {
    /**
     * @internal
     */
    PutWebhookOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutWebhookOutput = exports.PutWebhookOutput || (exports.PutWebhookOutput = {}));
var RegisterWebhookWithThirdPartyInput;
(function (RegisterWebhookWithThirdPartyInput) {
    /**
     * @internal
     */
    RegisterWebhookWithThirdPartyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterWebhookWithThirdPartyInput = exports.RegisterWebhookWithThirdPartyInput || (exports.RegisterWebhookWithThirdPartyInput = {}));
var RegisterWebhookWithThirdPartyOutput;
(function (RegisterWebhookWithThirdPartyOutput) {
    /**
     * @internal
     */
    RegisterWebhookWithThirdPartyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegisterWebhookWithThirdPartyOutput = exports.RegisterWebhookWithThirdPartyOutput || (exports.RegisterWebhookWithThirdPartyOutput = {}));
var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ConflictException = exports.ConflictException || (exports.ConflictException = {}));
var NotLatestPipelineExecutionException;
(function (NotLatestPipelineExecutionException) {
    /**
     * @internal
     */
    NotLatestPipelineExecutionException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotLatestPipelineExecutionException = exports.NotLatestPipelineExecutionException || (exports.NotLatestPipelineExecutionException = {}));
var StageRetryMode;
(function (StageRetryMode) {
    StageRetryMode["FAILED_ACTIONS"] = "FAILED_ACTIONS";
})(StageRetryMode = exports.StageRetryMode || (exports.StageRetryMode = {}));
var RetryStageExecutionInput;
(function (RetryStageExecutionInput) {
    /**
     * @internal
     */
    RetryStageExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryStageExecutionInput = exports.RetryStageExecutionInput || (exports.RetryStageExecutionInput = {}));
var RetryStageExecutionOutput;
(function (RetryStageExecutionOutput) {
    /**
     * @internal
     */
    RetryStageExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RetryStageExecutionOutput = exports.RetryStageExecutionOutput || (exports.RetryStageExecutionOutput = {}));
var StageNotRetryableException;
(function (StageNotRetryableException) {
    /**
     * @internal
     */
    StageNotRetryableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StageNotRetryableException = exports.StageNotRetryableException || (exports.StageNotRetryableException = {}));
var StartPipelineExecutionInput;
(function (StartPipelineExecutionInput) {
    /**
     * @internal
     */
    StartPipelineExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPipelineExecutionInput = exports.StartPipelineExecutionInput || (exports.StartPipelineExecutionInput = {}));
var StartPipelineExecutionOutput;
(function (StartPipelineExecutionOutput) {
    /**
     * @internal
     */
    StartPipelineExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartPipelineExecutionOutput = exports.StartPipelineExecutionOutput || (exports.StartPipelineExecutionOutput = {}));
var DuplicatedStopRequestException;
(function (DuplicatedStopRequestException) {
    /**
     * @internal
     */
    DuplicatedStopRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DuplicatedStopRequestException = exports.DuplicatedStopRequestException || (exports.DuplicatedStopRequestException = {}));
var PipelineExecutionNotStoppableException;
(function (PipelineExecutionNotStoppableException) {
    /**
     * @internal
     */
    PipelineExecutionNotStoppableException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineExecutionNotStoppableException = exports.PipelineExecutionNotStoppableException || (exports.PipelineExecutionNotStoppableException = {}));
var StopPipelineExecutionInput;
(function (StopPipelineExecutionInput) {
    /**
     * @internal
     */
    StopPipelineExecutionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPipelineExecutionInput = exports.StopPipelineExecutionInput || (exports.StopPipelineExecutionInput = {}));
var StopPipelineExecutionOutput;
(function (StopPipelineExecutionOutput) {
    /**
     * @internal
     */
    StopPipelineExecutionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopPipelineExecutionOutput = exports.StopPipelineExecutionOutput || (exports.StopPipelineExecutionOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
var RequestFailedException;
(function (RequestFailedException) {
    /**
     * @internal
     */
    RequestFailedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RequestFailedException = exports.RequestFailedException || (exports.RequestFailedException = {}));
var UpdateActionTypeInput;
(function (UpdateActionTypeInput) {
    /**
     * @internal
     */
    UpdateActionTypeInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateActionTypeInput = exports.UpdateActionTypeInput || (exports.UpdateActionTypeInput = {}));
var UpdatePipelineInput;
(function (UpdatePipelineInput) {
    /**
     * @internal
     */
    UpdatePipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineInput = exports.UpdatePipelineInput || (exports.UpdatePipelineInput = {}));
var UpdatePipelineOutput;
(function (UpdatePipelineOutput) {
    /**
     * @internal
     */
    UpdatePipelineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdatePipelineOutput = exports.UpdatePipelineOutput || (exports.UpdatePipelineOutput = {}));
//# sourceMappingURL=models_0.js.map