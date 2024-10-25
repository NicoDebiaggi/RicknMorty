import { getCharacters, getNextCharacters } from '@/app/lib/services'
import { adaptCharactersFirstPage, adaptCharactersNextPage } from '@/app/lib/adapters'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './useRedux.hook'
import { setResults } from '@/app/lib/redux/slices'
import { useDebounce } from './useDebounce.hook'

export const useGetCharacters = () => {
  const { name, species, status } = useAppSelector(
    state => state.characterFilters
  )
  const characterPage = useAppSelector(state => state.characterPage)
  const dispatch = useAppDispatch()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchCharacters = async (
    name: string,
    species: string,
    status: {
      value: string
      selected: boolean
    }[]
  ) => {
    const selectedStatus = status.filter(s => s.selected).map(s => s.value)[0]
    setIsLoading(true)
    setError(null)
    try {
      const response = await getCharacters({
        name,
        species,
        status: selectedStatus
      })
      const adaptedCharacterPage = adaptCharactersFirstPage(response)
      
      if (adaptedCharacterPage !== characterPage) {
        dispatch(setResults(adaptedCharacterPage))
      }
    } catch (error) {
      console.error('Error fetching characters:', error)
      setError('Error fetching characters')
    } finally {
      setIsLoading(false)
    }
  }

  const fetchPage = async (nextPageUrl: string | null) => {
    if (!nextPageUrl) return
    setIsLoading(true)
    setError(null)
    try {
      const response = await getNextCharacters(nextPageUrl)
      const urlParams = new URLSearchParams(nextPageUrl.split('?')[1]);
      const page = urlParams.get('page');
      const adaptedCharacterPage = adaptCharactersNextPage(response, page ? parseInt(page) : 1)
      if (adaptedCharacterPage !== characterPage) {
        dispatch(setResults(adaptedCharacterPage))
      }
    } catch (error) {
      console.error('Error fetching next page:', error)
    } finally {
      setIsLoading(false)
    }
  }

  // Fetch characters on mount and whenever the filters change
  useDebounce(() => fetchCharacters(name, species, status), 500, [name, species, status]) 

  return { fetchPage, isLoading, error }
}
