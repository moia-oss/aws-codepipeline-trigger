import { __extends } from "tslib";
import { ListPipelineExecutionsInput, ListPipelineExecutionsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListPipelineExecutionsCommand, serializeAws_json1_1ListPipelineExecutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a summary of the most recent executions for a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListPipelineExecutionsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListPipelineExecutionsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListPipelineExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPipelineExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListPipelineExecutionsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPipelineExecutionsCommand = /** @class */ (function (_super) {
    __extends(ListPipelineExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPipelineExecutionsCommand(input) {
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
    ListPipelineExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "ListPipelineExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPipelineExecutionsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListPipelineExecutionsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPipelineExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListPipelineExecutionsCommand(input, context);
    };
    ListPipelineExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListPipelineExecutionsCommand(output, context);
    };
    return ListPipelineExecutionsCommand;
}($Command));
export { ListPipelineExecutionsCommand };
//# sourceMappingURL=ListPipelineExecutionsCommand.js.map