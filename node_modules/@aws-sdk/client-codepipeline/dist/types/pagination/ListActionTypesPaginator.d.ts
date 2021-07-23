import { ListActionTypesCommandInput, ListActionTypesCommandOutput } from "../commands/ListActionTypesCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";
export declare function paginateListActionTypes(config: CodePipelinePaginationConfiguration, input: ListActionTypesCommandInput, ...additionalArguments: any): Paginator<ListActionTypesCommandOutput>;
