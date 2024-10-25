import { useAppSelector } from '@/app/lib/hooks'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import TransparentRick from '@/app/assets/Rick_Sanchez.png'

const InfoBadge = ({ text }: { text: string }) => (
  <p className='text-2xl font-medium inline-block text-white py-2 px-4 fit-content rounded-xl bg-amber-600 w-fit'>
    {text}
  </p>
)

const CharacterDetail = ({
  id,
  onClose
}: {
  id: string
  onClose: () => void
}) => {
  const character = useAppSelector(state =>
    state.characterPage.results.find(character => character.id === Number(id))
  )

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className='w-full h-screen bg-cyan-500 relative'
      >
        {
          <motion.span
            initial={{ translateX: '200%', translateY: '-50%' }}
            animate={{ translateX: '-50%', translateY: '-50%' }}
            exit={{ translateX: '200%', translateY: '-50%' }}
            transition={{
              delay: 0.35,
              duration: 0.8,
              type: 'spring'
            }}
            className='absolute top-1/2 left-1/2 text-cyan-600 text-[25vw] text-nowrap uppercase font-black'
          >
            Rick & Morty
          </motion.span>
        }
      </motion.div>
      <button
        onClick={onClose}
        className='absolute top-4 right-4 text-cyan-700 hover:text-cyan-600 p-4 z-50'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={3}
          stroke='currentColor'
          className='w-10 h-10'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
          />
        </svg>
      </button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25, delay: 0.35 }}
        className='absolute top-0 left-0 w-screen h-screen z-40 flex items-center justify-evenly overflow-hidden'
      >
        <div>
          {character && (
            <div className='flex flex-col justify-center p-4 space-y-4'>
              <h1 className='text-5xl font-extrabold text-black uppercase mb-4'>
                {character.name}
              </h1>
              <InfoBadge text={`Status: ${character.status}`} />
              <InfoBadge text={`Species: ${character.species}`} />
              <InfoBadge text={`Gender: ${character.gender}`} />
              <InfoBadge text={`Origin: ${character.origin.name}`} />
            </div>
          )}
        </div>
        {/* This information and image is a placeholder because the api dont provide that much info */}
        <div className='border-l-4 pl-16 border-zinc-800 relative hidden md:block'>
          <Image
            src={TransparentRick}
            alt='Rick'
            width={348}
            height={489}
            objectFit='cover'
          />
          <div className='top-0 left-0 absolute w-12 border-t-4 border-zinc-800' />
          <div className='bottom-0 left-0 absolute w-48 border-b-4 border-zinc-800' />
          <div className='text-zinc-800 text-3xl font-normal absolute top-[50%] left-0 transform -rotate-90 -translate-x-32'>
            Height - 180cm
          </div>
          <div className='text-zinc-800 text-3xl font-normal absolute -bottom-10 left-0 transform'>
            Weight - 70kg
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export const Detail = () => {}

Detail.Character = CharacterDetail
