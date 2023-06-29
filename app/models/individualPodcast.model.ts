export interface IndividualPodcast {
    resultCount: number
    results: ResultIndividualPodcast[]
  }
  
  export interface ResultIndividualPodcast {
    wrapperType: string
    kind: string
    artistId: number
    collectionId: number
    trackId: number
    artistName: string
    collectionName: string
    trackName: string
    collectionCensoredName: string
    trackCensoredName: string
    artistViewUrl: string
    collectionViewUrl: string
    feedUrl: string
    trackViewUrl: string
    artworkUrl30: string
    artworkUrl60: string
    artworkUrl100: string
    collectionPrice: number
    trackPrice: number
    collectionHdPrice: number
    releaseDate: string
    collectionExplicitness: string
    trackExplicitness: string
    trackCount: number
    trackTimeMillis: number
    country: string
    currency: string
    primaryGenreName: string
    contentAdvisoryRating: string
    artworkUrl600: string
    genreIds: string[]
    genres: string[]
  }

  export interface DetailedIndividualPodcast {
    rss: Rss
  }
  
  export interface Rss {
    channel: Channel
  }
  
  export interface Channel {
    "atom:link": string[]
    generator: string
    title: string
    description: string
    copyright: string
    language: string
    pubDate: string
    lastBuildDate: string
    image: Image
    link: string
    "itunes:type": string
    "itunes:summary": string
    "itunes:author": string
    "itunes:explicit": string
    "itunes:image": string
    "itunes:new-feed-url": string
    "itunes:owner": ItunesOwner
    "itunes:category": string
    item: Item[]
  }
  
  export interface Image {
    link: string
    title: string
    url: string
  }
  
  export interface ItunesOwner {
    "itunes:name": string
    "itunes:email": string
  }
  
  export interface Item {
    guid: string
    title: string
    description: string
    pubDate: string
    author: string
    link: string
    "content:encoded": string
    enclosure: string
    "itunes:title": string
    "itunes:author": string
    "itunes:duration": string
    "itunes:summary": string
    "itunes:subtitle": string
    "itunes:explicit": string
    "itunes:episodeType": string
    "itunes:keywords"?: string
    "itunes:image"?: string
  }
  
  