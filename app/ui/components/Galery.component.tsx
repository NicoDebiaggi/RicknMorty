import { Card } from './Card.component'
import { Character } from '@/app/lib/models'

interface GalleryProps {
  characters: Character[]
  isLoading: boolean
}

export const Galery = ({ characters, isLoading }: GalleryProps) => {
  return (
    <div className='md:px-8 max-w-full pt-24 pb-8 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-screen'>
      {isLoading && (
        <>
          {Array.from({ length: 20 }).map((_, index) => (
            <Card.Skeleton key={index} />
          ))}
        </>
      )}
      {!isLoading &&
        characters.map(character => (
          <Card.Character key={character.id} character={character} />
        ))}
    </div>
  )
}
