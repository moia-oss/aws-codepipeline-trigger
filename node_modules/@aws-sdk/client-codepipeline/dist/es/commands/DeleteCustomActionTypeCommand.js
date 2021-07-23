import { __extends } from "tslib";
import { DeleteCustomActionTypeInput } from "../models/models_0";
import { deserializeAws_json1_1DeleteCustomActionTypeCommand, serializeAws_json1_1DeleteCustomActionTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action
 *             fails after the action is marked for deletion. Used for custom actions only.</p>
 *         <important>
 *             <p>To re-create a custom action after it has been deleted you must use a string in
 *                 the version field that has never been used before. This string can be an incremented
 *                 version number, for example. To restore a deleted custom action, use a JSON file
 *                 that is identical to the deleted action, including the original string in the
 *                 version field.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DeleteCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteCustomActionTypeCommand = /** @class */ (function (_super) {
    __extends(DeleteCustomActionTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteCustomActionTypeCommand(input) {
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
    DeleteCustomActionTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "DeleteCustomActionTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteCustomActionTypeInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteCustomActionTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteCustomActionTypeCommand(input, context);
    };
    DeleteCustomActionTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteCustomActionTypeCommand(output, context);
    };
    return DeleteCustomActionTypeCommand;
}($Command));
export { DeleteCustomActionTypeCommand };
//# sourceMappingURL=DeleteCustomActionTypeCommand.js.map