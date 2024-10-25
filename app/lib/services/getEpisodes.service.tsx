import Axios from 'axios'

type getEpisodesProps = {
  name: string
  episode: string
}

export const getNextEpisodes = async (url: string) => {
  try {
    const response = await Axios.get(url)
    return response.data
  } catch (error) {
    console.error('Error fetching next episodes:', error)
    throw error
  }
}

export const getEpisodes = async ({ name, episode }: getEpisodesProps) => {
  const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL

  try {
    const response = await Axios.get(`${API_URL}/episode`, {
      params: { name, episode }
    })

    return response.data
  } catch (error) {
    console.error('Error retrieving car maker data:', error)
    throw error
  }
}
