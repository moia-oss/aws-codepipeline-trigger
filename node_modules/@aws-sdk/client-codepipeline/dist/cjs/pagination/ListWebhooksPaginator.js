"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListWebhooks = void 0;
const CodePipeline_1 = require("../CodePipeline");
const CodePipelineClient_1 = require("../CodePipelineClient");
const ListWebhooksCommand_1 = require("../commands/ListWebhooksCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListWebhooksCommand_1.ListWebhooksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listWebhooks(input, ...args);
};
async function* paginateListWebhooks(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.NextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.NextToken = token;
        input["MaxResults"] = config.pageSize;
        if (config.client instanceof CodePipeline_1.CodePipeline) {
            page = await makePagedRequest(config.client, input, ...additionalArguments);
        }
        else if (config.client instanceof CodePipelineClient_1.CodePipelineClient) {
            page = await makePagedClientRequest(config.client, input, ...additionalArguments);
        }
        else {
            throw new Error("Invalid client, expected CodePipeline | CodePipelineClient");
        }
        yield page;
        token = page.NextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListWebhooks = paginateListWebhooks;
//# sourceMappingURL=ListWebhooksPaginator.js.map