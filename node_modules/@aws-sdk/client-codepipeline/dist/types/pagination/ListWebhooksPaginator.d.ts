import { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "../commands/ListWebhooksCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListWebhooks(config: CodePipelinePaginationConfiguration, input: ListWebhooksCommandInput, ...additionalArguments: any): Paginator<ListWebhooksCommandOutput>;
