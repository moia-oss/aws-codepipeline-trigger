import { __extends } from "tslib";
import { PutJobFailureResultInput } from "../models/models_0";
import { deserializeAws_json1_1PutJobFailureResultCommand, serializeAws_json1_1PutJobFailureResultCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents the failure of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobFailureResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobFailureResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutJobFailureResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutJobFailureResultCommandInput} for command's `input` shape.
 * @see {@link PutJobFailureResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutJobFailureResultCommand = /** @class */ (function (_super) {
    __extends(PutJobFailureResultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutJobFailureResultCommand(input) {
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
    PutJobFailureResultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "PutJobFailureResultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutJobFailureResultInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutJobFailureResultCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutJobFailureResultCommand(input, context);
    };
    PutJobFailureResultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutJobFailureResultCommand(output, context);
    };
    return PutJobFailureResultCommand;
}($Command));
export { PutJobFailureResultCommand };
//# sourceMappingURL=PutJobFailureResultCommand.js.map