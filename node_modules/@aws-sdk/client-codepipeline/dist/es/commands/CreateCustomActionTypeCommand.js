import { __extends } from "tslib";
import { CreateCustomActionTypeInput, CreateCustomActionTypeOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateCustomActionTypeCommand, serializeAws_json1_1CreateCustomActionTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new custom action that can be used in all pipelines associated with the
 *             AWS account. Only used for custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, CreateCustomActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, CreateCustomActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new CreateCustomActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCustomActionTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateCustomActionTypeCommand = /** @class */ (function (_super) {
    __extends(CreateCustomActionTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateCustomActionTypeCommand(input) {
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
    CreateCustomActionTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "CreateCustomActionTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateCustomActionTypeInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateCustomActionTypeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateCustomActionTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateCustomActionTypeCommand(input, context);
    };
    CreateCustomActionTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateCustomActionTypeCommand(output, context);
    };
    return CreateCustomActionTypeCommand;
}($Command));
export { CreateCustomActionTypeCommand };
//# sourceMappingURL=CreateCustomActionTypeCommand.js.map