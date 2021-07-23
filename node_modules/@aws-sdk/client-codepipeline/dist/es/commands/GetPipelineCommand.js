import { __extends } from "tslib";
import { GetPipelineInput, GetPipelineOutput } from "../models/models_0";
import { deserializeAws_json1_1GetPipelineCommand, serializeAws_json1_1GetPipelineCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
 *             return the entire structure of a pipeline in JSON format, which can then be modified and
 *             used to update the pipeline structure with <a>UpdatePipeline</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetPipelineCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineCommandInput} for command's `input` shape.
 * @see {@link GetPipelineCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPipelineCommand = /** @class */ (function (_super) {
    __extends(GetPipelineCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPipelineCommand(input) {
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
    GetPipelineCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "GetPipelineCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPipelineInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPipelineOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPipelineCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPipelineCommand(input, context);
    };
    GetPipelineCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPipelineCommand(output, context);
    };
    return GetPipelineCommand;
}($Command));
export { GetPipelineCommand };
//# sourceMappingURL=GetPipelineCommand.js.map