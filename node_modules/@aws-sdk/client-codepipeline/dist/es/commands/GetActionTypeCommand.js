import { __extends } from "tslib";
import { GetActionTypeInput, GetActionTypeOutput } from "../models/models_0";
import { deserializeAws_json1_1GetActionTypeCommand, serializeAws_json1_1GetActionTypeCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about an action type created for an external provider, where the
 *             action is to be used by customers of the external provider. The action can be created
 *             with any supported integration model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, GetActionTypeCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, GetActionTypeCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new GetActionTypeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetActionTypeCommandInput} for command's `input` shape.
 * @see {@link GetActionTypeCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetActionTypeCommand = /** @class */ (function (_super) {
    __extends(GetActionTypeCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetActionTypeCommand(input) {
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
    GetActionTypeCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "GetActionTypeCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetActionTypeInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetActionTypeOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetActionTypeCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetActionTypeCommand(input, context);
    };
    GetActionTypeCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetActionTypeCommand(output, context);
    };
    return GetActionTypeCommand;
}($Command));
export { GetActionTypeCommand };
//# sourceMappingURL=GetActionTypeCommand.js.map