import { __extends } from "tslib";
import { RegisterWebhookWithThirdPartyInput, RegisterWebhookWithThirdPartyOutput } from "../models/models_0";
import { deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand, serializeAws_json1_1RegisterWebhookWithThirdPartyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Configures a connection between the webhook that was created and the external tool
 *             with events to be detected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, RegisterWebhookWithThirdPartyCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new RegisterWebhookWithThirdPartyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterWebhookWithThirdPartyCommandInput} for command's `input` shape.
 * @see {@link RegisterWebhookWithThirdPartyCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterWebhookWithThirdPartyCommand = /** @class */ (function (_super) {
    __extends(RegisterWebhookWithThirdPartyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterWebhookWithThirdPartyCommand(input) {
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
    RegisterWebhookWithThirdPartyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "RegisterWebhookWithThirdPartyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterWebhookWithThirdPartyInput.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterWebhookWithThirdPartyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterWebhookWithThirdPartyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterWebhookWithThirdPartyCommand(input, context);
    };
    RegisterWebhookWithThirdPartyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterWebhookWithThirdPartyCommand(output, context);
    };
    return RegisterWebhookWithThirdPartyCommand;
}($Command));
export { RegisterWebhookWithThirdPartyCommand };
//# sourceMappingURL=RegisterWebhookWithThirdPartyCommand.js.map