import xml2json from "xml2js";

import { Channel, DetailedIndividualPodcast, IndividualPodcast } from "../models/individualPodcast.model";
import { Podcasts, Entry } from "../models/podcasts.model";

export let listaPodcast:Entry[] = [];
export async function getAll() {
    const res = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
  
    if(!res.ok) {
      console.log(res);
      throw new Error("No se pudo cargar la info");
    }
  
    const json: Podcasts = await res.json();
    listaPodcast = json.feed.entry;
    return json.feed.entry;
}

export async function getPodcast(podcastId: string) {
    if(listaPodcast.length == 0) await getAll();

    const podcast = getPodcastById(podcastId);

    
    const podcastContenido = await fetch(`https://itunes.apple.com/lookup?id=${podcastId}`);
    

    if(!podcastContenido.ok) {
        throw new Error("No se pudo cargar la info");
    }

    const podcastResult: IndividualPodcast = await podcastContenido.json();
    const res = await fetch(podcastResult.results[0].feedUrl);

    if(!res.ok) throw new Error("No se pudo cargar la info");

    const xml: string = await res.text();
    const response = await convertirXmlAJson(xml);

    if(podcast) {
        podcast.details = response;
    }
    return response;
}

export async function getEpisode(podcastId: string, episodeId: string) {
    if(listaPodcast.length === 0) await getPodcast(podcastId);

    const podcast = getPodcastById(podcastId);

    if(!podcast?.details) await getPodcast(podcastId);

    const lista = podcast!.details!;

    return lista.item.find(e => e.guid === episodeId);
}
async function convertirXmlAJson(textoXml: string):Promise<Channel> {
    const parser = new xml2json.Parser({
        explicitArray: false,
        ignoreAttrs: true
    });
    return new Promise((res, rej) => {
        parser.parseString(textoXml, (err, result: DetailedIndividualPodcast) => {
            if(err) {
                rej(err);
            } else {
                const response = result.rss.channel as unknown as Channel;
                res(response);
            }
        })
    });
}

function getPodcastById(podcastId: string) {
    return listaPodcast.find(p => p.id.attributes?.["im:id"] == podcastId);
}