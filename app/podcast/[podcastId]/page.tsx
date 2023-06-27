export default function({params}: {params: {podcastId: string}}) {
    return <h1>Hello podcast, {params.podcastId}</h1>
}