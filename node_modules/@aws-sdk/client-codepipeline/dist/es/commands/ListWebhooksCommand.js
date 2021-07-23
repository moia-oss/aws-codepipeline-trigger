import { __extends } from "tslib";
import { ListWebhooksInput, ListWebhooksOutput } from "../models/models_0";
import { deserializeAws_json1_1ListWebhooksCommand, serializeAws_json1_1ListWebhooksCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a listing of all the webhooks in this AWS Region for this account. The output
 *             lists all webhooks and includes the webhook URL and ARN and the configuration for each
 *             webhook.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListWebhooksCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListWebhooksCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListWebhooksCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListWebhooksCommandInput} for command's `input` shape.
 * @see {@link ListWebhooksCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListWebhooksCommand = /** @class */ (function (_super) {
    __extends(ListWebhooksCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListWebhooksCommand(input) {
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
    ListWebhooksCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "ListWebhooksCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListWebhooksInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListWebhooksOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListWebhooksCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListWebhooksCommand(input, context);
    };
    ListWebhooksCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListWebhooksCommand(output, context);
    };
    return ListWebhooksCommand;
}($Command));
export { ListWebhooksCommand };
//# sourceMappingURL=ListWebhooksCommand.js.map