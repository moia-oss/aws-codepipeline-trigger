import { __extends } from "tslib";
import { StopPipelineExecutionInput, StopPipelineExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_1StopPipelineExecutionCommand, serializeAws_json1_1StopPipelineExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Stops the specified pipeline execution. You choose to either stop the pipeline
 *             execution by completing in-progress actions without starting subsequent actions, or by
 *             abandoning in-progress actions. While completing or abandoning in-progress actions, the
 *             pipeline execution is in a <code>Stopping</code> state. After all in-progress actions
 *             are completed or abandoned, the pipeline execution is in a <code>Stopped</code>
 *             state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, StopPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, StopPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new StopPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link StopPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StopPipelineExecutionCommand = /** @class */ (function (_super) {
    __extends(StopPipelineExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StopPipelineExecutionCommand(input) {
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
    StopPipelineExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "StopPipelineExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StopPipelineExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: StopPipelineExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StopPipelineExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StopPipelineExecutionCommand(input, context);
    };
    StopPipelineExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StopPipelineExecutionCommand(output, context);
    };
    return StopPipelineExecutionCommand;
}($Command));
export { StopPipelineExecutionCommand };
//# sourceMappingURL=StopPipelineExecutionCommand.js.map