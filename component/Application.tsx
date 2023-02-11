import { useQuery } from '@apollo/client';
import { gql } from '../generated-gq/gql';
import EnvironmentItem from './env/EnvironmentItem';

const COMPONENT_QUERY = gql(/* GraphQL */ `
    query ApplicationComponenet($id: ID) {
        application(id: $id ) {
            id
            name
            versions {
                version
                deploys {
                    id
                    environment {
                        id
                        name
                    }
                }
            }
        }
        environments {
            id
            name
            description
            rules {
                key {
                    name
                }
                value
            }
            deploys {
                id
                version {
                    version
                    applicationId
                }
            }
        }
    }
`);


export type ApplicationProps = {
    applicationId: string
}

export default function Application(props: ApplicationProps) {
    const id = props.applicationId;

    const { data, loading, error } = useQuery(COMPONENT_QUERY, { variables: { id } });
    return (
        <>
            { loading && 'Loading...' }
            {
                 data
                 && data.environments
                 && data.environments.map(env => <EnvironmentItem env={env} appId={data.application?.id || ''} />)
            }
        </>
    )
}