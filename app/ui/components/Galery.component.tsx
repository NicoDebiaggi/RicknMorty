import { motion } from 'framer-motion'
import { Card } from './Card.component'
import { Character } from '@/app/lib/models'
import { useState } from 'react'
import { Detail } from './Detail.component'

interface GalleryProps {
  characters: Character[]
  isLoading: boolean
}

export const Galery = ({ characters, isLoading }: GalleryProps) => {
  const [index, setIndex] = useState<number | false>(false)

  return (
    <>
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
            <Card.Character
              key={character.id}
              character={character}
              onClick={id => setIndex(id)}
            />
          ))}
      </div>

      {index !== false && (
        <motion.div
          className='absolute top-0 left-0 w-screen h-screen z-50 overflow-hidden'
          transition={{ duration: 0.5 }}
          layoutId={index.toString()}
        >
          <Detail.Character
            id={index.toString()}
            onClose={() => setIndex(false)}
          />
        </motion.div>
      )}
    </>
  )
}
