import Link from 'next/link'

export default function Home () {
  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold text-center text-gray-900 dark:text-white'>
        Rick n Morty home page
        <Link href='/dashboard/characters'>
          <p className='text-blue-500 underline'>Characters</p>
        </Link>
      </h1>
    </div>
  )
}
