import Image from 'next/image'
import Link from 'next/link'
import RickAndMortyLogo from '@/app/assets/RicknMorty_logo.png'
import GiantHead from '@/app/assets/giant-face.png'

export default function Home () {
  return (
    <section className='relative w-full h-screen overflow-hidden'>
      <div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]' />
      <div className='flex flex-col items-center h-full text-center text-white gap-4 md:gap-12 mx-4'>
        <Image
          src={RickAndMortyLogo}
          width={500}
          alt='Rick and Morty'
          className='z-[-1] w-2/3 mt-2 mb-16 md:mb-0'
        />
        <h1 className='text-4xl md:text-6xl font-extrabold uppercase'>
          Welcome to the Multiverse!
        </h1>
        <p className='text-l md:text-xl'>
          Discover characters, explore episodes, and dive into the craziness of
          Rick and Morty.
        </p>
        <Link
          href='/dashboard/characters'
          className='px-8 py-4 mt-16 md:mt-0 bg-green-500 text-white font-semibold rounded hover:bg-green-400 transition'
        >
          Meet the Characters
        </Link>
      </div>
      <Image
        src={GiantHead}
        alt='Giant Rick Head'
        className='z-[-1] opacity-20 p-4 object-contain object-center h-full w-full absolute inset-0'
      />
    </section>
  )
}
