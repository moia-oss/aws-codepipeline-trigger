import { __extends } from "tslib";
import { GetThirdPartyJobDetailsInput, GetThirdPartyJobDetailsOutput } from "../models/models_0";
import { deserializeAws_json1_1GetThirdPartyJobDetailsCommand, serializeAws_json1_1GetThirdPartyJobDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Requests the details of a job for a third party action. Used for partner actions
 *             only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetThirdPartyJobDetailsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetThirdPartyJobDetailsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetThirdPartyJobDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetThirdPartyJobDetailsCommandInput} for command's `input` shape.
 * @see {@link GetThirdPartyJobDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetThirdPartyJobDetailsCommand = /** @class */ (function (_super) {
    __extends(GetThirdPartyJobDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetThirdPartyJobDetailsCommand(input) {
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
    GetThirdPartyJobDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "GetThirdPartyJobDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetThirdPartyJobDetailsInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetThirdPartyJobDetailsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetThirdPartyJobDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetThirdPartyJobDetailsCommand(input, context);
    };
    GetThirdPartyJobDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetThirdPartyJobDetailsCommand(output, context);
    };
    return GetThirdPartyJobDetailsCommand;
}($Command));
export { GetThirdPartyJobDetailsCommand };
//# sourceMappingURL=GetThirdPartyJobDetailsCommand.js.map