export type Versions = {
    version: string,
    applicationId: string
}

export type Deploy = {
    id: string,
    createdAt: Date,
    version?: Versions | undefined | null
}

export type EnvironmentItemRule = {
    key?: { name: string } | undefined | null,
    value: string
}


export type EnvironmentItemProps = {
    env: {
        id: string,
        name: string,
        description: string,
        rules?: EnvironmentItemRule[] | undefined | null,
        deploys?: Deploy[] | null | undefined,
    },
    appId: string
}