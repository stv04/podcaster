import { getPodcast } from '@/app/api/api';
import { DetailedIndividualPodcast, IndividualPodcast } from '../../models/individualPodcast.model';
import DetailedPodcastCard from "@/app/components/DetailedPodcastCard";

export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: {podcastId: string}
}) {
    console.log(params.podcastId);
    const podcast = await getPodcast(params.podcastId);

  return (
    <div className="grid grid-cols-3 gap-5">
        <div>
            <DetailedPodcastCard podcast={podcast} podcastId={params.podcastId}/>
        </div>
        {children}
    </div>
  )
}
