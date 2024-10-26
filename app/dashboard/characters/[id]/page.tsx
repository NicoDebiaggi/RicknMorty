'use client'
import { motion } from 'framer-motion'
import { Detail } from '@/app/ui/components'
import { useRouter } from 'next/navigation'

export default function CharacterDetail ({
  params: { id: characterId }
}: {
  params: { id: string }
}) {
  const router = useRouter()

  return (
    <motion.div
      className='absolute top-0 left-0 w-screen h-screen z-50 overflow-hidden'
      transition={{ duration: 0.5 }}
      layoutId={characterId}
    >
      <Detail.Character
        id={characterId}
        onClose={() => router.push('/dashboard/characters')}
      />
    </motion.div>
  )
}
