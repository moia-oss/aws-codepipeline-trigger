import { __extends } from "tslib";
import { AcknowledgeJobInput, AcknowledgeJobOutput } from "../models/models_0";
import { deserializeAws_json1_1AcknowledgeJobCommand, serializeAws_json1_1AcknowledgeJobCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about a specified job and whether that job has been received by
 *             the job worker. Used for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, AcknowledgeJobCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, AcknowledgeJobCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new AcknowledgeJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcknowledgeJobCommandInput} for command's `input` shape.
 * @see {@link AcknowledgeJobCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AcknowledgeJobCommand = /** @class */ (function (_super) {
    __extends(AcknowledgeJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AcknowledgeJobCommand(input) {
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
    AcknowledgeJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "AcknowledgeJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AcknowledgeJobInput.filterSensitiveLog,
            outputFilterSensitiveLog: AcknowledgeJobOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AcknowledgeJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AcknowledgeJobCommand(input, context);
    };
    AcknowledgeJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AcknowledgeJobCommand(output, context);
    };
    return AcknowledgeJobCommand;
}($Command));
export { AcknowledgeJobCommand };
//# sourceMappingURL=AcknowledgeJobCommand.js.map