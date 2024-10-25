import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './assets/globals.css'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Rick n Morty',
  description: 'Rick n Morty is a popular animated series that follows the misadventures of an eccentric scientist and his good-hearted but fretful grandson.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <link rel='icon' href='/assets/icon.png' />
      </head>
      <body className={`${inter.className}; bg-white dark:bg-gray-900`}>
        {children}
      </body>
    </html>
  )
}
