import { __extends } from "tslib";
import { PutJobSuccessResultInput } from "../models/models_0";
import { deserializeAws_json1_1PutJobSuccessResultCommand, serializeAws_json1_1PutJobSuccessResultCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Represents the success of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PutJobSuccessResultCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PutJobSuccessResultCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PutJobSuccessResultCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutJobSuccessResultCommandInput} for command's `input` shape.
 * @see {@link PutJobSuccessResultCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutJobSuccessResultCommand = /** @class */ (function (_super) {
    __extends(PutJobSuccessResultCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutJobSuccessResultCommand(input) {
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
    PutJobSuccessResultCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "PutJobSuccessResultCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutJobSuccessResultInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutJobSuccessResultCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutJobSuccessResultCommand(input, context);
    };
    PutJobSuccessResultCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutJobSuccessResultCommand(output, context);
    };
    return PutJobSuccessResultCommand;
}($Command));
export { PutJobSuccessResultCommand };
//# sourceMappingURL=PutJobSuccessResultCommand.js.map