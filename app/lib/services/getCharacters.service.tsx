import Axios from 'axios'

type getCharactersProps = {
  name: string
  status: string
  species: string
}

export const getNextCharacters = async (url: string) => {
  try {
    const response = await Axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching next characters:', error)
    throw error
  }
}

export const getCharacter = async (id: string) => {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  try {
    const response = await Axios.get(`${API_URL}/character/${id}`)
    return response.data
  } catch (error) {
    console.error('Error retrieving character data:', error)
    throw error
  }
}

export const getCharacters = async ({ name, status, species }: getCharactersProps) => {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  try {
    const response = await Axios.get(`${API_URL}/character`, {
      params: {
        name,
        status,
        species
      }
    })

    return response.data
  } catch (error) {
    console.error('Error retrieving car maker data:', error)
    throw error
  }
}
