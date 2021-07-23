import { __extends } from "tslib";
import { PutApprovalResultInput, PutApprovalResultOutput } from "../models/models_0";
import { deserializeAws_json1_1PutApprovalResultCommand, serializeAws_json1_1PutApprovalResultCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Provides the response to a manual approval request to AWS CodePipeline. Valid
 *             responses include Approved and Rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutApprovalResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutApprovalResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutApprovalResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutApprovalResultCommandInput} for command's `input` shape.
 * @see {@link PutApprovalResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutApprovalResultCommand = /** @class */ (function (_super) {
    __extends(PutApprovalResultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutApprovalResultCommand(input) {
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
    PutApprovalResultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "PutApprovalResultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutApprovalResultInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutApprovalResultOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutApprovalResultCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutApprovalResultCommand(input, context);
    };
    PutApprovalResultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutApprovalResultCommand(output, context);
    };
    return PutApprovalResultCommand;
}($Command));
export { PutApprovalResultCommand };
//# sourceMappingURL=PutApprovalResultCommand.js.map