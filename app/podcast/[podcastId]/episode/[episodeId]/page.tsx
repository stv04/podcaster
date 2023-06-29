import { getEpisode } from "@/app/api/api"
import styles from "./episode.module.css";

export default async function Episode({params}: {params: {episodeId: string, podcastId: string}}) {
    const episode = await getEpisode(params.podcastId, params.episodeId);
    return <div  className="rounded shadow-md p-3 overflow-auto my-4 col-span-2">
        <h1 className="font-bold text-2xl mb-3">{episode?.title}</h1>

        <div className={styles.description} dangerouslySetInnerHTML={{__html: episode?.description ?? ""}}></div>

        <audio controls className="w-100 mt-4"></audio>
    </div>
}