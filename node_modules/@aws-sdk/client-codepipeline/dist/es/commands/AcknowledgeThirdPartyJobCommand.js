import { __extends } from "tslib";
import { AcknowledgeThirdPartyJobInput, AcknowledgeThirdPartyJobOutput } from "../models/models_0";
import { deserializeAws_json1_1AcknowledgeThirdPartyJobCommand, serializeAws_json1_1AcknowledgeThirdPartyJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Confirms a job worker has received the specified job. Used for partner actions
 *             only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeThirdPartyJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeThirdPartyJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new AcknowledgeThirdPartyJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcknowledgeThirdPartyJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeThirdPartyJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcknowledgeThirdPartyJobCommand = /** @class */ (function (_super) {
    __extends(AcknowledgeThirdPartyJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcknowledgeThirdPartyJobCommand(input) {
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
    AcknowledgeThirdPartyJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "AcknowledgeThirdPartyJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcknowledgeThirdPartyJobInput.filterSensitiveLog,
            outputFilterSensitiveLog: AcknowledgeThirdPartyJobOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcknowledgeThirdPartyJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcknowledgeThirdPartyJobCommand(input, context);
    };
    AcknowledgeThirdPartyJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcknowledgeThirdPartyJobCommand(output, context);
    };
    return AcknowledgeThirdPartyJobCommand;
}($Command));
export { AcknowledgeThirdPartyJobCommand };
//# sourceMappingURL=AcknowledgeThirdPartyJobCommand.js.map