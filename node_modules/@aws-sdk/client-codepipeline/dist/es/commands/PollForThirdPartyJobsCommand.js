import { __extends } from "tslib";
import { PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput } from "../models/models_0";
import { deserializeAws_json1_1PollForThirdPartyJobsCommand, serializeAws_json1_1PollForThirdPartyJobsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Determines whether there are any third party jobs for a job worker to act on. Used
 *             for partner actions only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, PollForThirdPartyJobsCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, PollForThirdPartyJobsCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new PollForThirdPartyJobsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PollForThirdPartyJobsCommandInput} for command's `input` shape.
 * @see {@link PollForThirdPartyJobsCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PollForThirdPartyJobsCommand = /** @class */ (function (_super) {
    __extends(PollForThirdPartyJobsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PollForThirdPartyJobsCommand(input) {
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
    PollForThirdPartyJobsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodePipelineClient";
        var commandName = "PollForThirdPartyJobsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PollForThirdPartyJobsInput.filterSensitiveLog,
            outputFilterSensitiveLog: PollForThirdPartyJobsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PollForThirdPartyJobsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PollForThirdPartyJobsCommand(input, context);
    };
    PollForThirdPartyJobsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PollForThirdPartyJobsCommand(output, context);
    };
    return PollForThirdPartyJobsCommand;
}($Command));
export { PollForThirdPartyJobsCommand };
//# sourceMappingURL=PollForThirdPartyJobsCommand.js.map