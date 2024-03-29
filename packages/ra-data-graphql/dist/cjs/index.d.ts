import { DataProvider } from 'ra-core';
import { ApolloClient, ApolloClientOptions, ApolloQueryResult, MutationOptions, WatchQueryOptions, QueryOptions, OperationVariables } from '@apollo/client';
import { IntrospectionOptions, IntrospectionResult } from './introspection';
export * from './introspection';
export declare const QUERY_TYPES: string[];
export declare const MUTATION_TYPES: string[];
export declare const ALL_TYPES: string[];
export declare type BuildQueryResult = QueryOptions<OperationVariables, any> & {
    parseResponse: (response: ApolloQueryResult<any>) => any;
};
export declare type BuildQuery = (name: string, resource: string, params: any) => BuildQueryResult;
export declare type BuildQueryFactory = (introspectionResults: IntrospectionResult) => BuildQuery;
export declare type GetQueryOptions = (resource: string, raFetchMethod: string) => Partial<QueryOptions<OperationVariables, any>>;
export declare type GetMutationOptions = (resource: string, raFetchMethod: string) => Partial<MutationOptions<OperationVariables, any>>;
export declare type GetWatchQueryOptions = (resource: string, raFetchMethod: string) => Partial<WatchQueryOptions<OperationVariables, any>>;
export declare type Options = {
    client?: ApolloClient<unknown>;
    clientOptions?: Partial<ApolloClientOptions<unknown>>;
    introspection?: false | Partial<IntrospectionOptions>;
    override?: {
        [key: string]: (params: any) => BuildQueryResult;
    };
    buildQuery: BuildQueryFactory;
    query?: GetQueryOptions;
    mutation?: GetMutationOptions;
    watchQuery?: GetWatchQueryOptions;
};
declare const _default: (options: Options) => Promise<DataProvider>;
export default _default;
//# sourceMappingURL=index.d.ts.map