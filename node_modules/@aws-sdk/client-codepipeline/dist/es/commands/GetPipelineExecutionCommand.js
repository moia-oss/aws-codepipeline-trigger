import { __extends } from "tslib";
import { GetPipelineExecutionInput, GetPipelineExecutionOutput } from "../models/models_0";
import { deserializeAws_json1_1GetPipelineExecutionCommand, serializeAws_json1_1GetPipelineExecutionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about an execution of a pipeline, including details about
 *             artifacts, the pipeline execution ID, and the name, version, and status of the
 *             pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineExecutionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineExecutionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetPipelineExecutionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineExecutionCommandInput} for command's `input` shape.
 * @see {@link GetPipelineExecutionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPipelineExecutionCommand = /** @class */ (function (_super) {
    __extends(GetPipelineExecutionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPipelineExecutionCommand(input) {
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
    GetPipelineExecutionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "GetPipelineExecutionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPipelineExecutionInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPipelineExecutionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPipelineExecutionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPipelineExecutionCommand(input, context);
    };
    GetPipelineExecutionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPipelineExecutionCommand(output, context);
    };
    return GetPipelineExecutionCommand;
}($Command));
export { GetPipelineExecutionCommand };
//# sourceMappingURL=GetPipelineExecutionCommand.js.map