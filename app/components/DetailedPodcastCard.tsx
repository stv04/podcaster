import Link from "next/link";
import { listaPodcast } from "../api/api";
import { Channel, DetailedIndividualPodcast, ResultIndividualPodcast } from "../models/individualPodcast.model";
import { Entry } from "../models/podcasts.model";
import Image from "next/image";

export default function BasicPodcastCard({podcast, podcastId}: {podcast: Channel; podcastId: string}) {
    const imagen = listaPodcast.find(p => p.id.attributes?.["im:id"] == podcastId)?.["im:image"][2].label || "";
    return <Link href={`/podcast/${podcastId}`} className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg my-3">
        <Image className="mx-auto my-2" width={200} height={300} src={imagen} alt="Imagen" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{podcast.title}</div>
            <p className="text-gray-700 text-base">
            by {podcast["itunes:author"]}
            </p>
        </div>
        <hr />

        <div className="px-3 py-4">
            <p><b>Description:</b></p>
            <p className="text-gray-700 text-base">
            {podcast["itunes:summary"]}
            </p>
        </div>

    </Link>
}