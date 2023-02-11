/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n    query ApplicationComponenet($id: ID) {\n        application(id: $id ) {\n            id\n            name\n            versions {\n                version\n                deploys {\n                    id\n                    environment {\n                        id\n                        name\n                    }\n                }\n            }\n        }\n        environments {\n            id\n            name\n            description\n            rules {\n                key {\n                    name\n                }\n                value\n            }\n            deploys {\n                id\n                createdAt\n                version {\n                    version\n                    applicationId\n                }\n            }\n        }\n    }\n": types.ApplicationComponenetDocument,
    "\n    query ApplicationPage($id: ID) {\n        application(id: $id ) {\n            id\n            name\n        }\n    }\n": types.ApplicationPageDocument,
    "\n    query Enviroment {\n        environments(p: \"\") {\n            id\n            name\n            rules {\n                key {\n                    name\n                }\n                value\n            }\n        }\n    }\n": types.EnviromentDocument,
    "\n    query ApplicationsList {\n        applications {\n            id\n            name\n            versions {\n                version\n            }\n        }\n    }\n": types.ApplicationsListDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ApplicationComponenet($id: ID) {\n        application(id: $id ) {\n            id\n            name\n            versions {\n                version\n                deploys {\n                    id\n                    environment {\n                        id\n                        name\n                    }\n                }\n            }\n        }\n        environments {\n            id\n            name\n            description\n            rules {\n                key {\n                    name\n                }\n                value\n            }\n            deploys {\n                id\n                createdAt\n                version {\n                    version\n                    applicationId\n                }\n            }\n        }\n    }\n"): (typeof documents)["\n    query ApplicationComponenet($id: ID) {\n        application(id: $id ) {\n            id\n            name\n            versions {\n                version\n                deploys {\n                    id\n                    environment {\n                        id\n                        name\n                    }\n                }\n            }\n        }\n        environments {\n            id\n            name\n            description\n            rules {\n                key {\n                    name\n                }\n                value\n            }\n            deploys {\n                id\n                createdAt\n                version {\n                    version\n                    applicationId\n                }\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ApplicationPage($id: ID) {\n        application(id: $id ) {\n            id\n            name\n        }\n    }\n"): (typeof documents)["\n    query ApplicationPage($id: ID) {\n        application(id: $id ) {\n            id\n            name\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query Enviroment {\n        environments(p: \"\") {\n            id\n            name\n            rules {\n                key {\n                    name\n                }\n                value\n            }\n        }\n    }\n"): (typeof documents)["\n    query Enviroment {\n        environments(p: \"\") {\n            id\n            name\n            rules {\n                key {\n                    name\n                }\n                value\n            }\n        }\n    }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n    query ApplicationsList {\n        applications {\n            id\n            name\n            versions {\n                version\n            }\n        }\n    }\n"): (typeof documents)["\n    query ApplicationsList {\n        applications {\n            id\n            name\n            versions {\n                version\n            }\n        }\n    }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;