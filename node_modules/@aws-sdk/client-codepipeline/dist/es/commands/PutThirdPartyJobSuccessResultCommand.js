import { __extends } from "tslib";
import { PutThirdPartyJobSuccessResultInput } from "../models/models_0";
import { deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand, serializeAws_json1_1PutThirdPartyJobSuccessResultCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents the success of a third party job as returned to the pipeline by a job
 *             worker. Used for partner actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutThirdPartyJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutThirdPartyJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutThirdPartyJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutThirdPartyJobSuccessResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutThirdPartyJobSuccessResultCommand = /** @class */ (function (_super) {
    __extends(PutThirdPartyJobSuccessResultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutThirdPartyJobSuccessResultCommand(input) {
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
    PutThirdPartyJobSuccessResultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "PutThirdPartyJobSuccessResultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutThirdPartyJobSuccessResultInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutThirdPartyJobSuccessResultCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutThirdPartyJobSuccessResultCommand(input, context);
    };
    PutThirdPartyJobSuccessResultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutThirdPartyJobSuccessResultCommand(output, context);
    };
    return PutThirdPartyJobSuccessResultCommand;
}($Command));
export { PutThirdPartyJobSuccessResultCommand };
//# sourceMappingURL=PutThirdPartyJobSuccessResultCommand.js.map