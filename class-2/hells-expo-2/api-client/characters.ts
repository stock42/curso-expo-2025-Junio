import { apiFetch } from './index'

export type Character = {
    id?: number
    ki?: string
    maxKi?: string
    gender?: string
    description?: string
    affiliation?: string
    name: string
    image: string
}

export type Links = {
    first: string
    previous: string
    next: string
    last: string
}

export type CharacterResponse = {
    items: Character[]
    links: Links
}

export async function getCharacters() {
  const response = await apiFetch('https://dragonball-api.com/api/characters')
  return response as CharacterResponse
}
