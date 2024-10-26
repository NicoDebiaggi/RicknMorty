type SelectProps = {
  label: string
  setOptions: (options: { value: string; selected: boolean }[]) => void
  options: { value: string; selected: boolean }[]
}
const SingleSelectProps = ({ label, setOptions, options }: SelectProps) => {
  const handleSelect = (value: string) => {
    const newOptions = options.map(option => {
      return { ...option, selected: option.value === value }
    })
    setOptions(newOptions)
  }
  const handleReset = () => {
    const newOptions = options.map(option => {
      return { ...option, selected: false }
    })
    setOptions(newOptions)
  }

  return (
    <div className='relative'>
      <details className='group [&_summary::-webkit-details-marker]:hidden'>
        <summary className='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600 dark:text-white'>
          <span className='text-sm font-medium'>{label}</span>

          <span className='transition group-open:-rotate-180'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </summary>

        <div className='z-50 group-open:absolute md:group-open:start-0 group-open:top-auto group-open:mt-2 max-w-[250px]'>
          <div className='w-96 max-w-full rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-offset-gray-900'>
            <header className='flex items-center justify-between p-4'>
              <span className='text-sm text-gray-700 dark:text-gray-200'>
                {' '}
                {options.filter(option => option.selected).length} Selected{' '}
              </span>

              <button
                type='button'
                onClick={handleReset}
                className='text-sm text-gray-900 underline underline-offset-4 dark:text-white'
              >
                Reset
              </button>
            </header>

            <ul className='space-y-1 border-t border-gray-200 p-4 dark:border-gray-700'>
              {options.map(option => (
                <li key={option.value}>
                  <label
                    htmlFor={option.value}
                    className='inline-flex items-center gap-2'
                  >
                    <input
                      type='checkbox'
                      id={option.value}
                      checked={option.selected}
                      onChange={() => handleSelect(option.value)}
                      className='size-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900'
                    />

                    <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
                      {option.value}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </div>
  )
}

const MultiSelect = ({ label, setOptions, options }: SelectProps) => {
  const handleSelect = (value: string) => {
    const newOptions = options.map(option => {
      if (option.value === value) {
        return { ...option, selected: !option.selected }
      }
      return option
    })
    setOptions(newOptions)
  }
  const handleReset = () => {
    const newOptions = options.map(option => {
      return { ...option, selected: false }
    })
    setOptions(newOptions)
  }

  return (
    <div className='relative'>
      <details className='group [&_summary::-webkit-details-marker]:hidden'>
        <summary className='flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600 dark:text-white'>
          <span className='text-sm font-medium'>{label}</span>

          <span className='transition group-open:-rotate-180'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='currentColor'
              className='size-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 8.25l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </span>
        </summary>

        <div className='z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2'>
          <div className='w-96 rounded border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-offset-gray-900'>
            <header className='flex items-center justify-between p-4'>
              <span className='text-sm text-gray-700 dark:text-gray-200'>
                {' '}
                {options.filter(option => option.selected).length} Selected{' '}
              </span>

              <button
                type='button'
                onClick={handleReset}
                className='text-sm text-gray-900 underline underline-offset-4 dark:text-white'
              >
                Reset
              </button>
            </header>

            <ul className='space-y-1 border-t border-gray-200 p-4 dark:border-gray-700'>
              {options.map(option => (
                <li key={option.value}>
                  <label
                    htmlFor={option.value}
                    className='inline-flex items-center gap-2'
                  >
                    <input
                      type='checkbox'
                      id={option.value}
                      checked={option.selected}
                      onChange={() => handleSelect(option.value)}
                      className='size-5 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:focus:ring-offset-gray-900'
                    />

                    <span className='text-sm font-medium text-gray-700 dark:text-gray-200'>
                      {option.value}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </div>
  )
}

type SearchFilterProps = {
  label: string
  value: string
  setQuery: (query: string) => void
}

const SearchFilter = ({ label, value, setQuery }: SearchFilterProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <div className='relative'>
      <label htmlFor='search' className='sr-only'>
        {label}
      </label>

      <input
        id='search'
        type='search'
        placeholder={label}
        value={value}
        onChange={handleChange}
        className='w-full px-4 py-2 border border-gray-200 rounded text-white dark:border-gray-400 dark:bg-gray-900 dark:focus:ring-offset-gray-900'
      />
    </div>
  )
}

type FilterProps = {
  children: React.ReactNode
}

export const Filter = ({ children }: FilterProps) => {
  return <div>{children}</div>
}

Filter.SingleSelect = SingleSelectProps
Filter.MultiSelect = MultiSelect
Filter.Search = SearchFilter
