export type ApplicationProps = {
    application: {
        name: string
    }
}

export default function Application(props: ApplicationProps) {
    return (
        <>
            <h2>{ props.application.name }</h2>
            <div>
                <pre>
                    { JSON.stringify(props.application, null, 4) }
                </pre>
            </div>
        </>
    )
}