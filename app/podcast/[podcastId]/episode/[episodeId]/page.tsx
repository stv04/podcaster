export default function({params}: {params: {episodeId: string}}) {
    return <h1>Hello EPISODE, {params.episodeId}</h1>
}