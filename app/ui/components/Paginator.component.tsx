interface PaginatorProps {
  page: number
  goToPrevPage: () => void
  goToNextPage: () => void
  totalPages: number
  hasNextPage?: boolean
  hasPrevPage?: boolean
}

export const Paginator = ({
  page,
  goToPrevPage,
  goToNextPage,
  totalPages,
  hasPrevPage = true,
  hasNextPage = true
}: PaginatorProps) => {
  return (
    <div className='inline-flex items-center justify-center gap-3'>
      <div
        onClick={goToPrevPage}
        className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white cursor-pointer ${
          hasPrevPage ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <span className='sr-only'>Prev Page</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='size-3'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </div>

      <p className='text-xs text-gray-900 dark:text-white'>
        {page}
        <span className='mx-0.25'>/</span>
        {totalPages}
      </p>

      <div
        onClick={goToNextPage}
        className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 dark:border-gray-800 dark:bg-gray-900 dark:text-white cursor-pointer ${
          hasNextPage ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        <span className='sr-only'>Next Page</span>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='size-3'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  )
}
