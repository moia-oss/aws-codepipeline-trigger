import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { EnableStageTransitionInput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableStageTransitionCommandInput extends EnableStageTransitionInput {
}
export interface EnableStageTransitionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Enables artifacts in a pipeline to transition to a stage in a pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodePipelineClient, EnableStageTransitionCommand } from "@aws-sdk/client-codepipeline"; // ES Modules import
 * // const { CodePipelineClient, EnableStageTransitionCommand } = require("@aws-sdk/client-codepipeline"); // CommonJS import
 * const client = new CodePipelineClient(config);
 * const command = new EnableStageTransitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableStageTransitionCommandInput} for command's `input` shape.
 * @see {@link EnableStageTransitionCommandOutput} for command's `response` shape.
 * @see {@link CodePipelineClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableStageTransitionCommand extends $Command<EnableStageTransitionCommandInput, EnableStageTransitionCommandOutput, CodePipelineClientResolvedConfig> {
    readonly input: EnableStageTransitionCommandInput;
    constructor(input: EnableStageTransitionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodePipelineClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableStageTransitionCommandInput, EnableStageTransitionCommandOutput>;
    private serialize;
    private deserialize;
}
