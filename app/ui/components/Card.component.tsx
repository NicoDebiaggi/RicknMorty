import { Character } from '@/app/lib/models'
import Image from 'next/image'
import { motion } from 'framer-motion'
const CharacterCard = ({
  character,
  onClick
}: {
  character: Character
  onClick: (id: number) => void
}) => {
  return (
    <motion.div
      className='group relative block bg-black h-64'
      layoutId={character.id.toString()}
    >
      <Image
        alt=''
        src={character.image}
        width={300}
        height={300}
        className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
      />

      <div className='relative p-4 sm:p-6 lg:p-8'>
        <p className='text-sm font-medium uppercase tracking-widest inline-block p-1 rounded text-green-500 bg-slate-600/60'>
          {character.species}
        </p>

        <p className='text-xl font-bold text-white sm:text-2xl'>
          {character.name}
        </p>

        <div className='absolute top-48'>
          <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
            <button onClick={() => onClick(character.id)} className='p-2 bg-gray-800 text-white rounded-lg flex items-center'>
              View Details
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-4 h-4 ml-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 5l7 7-7 7'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const CharacterCardSkeleton = () => {
  return (
    <div className='group relative block bg-black h-64 animate-pulse'>
      <div className='absolute inset-0 h-full w-full bg-gray-700 opacity-75'></div>
      <div className='relative p-4 sm:p-6 lg:p-8'>
        <div className='h-4 w-16 mb-2 bg-gray-600 rounded'></div>
        <div className='h-6 w-32 mb-2 bg-gray-600 rounded'></div>
        <div className='mt-24'>
          <div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
            <div className='h-4 w-20 bg-gray-600 rounded'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Card = () => {}

Card.Character = CharacterCard
Card.Skeleton = CharacterCardSkeleton
