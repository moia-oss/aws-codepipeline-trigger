import { __extends } from "tslib";
import { ListActionTypesInput, ListActionTypesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListActionTypesCommand, serializeAws_json1_1ListActionTypesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a summary of all AWS CodePipeline action types associated with your
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, ListActionTypesCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, ListActionTypesCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new ListActionTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListActionTypesCommandInput} for command's `input` shape.
 * @see {@link ListActionTypesCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListActionTypesCommand = /** @class */ (function (_super) {
    __extends(ListActionTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListActionTypesCommand(input) {
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
    ListActionTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "ListActionTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListActionTypesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListActionTypesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListActionTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListActionTypesCommand(input, context);
    };
    ListActionTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListActionTypesCommand(output, context);
    };
    return ListActionTypesCommand;
}($Command));
export { ListActionTypesCommand };
//# sourceMappingURL=ListActionTypesCommand.js.map