import { __extends } from "tslib";
import { DeleteWebhookInput, DeleteWebhookOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteWebhookCommand, serializeAws_json1_1DeleteWebhookCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a previously created webhook by name. Deleting the webhook stops AWS
 *             CodePipeline from starting a pipeline every time an external event occurs. The API
 *             returns successfully when trying to delete a webhook that is already deleted. If a
 *             deleted webhook is re-created by calling PutWebhook with the same name, it will have a
 *             different URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, DeleteWebhookCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, DeleteWebhookCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new DeleteWebhookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWebhookCommandInput} for command's `input` shape.
 * @see {@link DeleteWebhookCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWebhookCommand = /** @class */ (function (_super) {
    __extends(DeleteWebhookCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWebhookCommand(input) {
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
    DeleteWebhookCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "DeleteWebhookCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWebhookInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWebhookOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWebhookCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWebhookCommand(input, context);
    };
    DeleteWebhookCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWebhookCommand(output, context);
    };
    return DeleteWebhookCommand;
}($Command));
export { DeleteWebhookCommand };
//# sourceMappingURL=DeleteWebhookCommand.js.map