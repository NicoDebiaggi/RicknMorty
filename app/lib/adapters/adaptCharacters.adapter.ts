import { Character, CharacterPageState, CharacterResObject } from '@/app/lib/models'

export const adaptCharactersFirstPage = (
  data: CharacterResObject
): CharacterPageState => {
  return {
    info: {
      count: data.info.count,
      pages: data.info.pages,
      next: data.info.next,
      prev: data.info.prev,
      current: 1
    },
    results: data.results.map(character => ({
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

export const adaptCharactersNextPage = (
  data: CharacterResObject,
  page: number
): CharacterPageState => {
  return {
    info: {
      count: data.info.count,
      pages: data.info.pages,
      next: data.info.next,
      prev: data.info.prev,
      current: page
    },
    results: data.results.map(character => ({
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

export const adaptCharacter = (
  data: Character
): Character => {
  return {
    id: data.id,
    name: data.name,
    status: data.status,
    species: data.species,
    type: data.type,
    gender: data.gender,
    origin: {
      name: data.origin.name,
      url: data.origin.url
    },
    location: {
      name: data.location.name,
      url: data.location.url
    },
    image: data.image,
    episode: data.episode,
    url: data.url,
    created: data.created
  }
}
