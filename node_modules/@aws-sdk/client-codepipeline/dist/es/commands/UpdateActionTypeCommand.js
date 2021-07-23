import { __extends } from "tslib";
import { UpdateActionTypeInput } from "../models/models_0";
import { deserializeAws_json1_1UpdateActionTypeCommand, serializeAws_json1_1UpdateActionTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an action type that was created with any supported integration model, where
 *             the action type is to be used by customers of the action type provider. Use a JSON file
 *             with the action definition and <code>UpdateActionType</code> to provide the full
 *             structure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, UpdateActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, UpdateActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new UpdateActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateActionTypeCommandInput} for command's `input` shape.
 * @see {@link UpdateActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateActionTypeCommand = /** @class */ (function (_super) {
    __extends(UpdateActionTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateActionTypeCommand(input) {
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
    UpdateActionTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "UpdateActionTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateActionTypeInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateActionTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateActionTypeCommand(input, context);
    };
    UpdateActionTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateActionTypeCommand(output, context);
    };
    return UpdateActionTypeCommand;
}($Command));
export { UpdateActionTypeCommand };
//# sourceMappingURL=UpdateActionTypeCommand.js.map