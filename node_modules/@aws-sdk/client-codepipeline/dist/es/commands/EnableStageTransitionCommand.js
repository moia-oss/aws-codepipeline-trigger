import { __extends } from "tslib";
import { EnableStageTransitionInput } from "../models/models_0";
import { deserializeAws_json1_1EnableStageTransitionCommand, serializeAws_json1_1EnableStageTransitionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Enables artifacts in a pipeline to transition to a stage in a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, EnableStageTransitionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, EnableStageTransitionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new EnableStageTransitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableStageTransitionCommandInput} for command's `input` shape.
 * @see {@link EnableStageTransitionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var EnableStageTransitionCommand = /** @class */ (function (_super) {
    __extends(EnableStageTransitionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function EnableStageTransitionCommand(input) {
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
    EnableStageTransitionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "EnableStageTransitionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: EnableStageTransitionInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    EnableStageTransitionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1EnableStageTransitionCommand(input, context);
    };
    EnableStageTransitionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1EnableStageTransitionCommand(output, context);
    };
    return EnableStageTransitionCommand;
}($Command));
export { EnableStageTransitionCommand };
//# sourceMappingURL=EnableStageTransitionCommand.js.map