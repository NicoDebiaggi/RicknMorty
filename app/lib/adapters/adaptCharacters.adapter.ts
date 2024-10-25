import { CharacterPageState, CharacterResObject } from '@/app/lib/models'

export const adaptCharactersFirstPage = (data: CharacterResObject): CharacterPageState => {
  return {
    info: {
      count: data.info.count,
      pages: data.info.pages,
      next: data.info.next,
      prev: data.info.prev,
      current: 1
    },
    results: data.results.map((character) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: {
        name: character.origin.name,
        url: character.origin.url
      },
      location: {
        name: character.location.name,
        url: character.location.url
      },
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created
    }))
  }
}

export const adaptCharactersNextPage = (data: CharacterResObject, page: number): CharacterPageState => {
  return {
    info: {
      count: data.info.count,
      pages: data.info.pages,
      next: data.info.next,
      prev: data.info.prev,
      current: page
    },
    results: data.results.map((character) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: {
        name: character.origin.name,
        url: character.origin.url
      },
      location: {
        name: character.location.name,
        url: character.location.url
      },
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created
    }))
  }
}
