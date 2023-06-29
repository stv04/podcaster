import Link from "next/link";
import { Entry } from "../models/podcasts.model";
import Image from "next/image";

export default function BasicPodcastCard({podcast}: {podcast: Entry}) {
    return <div className="max-w-sm rounded overflow-hidden shadow-md hover:shadow-lg my-3">
        <Link href={`/podcast/${podcast.id.attributes?.["im:id"]}`}>
            <Image className="mx-auto my-2 rounded-full" width={150} height={150} src={podcast["im:image"][2].label} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{podcast.title.label}</div>
                <p className="text-gray-700 text-base">
                {podcast["im:artist"].label}
                </p>
            </div>
        </Link>
    </div>
}