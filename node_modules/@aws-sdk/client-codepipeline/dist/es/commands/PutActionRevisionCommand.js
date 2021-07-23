import { __extends } from "tslib";
import { PutActionRevisionInput, PutActionRevisionOutput } from "../models/models_0";
import { deserializeAws_json1_1PutActionRevisionCommand, serializeAws_json1_1PutActionRevisionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides information to AWS CodePipeline about new revisions to a source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutActionRevisionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutActionRevisionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutActionRevisionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutActionRevisionCommandInput} for command's `input` shape.
 * @see {@link PutActionRevisionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutActionRevisionCommand = /** @class */ (function (_super) {
    __extends(PutActionRevisionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutActionRevisionCommand(input) {
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
    PutActionRevisionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "PutActionRevisionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutActionRevisionInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutActionRevisionOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutActionRevisionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutActionRevisionCommand(input, context);
    };
    PutActionRevisionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutActionRevisionCommand(output, context);
    };
    return PutActionRevisionCommand;
}($Command));
export { PutActionRevisionCommand };
//# sourceMappingURL=PutActionRevisionCommand.js.map