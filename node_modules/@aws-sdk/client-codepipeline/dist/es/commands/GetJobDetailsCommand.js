import { __extends } from "tslib";
import { GetJobDetailsInput, GetJobDetailsOutput } from "../models/models_0";
import { deserializeAws_json1_1GetJobDetailsCommand, serializeAws_json1_1GetJobDetailsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a job. Used for custom actions only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetJobDetailsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetJobDetailsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetJobDetailsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetJobDetailsCommandInput} for command's `input` shape.
 * @see {@link GetJobDetailsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetJobDetailsCommand = /** @class */ (function (_super) {
    __extends(GetJobDetailsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetJobDetailsCommand(input) {
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
    GetJobDetailsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "GetJobDetailsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetJobDetailsInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetJobDetailsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetJobDetailsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetJobDetailsCommand(input, context);
    };
    GetJobDetailsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetJobDetailsCommand(output, context);
    };
    return GetJobDetailsCommand;
}($Command));
export { GetJobDetailsCommand };
//# sourceMappingURL=GetJobDetailsCommand.js.map