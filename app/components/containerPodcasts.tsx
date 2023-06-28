'use client'
import { Entry } from "../models/podcasts.model";
import Image from "next/image";
import PrincipalFilter from "./PrincipalFilter";
import BasicPodcastCard from "./BasicPodcastCard";
import { useState } from "react";

export default function ContainerPodcasts({pod}: {pod: Entry[]}) {
    const [podcasts, setPodcasts] = useState<Entry[]>(pod);
    

    return <div className='container mx-auto'>
    <PrincipalFilter listaPrincipal={pod} listaFiltrada={podcasts} setPodcasts={setPodcasts}/>
    <div className='grid grid-cols-4 gap-8'>
      {podcasts.map((p) => <BasicPodcastCard podcast={p} key={p.id.attributes?.["im:id"]}/>)}
    </div>
  </div>
}