import { __extends } from "tslib";
import { PutThirdPartyJobFailureResultInput } from "../models/models_0";
import { deserializeAws_json1_1PutThirdPartyJobFailureResultCommand, serializeAws_json1_1PutThirdPartyJobFailureResultCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents the failure of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutThirdPartyJobFailureResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutThirdPartyJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutThirdPartyJobFailureResultCommand = /** @class */ (function (_super) {
    __extends(PutThirdPartyJobFailureResultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutThirdPartyJobFailureResultCommand(input) {
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
    PutThirdPartyJobFailureResultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "PutThirdPartyJobFailureResultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutThirdPartyJobFailureResultInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutThirdPartyJobFailureResultCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutThirdPartyJobFailureResultCommand(input, context);
    };
    PutThirdPartyJobFailureResultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutThirdPartyJobFailureResultCommand(output, context);
    };
    return PutThirdPartyJobFailureResultCommand;
}($Command));
export { PutThirdPartyJobFailureResultCommand };
//# sourceMappingURL=PutThirdPartyJobFailureResultCommand.js.map