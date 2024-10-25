export type Episode = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export type EpisodeResObject = {
  info: {
    count: number
    pages: number
    next: string | null
    prev: string | null
  }
  results: Episode[]
}

export type EpisodePageState = EpisodeResObject & {
  info: {
    current: number
  }
}