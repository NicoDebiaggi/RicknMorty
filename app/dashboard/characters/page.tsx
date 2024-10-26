'use client'
import { Filter, Galery, Paginator, Snackbar, showSnackbar } from '@/app/ui/components'
import { useAppDispatch, useAppSelector } from '@/app/lib/hooks/useRedux.hook'
import { setStatus, setName, setSpecies } from '@/app/lib/redux/slices'
import { useGetCharacters } from '@/app/lib/hooks'
import { useEffect, useRef, useState } from 'react'

export default function CharactersPage () {
  const { fetchPage, isLoading, error } = useGetCharacters()
  const dispatch = useAppDispatch()
  const { status, name, species } = useAppSelector(
    state => state.characterFilters
  )
  const { characterPage } = useAppSelector(state => state)
  const [showFilters, setShowFilters] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handleFilterChange = (callback: () => void) => {
    scrollContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    callback()
  }

  const handlePageChange = (page: 'prev' | 'next') => {
    !isLoading &&
      fetchPage(
        page === 'next' ? characterPage.info.next : characterPage.info.prev
      )
  }

  const handleError = (error: string) => {
    showSnackbar(error)
  }

  useEffect(() => {
    error && handleError(error)
  }, [error])

  return (
    <div className='w-full h-screen overflow-y-auto'>
      <div className='container mx-auto px-4 py-16 w-full h-screen flex flex-col items-center'>
        <div className='fixed top-0 py-4 w-full max-w-[calc(100%-4rem)] flex flex-col items-center justify-center z-10 bg-white dark:bg-gray-900'>
          <h1 className='text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white'>
            Rick and Morty characters
          </h1>

          <div className='block sm:hidden'>
            <button
              className='mt-2 p-2 bg-gray-800 text-white rounded-lg'
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </button>
            <Paginator
              page={characterPage.info.current}
              styles='sm:hidden ml-4'
              totalPages={characterPage.info.pages}
              goToPrevPage={() => handlePageChange('prev')}
              goToNextPage={() => handlePageChange('next')}
              hasPrevPage={!characterPage.info.prev}
              hasNextPage={!characterPage.info.next}
            />
          </div>

          <div
            className={`${
              showFilters ? 'flex' : 'hidden'
            } sm:flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-8 sm:justify-center sm:items-center ${
              isLoading ? 'pointer-events-none opacity-50' : ''
            }`}
          >
            <Filter.SingleSelect
              label='Status'
              options={status}
              setOptions={options => {
                handleFilterChange(() => dispatch(setStatus(options)))
              }}
            />
            <Filter.Search
              label='Seach by Name'
              value={name}
              setQuery={query => {
                handleFilterChange(() => dispatch(setName(query)))
              }}
            />
            <Filter.Search
              label='Search by Species'
              value={species}
              setQuery={query =>
                handleFilterChange(() => dispatch(setSpecies(query)))
              }
            />
            <Paginator
              page={characterPage.info.current}
              styles='hidden sm:inline-flex'
              totalPages={characterPage.info.pages}
              goToPrevPage={() => handlePageChange('prev')}
              goToNextPage={() => handlePageChange('next')}
              hasPrevPage={!characterPage.info.prev}
              hasNextPage={!characterPage.info.next}
            />
          </div>
        </div>
        <Galery characters={characterPage.results} isLoading={isLoading} />
      </div>
      <Snackbar />
    </div>
  )
}
