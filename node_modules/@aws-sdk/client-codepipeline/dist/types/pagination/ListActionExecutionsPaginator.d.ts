import { ListActionExecutionsCommandInput, ListActionExecutionsCommandOutput } from "../commands/ListActionExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListActionExecutions(config: CodePipelinePaginationConfiguration, input: ListActionExecutionsCommandInput, ...additionalArguments: any): Paginator<ListActionExecutionsCommandOutput>;
