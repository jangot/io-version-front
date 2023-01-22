export type LoaderProps = {
    inProgress: boolean
}

export default function Loading(props: LoaderProps) {
    return props.inProgress ? <>{'Loading...'}</> : null;
}