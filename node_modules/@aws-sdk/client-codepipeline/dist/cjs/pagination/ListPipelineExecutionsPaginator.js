"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginateListPipelineExecutions = void 0;
const CodePipeline_1 = require("../CodePipeline");
const CodePipelineClient_1 = require("../CodePipelineClient");
const ListPipelineExecutionsCommand_1 = require("../commands/ListPipelineExecutionsCommand");
/**
 * @private
 */
const makePagedClientRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.send(new ListPipelineExecutionsCommand_1.ListPipelineExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (client, input, ...args) => {
    // @ts-ignore
    return await client.listPipelineExecutions(input, ...args);
};
async function* paginateListPipelineExecutions(config, input, ...additionalArguments) {
    // ToDo: replace with actual type instead of typeof input.nextToken
    let token = config.startingToken || undefined;
    let hasNext = true;
    let page;
    while (hasNext) {
        input.nextToken = token;
        input["maxResults"] = config.pageSize;
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
        token = page.nextToken;
        hasNext = !!token;
    }
    // @ts-ignore
    return undefined;
}
exports.paginateListPipelineExecutions = paginateListPipelineExecutions;
//# sourceMappingURL=ListPipelineExecutionsPaginator.js.map