import { __extends } from "tslib";
import { RetryStageExecutionInput, RetryStageExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_1RetryStageExecutionCommand, serializeAws_json1_1RetryStageExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resumes the pipeline execution by retrying the last failed actions in a stage. You
 *             can retry a stage immediately if any of the actions in the stage fail. When you retry,
 *             all actions that are still in progress continue working, and failed actions are
 *             triggered again.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RetryStageExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RetryStageExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new RetryStageExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RetryStageExecutionCommandInput} for command's `input` shape.
 * @see {@link RetryStageExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RetryStageExecutionCommand = /** @class */ (function (_super) {
    __extends(RetryStageExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RetryStageExecutionCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    RetryStageExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "RetryStageExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RetryStageExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: RetryStageExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RetryStageExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RetryStageExecutionCommand(input, context);
    };
    RetryStageExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RetryStageExecutionCommand(output, context);
    };
    return RetryStageExecutionCommand;
}($Command));
export { RetryStageExecutionCommand };
//# sourceMappingURL=RetryStageExecutionCommand.js.map