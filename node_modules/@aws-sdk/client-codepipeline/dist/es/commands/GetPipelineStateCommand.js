import { __extends } from "tslib";
import { GetPipelineStateInput, GetPipelineStateOutput } from "../models/models_0";
import { deserializeAws_json1_1GetPipelineStateCommand, serializeAws_json1_1GetPipelineStateCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the state of a pipeline, including the stages and
 *             actions.</p>
 *         <note>
 *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
 *                 fields indicate the source revision information, such as the commit ID, for the
 *                 current state.</p>
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetPipelineStateCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetPipelineStateCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetPipelineStateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPipelineStateCommandInput} for command's `input` shape.
 * @see {@link GetPipelineStateCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetPipelineStateCommand = /** @class */ (function (_super) {
    __extends(GetPipelineStateCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetPipelineStateCommand(input) {
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
    GetPipelineStateCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "GetPipelineStateCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetPipelineStateInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetPipelineStateOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetPipelineStateCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetPipelineStateCommand(input, context);
    };
    GetPipelineStateCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetPipelineStateCommand(output, context);
    };
    return GetPipelineStateCommand;
}($Command));
export { GetPipelineStateCommand };
//# sourceMappingURL=GetPipelineStateCommand.js.map