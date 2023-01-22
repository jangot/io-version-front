/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Application = {
  __typename?: 'Application';
  id: Scalars['ID'];
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
  versions?: Maybe<Array<Version>>;
};

export type ApplicationInput = {
  id?: InputMaybe<Scalars['ID']>;
  isActive: Scalars['Boolean'];
  name: Scalars['String'];
};

export type Deploy = {
  __typename?: 'Deploy';
  environment?: Maybe<Environment>;
  environmentId: Scalars['String'];
  id: Scalars['ID'];
  version?: Maybe<Version>;
  versionId: Scalars['String'];
};

export type DeployInput = {
  environmentId: Scalars['String'];
  versionId: Scalars['String'];
};

export type Environment = {
  __typename?: 'Environment';
  deploys?: Maybe<Array<Deploy>>;
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  orderIndex: Scalars['Int'];
  rules?: Maybe<Array<Rule>>;
};

export type EnvironmentInput = {
  description: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  orderIndex: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  application?: Maybe<Application>;
  deploy?: Maybe<Deploy>;
  environment?: Maybe<Environment>;
  rule?: Maybe<Rule>;
  ruleKey?: Maybe<RuleKey>;
  status?: Maybe<Status>;
  version?: Maybe<Version>;
};


export type MutationApplicationArgs = {
  application?: InputMaybe<ApplicationInput>;
};


export type MutationDeployArgs = {
  deploy?: InputMaybe<DeployInput>;
};


export type MutationEnvironmentArgs = {
  environment?: InputMaybe<EnvironmentInput>;
};


export type MutationRuleArgs = {
  rule?: InputMaybe<RuleInput>;
};


export type MutationRuleKeyArgs = {
  ruleKey?: InputMaybe<RuleKeyInput>;
};


export type MutationVersionArgs = {
  version?: InputMaybe<VersionInput>;
};

export type Query = {
  __typename?: 'Query';
  application?: Maybe<Application>;
  applications?: Maybe<Array<Application>>;
  deploys?: Maybe<Array<Deploy>>;
  environment?: Maybe<Environment>;
  environments?: Maybe<Array<Environment>>;
  ruleKeys?: Maybe<Array<RuleKey>>;
  rules?: Maybe<Array<Rule>>;
  status?: Maybe<Status>;
  versions?: Maybe<Array<Version>>;
};


export type QueryApplicationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryApplicationsArgs = {
  p?: InputMaybe<Scalars['String']>;
};


export type QueryDeploysArgs = {
  p?: InputMaybe<Scalars['String']>;
};


export type QueryEnvironmentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryEnvironmentsArgs = {
  p?: InputMaybe<Scalars['String']>;
};


export type QueryRuleKeysArgs = {
  p?: InputMaybe<Scalars['String']>;
};


export type QueryRulesArgs = {
  p?: InputMaybe<Scalars['String']>;
};


export type QueryVersionsArgs = {
  p?: InputMaybe<Scalars['String']>;
};

export type Rule = {
  __typename?: 'Rule';
  environment?: Maybe<Environment>;
  environmentId: Scalars['String'];
  id: Scalars['ID'];
  key?: Maybe<RuleKey>;
  keyId: Scalars['String'];
  value: Scalars['String'];
};

export type RuleInput = {
  environmentId: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  keyId: Scalars['String'];
  value: Scalars['String'];
};

export type RuleKey = {
  __typename?: 'RuleKey';
  id: Scalars['ID'];
  name: Scalars['String'];
  specificity: Scalars['Int'];
};

export type RuleKeyInput = {
  id?: InputMaybe<Scalars['ID']>;
  name: Scalars['String'];
  specificity: Scalars['Int'];
};

export type Status = {
  __typename?: 'Status';
  ready?: Maybe<Scalars['Boolean']>;
};

export type Version = {
  __typename?: 'Version';
  application?: Maybe<Application>;
  applicationId: Scalars['String'];
  deploys?: Maybe<Array<Deploy>>;
  id: Scalars['ID'];
  version: Scalars['String'];
};

export type VersionInput = {
  applicationId: Scalars['String'];
  id?: InputMaybe<Scalars['ID']>;
  version: Scalars['String'];
};

export type ApplicationItemQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']>;
}>;


export type ApplicationItemQuery = { __typename?: 'Query', application?: { __typename?: 'Application', name: string, versions?: Array<{ __typename?: 'Version', version: string }> | null } | null };

export type ApplicationsListQueryVariables = Exact<{ [key: string]: never; }>;


export type ApplicationsListQuery = { __typename?: 'Query', applications?: Array<{ __typename?: 'Application', id: string, name: string, versions?: Array<{ __typename?: 'Version', version: string }> | null }> | null };


export const ApplicationItemDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApplicationItem"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"versions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]} as unknown as DocumentNode<ApplicationItemQuery, ApplicationItemQueryVariables>;
export const ApplicationsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApplicationsList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"applications"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"versions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]} as unknown as DocumentNode<ApplicationsListQuery, ApplicationsListQueryVariables>;