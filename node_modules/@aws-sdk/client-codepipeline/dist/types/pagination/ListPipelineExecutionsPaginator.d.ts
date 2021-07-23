import { ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput } from "../commands/ListPipelineExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelineExecutions(config: CodePipelinePaginationConfiguration, input: ListPipelineExecutionsCommandInput, ...additionalArguments: any): Paginator<ListPipelineExecutionsCommandOutput>;
