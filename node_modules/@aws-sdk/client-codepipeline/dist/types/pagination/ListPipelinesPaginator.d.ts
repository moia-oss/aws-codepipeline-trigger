import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "../commands/ListPipelinesCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListPipelines(config: CodePipelinePaginationConfiguration, input: ListPipelinesCommandInput, ...additionalArguments: any): Paginator<ListPipelinesCommandOutput>;
