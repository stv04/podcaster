import { Podcasts } from "../models/podcasts.model";

export async function getAll() {
    const res = await fetch("https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json");
  
    if(!res.ok) {
      console.log(res);
      throw new Error("No se pudo cargar la info");
    }
  
    const json: Podcasts = await res.json();
    return json.feed.entry;
  }

export async function getPodcast() {}

export async function getEpisode() {}