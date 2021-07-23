import { __assign } from "tslib";
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
export var AcknowledgeJobInput;
(function (AcknowledgeJobInput) {
    /**
     * @internal
     */
    AcknowledgeJobInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcknowledgeJobInput || (AcknowledgeJobInput = {}));
export var JobStatus;
(function (JobStatus) {
    JobStatus["Created"] = "Created";
    JobStatus["Dispatched"] = "Dispatched";
    JobStatus["Failed"] = "Failed";
    JobStatus["InProgress"] = "InProgress";
    JobStatus["Queued"] = "Queued";
    JobStatus["Succeeded"] = "Succeeded";
    JobStatus["TimedOut"] = "TimedOut";
})(JobStatus || (JobStatus = {}));
export var AcknowledgeJobOutput;
(function (AcknowledgeJobOutput) {
    /**
     * @internal
     */
    AcknowledgeJobOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcknowledgeJobOutput || (AcknowledgeJobOutput = {}));
export var InvalidNonceException;
(function (InvalidNonceException) {
    /**
     * @internal
     */
    InvalidNonceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNonceException || (InvalidNonceException = {}));
export var JobNotFoundException;
(function (JobNotFoundException) {
    /**
     * @internal
     */
    JobNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobNotFoundException || (JobNotFoundException = {}));
export var ValidationException;
(function (ValidationException) {
    /**
     * @internal
     */
    ValidationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ValidationException || (ValidationException = {}));
export var AcknowledgeThirdPartyJobInput;
(function (AcknowledgeThirdPartyJobInput) {
    /**
     * @internal
     */
    AcknowledgeThirdPartyJobInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcknowledgeThirdPartyJobInput || (AcknowledgeThirdPartyJobInput = {}));
export var AcknowledgeThirdPartyJobOutput;
(function (AcknowledgeThirdPartyJobOutput) {
    /**
     * @internal
     */
    AcknowledgeThirdPartyJobOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AcknowledgeThirdPartyJobOutput || (AcknowledgeThirdPartyJobOutput = {}));
export var InvalidClientTokenException;
(function (InvalidClientTokenException) {
    /**
     * @internal
     */
    InvalidClientTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidClientTokenException || (InvalidClientTokenException = {}));
export var ActionCategory;
(function (ActionCategory) {
    ActionCategory["Approval"] = "Approval";
    ActionCategory["Build"] = "Build";
    ActionCategory["Deploy"] = "Deploy";
    ActionCategory["Invoke"] = "Invoke";
    ActionCategory["Source"] = "Source";
    ActionCategory["Test"] = "Test";
})(ActionCategory || (ActionCategory = {}));
export var ActionConfiguration;
(function (ActionConfiguration) {
    /**
     * @internal
     */
    ActionConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionConfiguration || (ActionConfiguration = {}));
export var ActionConfigurationPropertyType;
(function (ActionConfigurationPropertyType) {
    ActionConfigurationPropertyType["Boolean"] = "Boolean";
    ActionConfigurationPropertyType["Number"] = "Number";
    ActionConfigurationPropertyType["String"] = "String";
})(ActionConfigurationPropertyType || (ActionConfigurationPropertyType = {}));
export var ActionConfigurationProperty;
(function (ActionConfigurationProperty) {
    /**
     * @internal
     */
    ActionConfigurationProperty.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionConfigurationProperty || (ActionConfigurationProperty = {}));
export var ActionContext;
(function (ActionContext) {
    /**
     * @internal
     */
    ActionContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionContext || (ActionContext = {}));
export var ActionOwner;
(function (ActionOwner) {
    ActionOwner["AWS"] = "AWS";
    ActionOwner["Custom"] = "Custom";
    ActionOwner["ThirdParty"] = "ThirdParty";
})(ActionOwner || (ActionOwner = {}));
export var ActionTypeId;
(function (ActionTypeId) {
    /**
     * @internal
     */
    ActionTypeId.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeId || (ActionTypeId = {}));
export var InputArtifact;
(function (InputArtifact) {
    /**
     * @internal
     */
    InputArtifact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InputArtifact || (InputArtifact = {}));
export var OutputArtifact;
(function (OutputArtifact) {
    /**
     * @internal
     */
    OutputArtifact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputArtifact || (OutputArtifact = {}));
export var ActionDeclaration;
(function (ActionDeclaration) {
    /**
     * @internal
     */
    ActionDeclaration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionDeclaration || (ActionDeclaration = {}));
export var ErrorDetails;
(function (ErrorDetails) {
    /**
     * @internal
     */
    ErrorDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ErrorDetails || (ErrorDetails = {}));
export var ActionExecutionStatus;
(function (ActionExecutionStatus) {
    ActionExecutionStatus["Abandoned"] = "Abandoned";
    ActionExecutionStatus["Failed"] = "Failed";
    ActionExecutionStatus["InProgress"] = "InProgress";
    ActionExecutionStatus["Succeeded"] = "Succeeded";
})(ActionExecutionStatus || (ActionExecutionStatus = {}));
export var ActionExecution;
(function (ActionExecution) {
    /**
     * @internal
     */
    ActionExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionExecution || (ActionExecution = {}));
export var S3Location;
(function (S3Location) {
    /**
     * @internal
     */
    S3Location.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3Location || (S3Location = {}));
export var ArtifactDetail;
(function (ArtifactDetail) {
    /**
     * @internal
     */
    ArtifactDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactDetail || (ArtifactDetail = {}));
export var ActionExecutionInput;
(function (ActionExecutionInput) {
    /**
     * @internal
     */
    ActionExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionExecutionInput || (ActionExecutionInput = {}));
export var ActionExecutionResult;
(function (ActionExecutionResult) {
    /**
     * @internal
     */
    ActionExecutionResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionExecutionResult || (ActionExecutionResult = {}));
export var ActionExecutionOutput;
(function (ActionExecutionOutput) {
    /**
     * @internal
     */
    ActionExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionExecutionOutput || (ActionExecutionOutput = {}));
export var ActionExecutionDetail;
(function (ActionExecutionDetail) {
    /**
     * @internal
     */
    ActionExecutionDetail.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionExecutionDetail || (ActionExecutionDetail = {}));
export var ActionExecutionFilter;
(function (ActionExecutionFilter) {
    /**
     * @internal
     */
    ActionExecutionFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionExecutionFilter || (ActionExecutionFilter = {}));
export var ActionNotFoundException;
(function (ActionNotFoundException) {
    /**
     * @internal
     */
    ActionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionNotFoundException || (ActionNotFoundException = {}));
export var ActionRevision;
(function (ActionRevision) {
    /**
     * @internal
     */
    ActionRevision.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionRevision || (ActionRevision = {}));
export var ActionState;
(function (ActionState) {
    /**
     * @internal
     */
    ActionState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionState || (ActionState = {}));
export var ArtifactDetails;
(function (ArtifactDetails) {
    /**
     * @internal
     */
    ArtifactDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactDetails || (ArtifactDetails = {}));
export var ActionTypeSettings;
(function (ActionTypeSettings) {
    /**
     * @internal
     */
    ActionTypeSettings.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeSettings || (ActionTypeSettings = {}));
export var ActionType;
(function (ActionType) {
    /**
     * @internal
     */
    ActionType.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionType || (ActionType = {}));
export var ActionTypeArtifactDetails;
(function (ActionTypeArtifactDetails) {
    /**
     * @internal
     */
    ActionTypeArtifactDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeArtifactDetails || (ActionTypeArtifactDetails = {}));
export var JobWorkerExecutorConfiguration;
(function (JobWorkerExecutorConfiguration) {
    /**
     * @internal
     */
    JobWorkerExecutorConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JobWorkerExecutorConfiguration || (JobWorkerExecutorConfiguration = {}));
export var LambdaExecutorConfiguration;
(function (LambdaExecutorConfiguration) {
    /**
     * @internal
     */
    LambdaExecutorConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LambdaExecutorConfiguration || (LambdaExecutorConfiguration = {}));
export var ExecutorConfiguration;
(function (ExecutorConfiguration) {
    /**
     * @internal
     */
    ExecutorConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutorConfiguration || (ExecutorConfiguration = {}));
export var ExecutorType;
(function (ExecutorType) {
    ExecutorType["JobWorker"] = "JobWorker";
    ExecutorType["Lambda"] = "Lambda";
})(ExecutorType || (ExecutorType = {}));
export var ActionTypeExecutor;
(function (ActionTypeExecutor) {
    /**
     * @internal
     */
    ActionTypeExecutor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeExecutor || (ActionTypeExecutor = {}));
export var ActionTypeIdentifier;
(function (ActionTypeIdentifier) {
    /**
     * @internal
     */
    ActionTypeIdentifier.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeIdentifier || (ActionTypeIdentifier = {}));
export var ActionTypePermissions;
(function (ActionTypePermissions) {
    /**
     * @internal
     */
    ActionTypePermissions.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypePermissions || (ActionTypePermissions = {}));
export var ActionTypeProperty;
(function (ActionTypeProperty) {
    /**
     * @internal
     */
    ActionTypeProperty.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeProperty || (ActionTypeProperty = {}));
export var ActionTypeUrls;
(function (ActionTypeUrls) {
    /**
     * @internal
     */
    ActionTypeUrls.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeUrls || (ActionTypeUrls = {}));
export var ActionTypeDeclaration;
(function (ActionTypeDeclaration) {
    /**
     * @internal
     */
    ActionTypeDeclaration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeDeclaration || (ActionTypeDeclaration = {}));
export var ActionTypeNotFoundException;
(function (ActionTypeNotFoundException) {
    /**
     * @internal
     */
    ActionTypeNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionTypeNotFoundException || (ActionTypeNotFoundException = {}));
export var ApprovalAlreadyCompletedException;
(function (ApprovalAlreadyCompletedException) {
    /**
     * @internal
     */
    ApprovalAlreadyCompletedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApprovalAlreadyCompletedException || (ApprovalAlreadyCompletedException = {}));
export var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus["Approved"] = "Approved";
    ApprovalStatus["Rejected"] = "Rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
export var ApprovalResult;
(function (ApprovalResult) {
    /**
     * @internal
     */
    ApprovalResult.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ApprovalResult || (ApprovalResult = {}));
export var S3ArtifactLocation;
(function (S3ArtifactLocation) {
    /**
     * @internal
     */
    S3ArtifactLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(S3ArtifactLocation || (S3ArtifactLocation = {}));
export var ArtifactLocationType;
(function (ArtifactLocationType) {
    ArtifactLocationType["S3"] = "S3";
})(ArtifactLocationType || (ArtifactLocationType = {}));
export var ArtifactLocation;
(function (ArtifactLocation) {
    /**
     * @internal
     */
    ArtifactLocation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactLocation || (ArtifactLocation = {}));
export var Artifact;
(function (Artifact) {
    /**
     * @internal
     */
    Artifact.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Artifact || (Artifact = {}));
export var ArtifactRevision;
(function (ArtifactRevision) {
    /**
     * @internal
     */
    ArtifactRevision.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactRevision || (ArtifactRevision = {}));
export var EncryptionKeyType;
(function (EncryptionKeyType) {
    EncryptionKeyType["KMS"] = "KMS";
})(EncryptionKeyType || (EncryptionKeyType = {}));
export var EncryptionKey;
(function (EncryptionKey) {
    /**
     * @internal
     */
    EncryptionKey.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EncryptionKey || (EncryptionKey = {}));
export var ArtifactStoreType;
(function (ArtifactStoreType) {
    ArtifactStoreType["S3"] = "S3";
})(ArtifactStoreType || (ArtifactStoreType = {}));
export var ArtifactStore;
(function (ArtifactStore) {
    /**
     * @internal
     */
    ArtifactStore.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ArtifactStore || (ArtifactStore = {}));
export var AWSSessionCredentials;
(function (AWSSessionCredentials) {
    /**
     * @internal
     */
    AWSSessionCredentials.filterSensitiveLog = function (obj) { return (__assign(__assign(__assign(__assign({}, obj), (obj.accessKeyId && { accessKeyId: SENSITIVE_STRING })), (obj.secretAccessKey && { secretAccessKey: SENSITIVE_STRING })), (obj.sessionToken && { sessionToken: SENSITIVE_STRING }))); };
})(AWSSessionCredentials || (AWSSessionCredentials = {}));
export var BlockerType;
(function (BlockerType) {
    BlockerType["Schedule"] = "Schedule";
})(BlockerType || (BlockerType = {}));
export var BlockerDeclaration;
(function (BlockerDeclaration) {
    /**
     * @internal
     */
    BlockerDeclaration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlockerDeclaration || (BlockerDeclaration = {}));
export var ConcurrentModificationException;
(function (ConcurrentModificationException) {
    /**
     * @internal
     */
    ConcurrentModificationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConcurrentModificationException || (ConcurrentModificationException = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateCustomActionTypeInput;
(function (CreateCustomActionTypeInput) {
    /**
     * @internal
     */
    CreateCustomActionTypeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomActionTypeInput || (CreateCustomActionTypeInput = {}));
export var CreateCustomActionTypeOutput;
(function (CreateCustomActionTypeOutput) {
    /**
     * @internal
     */
    CreateCustomActionTypeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateCustomActionTypeOutput || (CreateCustomActionTypeOutput = {}));
export var InvalidTagsException;
(function (InvalidTagsException) {
    /**
     * @internal
     */
    InvalidTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidTagsException || (InvalidTagsException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var TooManyTagsException;
(function (TooManyTagsException) {
    /**
     * @internal
     */
    TooManyTagsException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TooManyTagsException || (TooManyTagsException = {}));
export var StageDeclaration;
(function (StageDeclaration) {
    /**
     * @internal
     */
    StageDeclaration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StageDeclaration || (StageDeclaration = {}));
export var PipelineDeclaration;
(function (PipelineDeclaration) {
    /**
     * @internal
     */
    PipelineDeclaration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineDeclaration || (PipelineDeclaration = {}));
export var CreatePipelineInput;
(function (CreatePipelineInput) {
    /**
     * @internal
     */
    CreatePipelineInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePipelineInput || (CreatePipelineInput = {}));
export var CreatePipelineOutput;
(function (CreatePipelineOutput) {
    /**
     * @internal
     */
    CreatePipelineOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreatePipelineOutput || (CreatePipelineOutput = {}));
export var InvalidActionDeclarationException;
(function (InvalidActionDeclarationException) {
    /**
     * @internal
     */
    InvalidActionDeclarationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidActionDeclarationException || (InvalidActionDeclarationException = {}));
export var InvalidBlockerDeclarationException;
(function (InvalidBlockerDeclarationException) {
    /**
     * @internal
     */
    InvalidBlockerDeclarationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidBlockerDeclarationException || (InvalidBlockerDeclarationException = {}));
export var InvalidStageDeclarationException;
(function (InvalidStageDeclarationException) {
    /**
     * @internal
     */
    InvalidStageDeclarationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidStageDeclarationException || (InvalidStageDeclarationException = {}));
export var InvalidStructureException;
(function (InvalidStructureException) {
    /**
     * @internal
     */
    InvalidStructureException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidStructureException || (InvalidStructureException = {}));
export var PipelineNameInUseException;
(function (PipelineNameInUseException) {
    /**
     * @internal
     */
    PipelineNameInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineNameInUseException || (PipelineNameInUseException = {}));
export var DeleteCustomActionTypeInput;
(function (DeleteCustomActionTypeInput) {
    /**
     * @internal
     */
    DeleteCustomActionTypeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCustomActionTypeInput || (DeleteCustomActionTypeInput = {}));
export var DeletePipelineInput;
(function (DeletePipelineInput) {
    /**
     * @internal
     */
    DeletePipelineInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePipelineInput || (DeletePipelineInput = {}));
export var DeleteWebhookInput;
(function (DeleteWebhookInput) {
    /**
     * @internal
     */
    DeleteWebhookInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWebhookInput || (DeleteWebhookInput = {}));
export var DeleteWebhookOutput;
(function (DeleteWebhookOutput) {
    /**
     * @internal
     */
    DeleteWebhookOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWebhookOutput || (DeleteWebhookOutput = {}));
export var DeregisterWebhookWithThirdPartyInput;
(function (DeregisterWebhookWithThirdPartyInput) {
    /**
     * @internal
     */
    DeregisterWebhookWithThirdPartyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterWebhookWithThirdPartyInput || (DeregisterWebhookWithThirdPartyInput = {}));
export var DeregisterWebhookWithThirdPartyOutput;
(function (DeregisterWebhookWithThirdPartyOutput) {
    /**
     * @internal
     */
    DeregisterWebhookWithThirdPartyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeregisterWebhookWithThirdPartyOutput || (DeregisterWebhookWithThirdPartyOutput = {}));
export var WebhookNotFoundException;
(function (WebhookNotFoundException) {
    /**
     * @internal
     */
    WebhookNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebhookNotFoundException || (WebhookNotFoundException = {}));
export var StageTransitionType;
(function (StageTransitionType) {
    StageTransitionType["Inbound"] = "Inbound";
    StageTransitionType["Outbound"] = "Outbound";
})(StageTransitionType || (StageTransitionType = {}));
export var DisableStageTransitionInput;
(function (DisableStageTransitionInput) {
    /**
     * @internal
     */
    DisableStageTransitionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisableStageTransitionInput || (DisableStageTransitionInput = {}));
export var PipelineNotFoundException;
(function (PipelineNotFoundException) {
    /**
     * @internal
     */
    PipelineNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineNotFoundException || (PipelineNotFoundException = {}));
export var StageNotFoundException;
(function (StageNotFoundException) {
    /**
     * @internal
     */
    StageNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StageNotFoundException || (StageNotFoundException = {}));
export var EnableStageTransitionInput;
(function (EnableStageTransitionInput) {
    /**
     * @internal
     */
    EnableStageTransitionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(EnableStageTransitionInput || (EnableStageTransitionInput = {}));
export var GetActionTypeInput;
(function (GetActionTypeInput) {
    /**
     * @internal
     */
    GetActionTypeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetActionTypeInput || (GetActionTypeInput = {}));
export var GetActionTypeOutput;
(function (GetActionTypeOutput) {
    /**
     * @internal
     */
    GetActionTypeOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetActionTypeOutput || (GetActionTypeOutput = {}));
export var GetJobDetailsInput;
(function (GetJobDetailsInput) {
    /**
     * @internal
     */
    GetJobDetailsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetJobDetailsInput || (GetJobDetailsInput = {}));
export var StageContext;
(function (StageContext) {
    /**
     * @internal
     */
    StageContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StageContext || (StageContext = {}));
export var PipelineContext;
(function (PipelineContext) {
    /**
     * @internal
     */
    PipelineContext.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineContext || (PipelineContext = {}));
export var JobData;
(function (JobData) {
    /**
     * @internal
     */
    JobData.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.artifactCredentials && { artifactCredentials: SENSITIVE_STRING }))); };
})(JobData || (JobData = {}));
export var JobDetails;
(function (JobDetails) {
    /**
     * @internal
     */
    JobDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.data && { data: JobData.filterSensitiveLog(obj.data) }))); };
})(JobDetails || (JobDetails = {}));
export var GetJobDetailsOutput;
(function (GetJobDetailsOutput) {
    /**
     * @internal
     */
    GetJobDetailsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.jobDetails && { jobDetails: JobDetails.filterSensitiveLog(obj.jobDetails) }))); };
})(GetJobDetailsOutput || (GetJobDetailsOutput = {}));
export var GetPipelineInput;
(function (GetPipelineInput) {
    /**
     * @internal
     */
    GetPipelineInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPipelineInput || (GetPipelineInput = {}));
export var PipelineMetadata;
(function (PipelineMetadata) {
    /**
     * @internal
     */
    PipelineMetadata.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineMetadata || (PipelineMetadata = {}));
export var GetPipelineOutput;
(function (GetPipelineOutput) {
    /**
     * @internal
     */
    GetPipelineOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPipelineOutput || (GetPipelineOutput = {}));
export var PipelineVersionNotFoundException;
(function (PipelineVersionNotFoundException) {
    /**
     * @internal
     */
    PipelineVersionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineVersionNotFoundException || (PipelineVersionNotFoundException = {}));
export var GetPipelineExecutionInput;
(function (GetPipelineExecutionInput) {
    /**
     * @internal
     */
    GetPipelineExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPipelineExecutionInput || (GetPipelineExecutionInput = {}));
export var PipelineExecutionStatus;
(function (PipelineExecutionStatus) {
    PipelineExecutionStatus["Cancelled"] = "Cancelled";
    PipelineExecutionStatus["Failed"] = "Failed";
    PipelineExecutionStatus["InProgress"] = "InProgress";
    PipelineExecutionStatus["Stopped"] = "Stopped";
    PipelineExecutionStatus["Stopping"] = "Stopping";
    PipelineExecutionStatus["Succeeded"] = "Succeeded";
    PipelineExecutionStatus["Superseded"] = "Superseded";
})(PipelineExecutionStatus || (PipelineExecutionStatus = {}));
export var PipelineExecution;
(function (PipelineExecution) {
    /**
     * @internal
     */
    PipelineExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineExecution || (PipelineExecution = {}));
export var GetPipelineExecutionOutput;
(function (GetPipelineExecutionOutput) {
    /**
     * @internal
     */
    GetPipelineExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPipelineExecutionOutput || (GetPipelineExecutionOutput = {}));
export var PipelineExecutionNotFoundException;
(function (PipelineExecutionNotFoundException) {
    /**
     * @internal
     */
    PipelineExecutionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineExecutionNotFoundException || (PipelineExecutionNotFoundException = {}));
export var GetPipelineStateInput;
(function (GetPipelineStateInput) {
    /**
     * @internal
     */
    GetPipelineStateInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPipelineStateInput || (GetPipelineStateInput = {}));
export var StageExecutionStatus;
(function (StageExecutionStatus) {
    StageExecutionStatus["Cancelled"] = "Cancelled";
    StageExecutionStatus["Failed"] = "Failed";
    StageExecutionStatus["InProgress"] = "InProgress";
    StageExecutionStatus["Stopped"] = "Stopped";
    StageExecutionStatus["Stopping"] = "Stopping";
    StageExecutionStatus["Succeeded"] = "Succeeded";
})(StageExecutionStatus || (StageExecutionStatus = {}));
export var StageExecution;
(function (StageExecution) {
    /**
     * @internal
     */
    StageExecution.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StageExecution || (StageExecution = {}));
export var TransitionState;
(function (TransitionState) {
    /**
     * @internal
     */
    TransitionState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TransitionState || (TransitionState = {}));
export var StageState;
(function (StageState) {
    /**
     * @internal
     */
    StageState.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StageState || (StageState = {}));
export var GetPipelineStateOutput;
(function (GetPipelineStateOutput) {
    /**
     * @internal
     */
    GetPipelineStateOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPipelineStateOutput || (GetPipelineStateOutput = {}));
export var GetThirdPartyJobDetailsInput;
(function (GetThirdPartyJobDetailsInput) {
    /**
     * @internal
     */
    GetThirdPartyJobDetailsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetThirdPartyJobDetailsInput || (GetThirdPartyJobDetailsInput = {}));
export var ThirdPartyJobData;
(function (ThirdPartyJobData) {
    /**
     * @internal
     */
    ThirdPartyJobData.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.artifactCredentials && { artifactCredentials: SENSITIVE_STRING }))); };
})(ThirdPartyJobData || (ThirdPartyJobData = {}));
export var ThirdPartyJobDetails;
(function (ThirdPartyJobDetails) {
    /**
     * @internal
     */
    ThirdPartyJobDetails.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.data && { data: ThirdPartyJobData.filterSensitiveLog(obj.data) }))); };
})(ThirdPartyJobDetails || (ThirdPartyJobDetails = {}));
export var GetThirdPartyJobDetailsOutput;
(function (GetThirdPartyJobDetailsOutput) {
    /**
     * @internal
     */
    GetThirdPartyJobDetailsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.jobDetails && { jobDetails: ThirdPartyJobDetails.filterSensitiveLog(obj.jobDetails) }))); };
})(GetThirdPartyJobDetailsOutput || (GetThirdPartyJobDetailsOutput = {}));
export var InvalidJobException;
(function (InvalidJobException) {
    /**
     * @internal
     */
    InvalidJobException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidJobException || (InvalidJobException = {}));
export var InvalidNextTokenException;
(function (InvalidNextTokenException) {
    /**
     * @internal
     */
    InvalidNextTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidNextTokenException || (InvalidNextTokenException = {}));
export var ListActionExecutionsInput;
(function (ListActionExecutionsInput) {
    /**
     * @internal
     */
    ListActionExecutionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActionExecutionsInput || (ListActionExecutionsInput = {}));
export var ListActionExecutionsOutput;
(function (ListActionExecutionsOutput) {
    /**
     * @internal
     */
    ListActionExecutionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActionExecutionsOutput || (ListActionExecutionsOutput = {}));
export var ListActionTypesInput;
(function (ListActionTypesInput) {
    /**
     * @internal
     */
    ListActionTypesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActionTypesInput || (ListActionTypesInput = {}));
export var ListActionTypesOutput;
(function (ListActionTypesOutput) {
    /**
     * @internal
     */
    ListActionTypesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActionTypesOutput || (ListActionTypesOutput = {}));
export var ListPipelineExecutionsInput;
(function (ListPipelineExecutionsInput) {
    /**
     * @internal
     */
    ListPipelineExecutionsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPipelineExecutionsInput || (ListPipelineExecutionsInput = {}));
export var SourceRevision;
(function (SourceRevision) {
    /**
     * @internal
     */
    SourceRevision.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SourceRevision || (SourceRevision = {}));
export var StopExecutionTrigger;
(function (StopExecutionTrigger) {
    /**
     * @internal
     */
    StopExecutionTrigger.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopExecutionTrigger || (StopExecutionTrigger = {}));
export var TriggerType;
(function (TriggerType) {
    TriggerType["CloudWatchEvent"] = "CloudWatchEvent";
    TriggerType["CreatePipeline"] = "CreatePipeline";
    TriggerType["PollForSourceChanges"] = "PollForSourceChanges";
    TriggerType["PutActionRevision"] = "PutActionRevision";
    TriggerType["StartPipelineExecution"] = "StartPipelineExecution";
    TriggerType["Webhook"] = "Webhook";
})(TriggerType || (TriggerType = {}));
export var ExecutionTrigger;
(function (ExecutionTrigger) {
    /**
     * @internal
     */
    ExecutionTrigger.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionTrigger || (ExecutionTrigger = {}));
export var PipelineExecutionSummary;
(function (PipelineExecutionSummary) {
    /**
     * @internal
     */
    PipelineExecutionSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineExecutionSummary || (PipelineExecutionSummary = {}));
export var ListPipelineExecutionsOutput;
(function (ListPipelineExecutionsOutput) {
    /**
     * @internal
     */
    ListPipelineExecutionsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPipelineExecutionsOutput || (ListPipelineExecutionsOutput = {}));
export var ListPipelinesInput;
(function (ListPipelinesInput) {
    /**
     * @internal
     */
    ListPipelinesInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPipelinesInput || (ListPipelinesInput = {}));
export var PipelineSummary;
(function (PipelineSummary) {
    /**
     * @internal
     */
    PipelineSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineSummary || (PipelineSummary = {}));
export var ListPipelinesOutput;
(function (ListPipelinesOutput) {
    /**
     * @internal
     */
    ListPipelinesOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListPipelinesOutput || (ListPipelinesOutput = {}));
export var InvalidArnException;
(function (InvalidArnException) {
    /**
     * @internal
     */
    InvalidArnException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidArnException || (InvalidArnException = {}));
export var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceInput || (ListTagsForResourceInput = {}));
export var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceOutput || (ListTagsForResourceOutput = {}));
export var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    /**
     * @internal
     */
    ResourceNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ResourceNotFoundException || (ResourceNotFoundException = {}));
export var ListWebhooksInput;
(function (ListWebhooksInput) {
    /**
     * @internal
     */
    ListWebhooksInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWebhooksInput || (ListWebhooksInput = {}));
export var WebhookAuthenticationType;
(function (WebhookAuthenticationType) {
    WebhookAuthenticationType["GITHUB_HMAC"] = "GITHUB_HMAC";
    WebhookAuthenticationType["IP"] = "IP";
    WebhookAuthenticationType["UNAUTHENTICATED"] = "UNAUTHENTICATED";
})(WebhookAuthenticationType || (WebhookAuthenticationType = {}));
export var WebhookAuthConfiguration;
(function (WebhookAuthConfiguration) {
    /**
     * @internal
     */
    WebhookAuthConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebhookAuthConfiguration || (WebhookAuthConfiguration = {}));
export var WebhookFilterRule;
(function (WebhookFilterRule) {
    /**
     * @internal
     */
    WebhookFilterRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebhookFilterRule || (WebhookFilterRule = {}));
export var WebhookDefinition;
(function (WebhookDefinition) {
    /**
     * @internal
     */
    WebhookDefinition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebhookDefinition || (WebhookDefinition = {}));
export var ListWebhookItem;
(function (ListWebhookItem) {
    /**
     * @internal
     */
    ListWebhookItem.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWebhookItem || (ListWebhookItem = {}));
export var ListWebhooksOutput;
(function (ListWebhooksOutput) {
    /**
     * @internal
     */
    ListWebhooksOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWebhooksOutput || (ListWebhooksOutput = {}));
export var PollForJobsInput;
(function (PollForJobsInput) {
    /**
     * @internal
     */
    PollForJobsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PollForJobsInput || (PollForJobsInput = {}));
export var Job;
(function (Job) {
    /**
     * @internal
     */
    Job.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.data && { data: JobData.filterSensitiveLog(obj.data) }))); };
})(Job || (Job = {}));
export var PollForJobsOutput;
(function (PollForJobsOutput) {
    /**
     * @internal
     */
    PollForJobsOutput.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.jobs && { jobs: obj.jobs.map(function (item) { return Job.filterSensitiveLog(item); }) }))); };
})(PollForJobsOutput || (PollForJobsOutput = {}));
export var PollForThirdPartyJobsInput;
(function (PollForThirdPartyJobsInput) {
    /**
     * @internal
     */
    PollForThirdPartyJobsInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PollForThirdPartyJobsInput || (PollForThirdPartyJobsInput = {}));
export var ThirdPartyJob;
(function (ThirdPartyJob) {
    /**
     * @internal
     */
    ThirdPartyJob.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThirdPartyJob || (ThirdPartyJob = {}));
export var PollForThirdPartyJobsOutput;
(function (PollForThirdPartyJobsOutput) {
    /**
     * @internal
     */
    PollForThirdPartyJobsOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PollForThirdPartyJobsOutput || (PollForThirdPartyJobsOutput = {}));
export var PutActionRevisionInput;
(function (PutActionRevisionInput) {
    /**
     * @internal
     */
    PutActionRevisionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutActionRevisionInput || (PutActionRevisionInput = {}));
export var PutActionRevisionOutput;
(function (PutActionRevisionOutput) {
    /**
     * @internal
     */
    PutActionRevisionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutActionRevisionOutput || (PutActionRevisionOutput = {}));
export var InvalidApprovalTokenException;
(function (InvalidApprovalTokenException) {
    /**
     * @internal
     */
    InvalidApprovalTokenException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidApprovalTokenException || (InvalidApprovalTokenException = {}));
export var PutApprovalResultInput;
(function (PutApprovalResultInput) {
    /**
     * @internal
     */
    PutApprovalResultInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutApprovalResultInput || (PutApprovalResultInput = {}));
export var PutApprovalResultOutput;
(function (PutApprovalResultOutput) {
    /**
     * @internal
     */
    PutApprovalResultOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutApprovalResultOutput || (PutApprovalResultOutput = {}));
export var InvalidJobStateException;
(function (InvalidJobStateException) {
    /**
     * @internal
     */
    InvalidJobStateException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidJobStateException || (InvalidJobStateException = {}));
export var FailureType;
(function (FailureType) {
    FailureType["ConfigurationError"] = "ConfigurationError";
    FailureType["JobFailed"] = "JobFailed";
    FailureType["PermissionError"] = "PermissionError";
    FailureType["RevisionOutOfSync"] = "RevisionOutOfSync";
    FailureType["RevisionUnavailable"] = "RevisionUnavailable";
    FailureType["SystemUnavailable"] = "SystemUnavailable";
})(FailureType || (FailureType = {}));
export var FailureDetails;
(function (FailureDetails) {
    /**
     * @internal
     */
    FailureDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FailureDetails || (FailureDetails = {}));
export var PutJobFailureResultInput;
(function (PutJobFailureResultInput) {
    /**
     * @internal
     */
    PutJobFailureResultInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutJobFailureResultInput || (PutJobFailureResultInput = {}));
export var OutputVariablesSizeExceededException;
(function (OutputVariablesSizeExceededException) {
    /**
     * @internal
     */
    OutputVariablesSizeExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OutputVariablesSizeExceededException || (OutputVariablesSizeExceededException = {}));
export var CurrentRevision;
(function (CurrentRevision) {
    /**
     * @internal
     */
    CurrentRevision.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CurrentRevision || (CurrentRevision = {}));
export var ExecutionDetails;
(function (ExecutionDetails) {
    /**
     * @internal
     */
    ExecutionDetails.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExecutionDetails || (ExecutionDetails = {}));
export var PutJobSuccessResultInput;
(function (PutJobSuccessResultInput) {
    /**
     * @internal
     */
    PutJobSuccessResultInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutJobSuccessResultInput || (PutJobSuccessResultInput = {}));
export var PutThirdPartyJobFailureResultInput;
(function (PutThirdPartyJobFailureResultInput) {
    /**
     * @internal
     */
    PutThirdPartyJobFailureResultInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutThirdPartyJobFailureResultInput || (PutThirdPartyJobFailureResultInput = {}));
export var PutThirdPartyJobSuccessResultInput;
(function (PutThirdPartyJobSuccessResultInput) {
    /**
     * @internal
     */
    PutThirdPartyJobSuccessResultInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutThirdPartyJobSuccessResultInput || (PutThirdPartyJobSuccessResultInput = {}));
export var InvalidWebhookAuthenticationParametersException;
(function (InvalidWebhookAuthenticationParametersException) {
    /**
     * @internal
     */
    InvalidWebhookAuthenticationParametersException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidWebhookAuthenticationParametersException || (InvalidWebhookAuthenticationParametersException = {}));
export var InvalidWebhookFilterPatternException;
(function (InvalidWebhookFilterPatternException) {
    /**
     * @internal
     */
    InvalidWebhookFilterPatternException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidWebhookFilterPatternException || (InvalidWebhookFilterPatternException = {}));
export var PutWebhookInput;
(function (PutWebhookInput) {
    /**
     * @internal
     */
    PutWebhookInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutWebhookInput || (PutWebhookInput = {}));
export var PutWebhookOutput;
(function (PutWebhookOutput) {
    /**
     * @internal
     */
    PutWebhookOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutWebhookOutput || (PutWebhookOutput = {}));
export var RegisterWebhookWithThirdPartyInput;
(function (RegisterWebhookWithThirdPartyInput) {
    /**
     * @internal
     */
    RegisterWebhookWithThirdPartyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterWebhookWithThirdPartyInput || (RegisterWebhookWithThirdPartyInput = {}));
export var RegisterWebhookWithThirdPartyOutput;
(function (RegisterWebhookWithThirdPartyOutput) {
    /**
     * @internal
     */
    RegisterWebhookWithThirdPartyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegisterWebhookWithThirdPartyOutput || (RegisterWebhookWithThirdPartyOutput = {}));
export var ConflictException;
(function (ConflictException) {
    /**
     * @internal
     */
    ConflictException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ConflictException || (ConflictException = {}));
export var NotLatestPipelineExecutionException;
(function (NotLatestPipelineExecutionException) {
    /**
     * @internal
     */
    NotLatestPipelineExecutionException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotLatestPipelineExecutionException || (NotLatestPipelineExecutionException = {}));
export var StageRetryMode;
(function (StageRetryMode) {
    StageRetryMode["FAILED_ACTIONS"] = "FAILED_ACTIONS";
})(StageRetryMode || (StageRetryMode = {}));
export var RetryStageExecutionInput;
(function (RetryStageExecutionInput) {
    /**
     * @internal
     */
    RetryStageExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryStageExecutionInput || (RetryStageExecutionInput = {}));
export var RetryStageExecutionOutput;
(function (RetryStageExecutionOutput) {
    /**
     * @internal
     */
    RetryStageExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RetryStageExecutionOutput || (RetryStageExecutionOutput = {}));
export var StageNotRetryableException;
(function (StageNotRetryableException) {
    /**
     * @internal
     */
    StageNotRetryableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StageNotRetryableException || (StageNotRetryableException = {}));
export var StartPipelineExecutionInput;
(function (StartPipelineExecutionInput) {
    /**
     * @internal
     */
    StartPipelineExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartPipelineExecutionInput || (StartPipelineExecutionInput = {}));
export var StartPipelineExecutionOutput;
(function (StartPipelineExecutionOutput) {
    /**
     * @internal
     */
    StartPipelineExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartPipelineExecutionOutput || (StartPipelineExecutionOutput = {}));
export var DuplicatedStopRequestException;
(function (DuplicatedStopRequestException) {
    /**
     * @internal
     */
    DuplicatedStopRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DuplicatedStopRequestException || (DuplicatedStopRequestException = {}));
export var PipelineExecutionNotStoppableException;
(function (PipelineExecutionNotStoppableException) {
    /**
     * @internal
     */
    PipelineExecutionNotStoppableException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PipelineExecutionNotStoppableException || (PipelineExecutionNotStoppableException = {}));
export var StopPipelineExecutionInput;
(function (StopPipelineExecutionInput) {
    /**
     * @internal
     */
    StopPipelineExecutionInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopPipelineExecutionInput || (StopPipelineExecutionInput = {}));
export var StopPipelineExecutionOutput;
(function (StopPipelineExecutionOutput) {
    /**
     * @internal
     */
    StopPipelineExecutionOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopPipelineExecutionOutput || (StopPipelineExecutionOutput = {}));
export var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceInput || (TagResourceInput = {}));
export var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceOutput || (TagResourceOutput = {}));
export var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceInput || (UntagResourceInput = {}));
export var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceOutput || (UntagResourceOutput = {}));
export var RequestFailedException;
(function (RequestFailedException) {
    /**
     * @internal
     */
    RequestFailedException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RequestFailedException || (RequestFailedException = {}));
export var UpdateActionTypeInput;
(function (UpdateActionTypeInput) {
    /**
     * @internal
     */
    UpdateActionTypeInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateActionTypeInput || (UpdateActionTypeInput = {}));
export var UpdatePipelineInput;
(function (UpdatePipelineInput) {
    /**
     * @internal
     */
    UpdatePipelineInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePipelineInput || (UpdatePipelineInput = {}));
export var UpdatePipelineOutput;
(function (UpdatePipelineOutput) {
    /**
     * @internal
     */
    UpdatePipelineOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdatePipelineOutput || (UpdatePipelineOutput = {}));
//# sourceMappingURL=models_0.js.map