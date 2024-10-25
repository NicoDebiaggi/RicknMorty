import { useEffect } from 'react'

export const useDebounce = (callback: () => void, delay: number, deps: any[]) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback()
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [...deps, delay]) // Re-run effect if any dependency or delay changes
}
