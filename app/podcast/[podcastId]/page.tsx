import { getPodcast } from "@/app/api/api";
import ListaCapitulos from "@/app/components/ListaCapitulos";


export default async function Podcast({params}: {params: {podcastId: string}}) {
    const podcast = await getPodcast(params.podcastId);

    return <>
        <ListaCapitulos capitulos={podcast.item} podcastId={params.podcastId}/>
    </>

}