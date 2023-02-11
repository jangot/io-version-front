// export type DeployEnv = {
//     id: string,
//     name: string
// }

export type Versions = {
    version: string,
    applicationId: string
}

export type Deploy = {
    id: string,
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
    // versions?: Versions[] | undefined | null,
}