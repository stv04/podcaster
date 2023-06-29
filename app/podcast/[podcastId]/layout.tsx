import { getPodcast } from '@/app/api/api';
import { DetailedIndividualPodcast, IndividualPodcast } from '../../models/individualPodcast.model';
import DetailedPodcastCard from "@/app/components/DetailedPodcastCard";

export default async function RootLayout({
  children, params
}: {
  children: React.ReactNode,
  params: {podcastId: string}
}) {
  const podcast = await getPodcast(params.podcastId);

  return (
    <div className="grid lg:grid-cols-3 gap-2">
        <div className='p-3'>
          <DetailedPodcastCard podcast={podcast} podcastId={params.podcastId}/>
        </div>
        {children}
    </div>
  )
}
