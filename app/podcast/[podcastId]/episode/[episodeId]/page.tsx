import { getEpisode } from "@/app/api/api"

export default async function({params}: {params: {episodeId: string, podcastId: string}}) {
    const episode = await getEpisode(params.podcastId, params.episodeId);
    return <div  className="rounded shadow-md p-3 overflow-auto my-4 col-span-2">
        <h1>{episode?.title}</h1>

        <div dangerouslySetInnerHTML={{__html: episode?.description ?? ""}}></div>

        <audio controls className="w-100 mt-4"></audio>
    </div>
    
    // <h1>Hello EPISODE, {episode?.title}
    //     Descripción <div dangerouslySetInnerHTML={{__html: episode?.description ?? ""}}></div>
    // </h1>
}