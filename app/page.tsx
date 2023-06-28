import { getAll } from './api/api';
import ContainerPodcasts from './components/containerPodcasts';


export default async function Home() {
  const podcats = await getAll();

  return <ContainerPodcasts  pod={podcats}/>
}
