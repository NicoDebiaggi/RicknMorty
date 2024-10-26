'use client'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { motion } from 'framer-motion'
import { Detail } from '@/app/ui/components'

function Modal ({ id }: { id: string }) {
  const router = useRouter()

  function onDismiss () {
    router.back()
  }

  return createPortal(
    <motion.div
      className='absolute top-0 left-0 w-screen h-screen z-50 overflow-hidden'
      transition={{ duration: 0.5 }}
      layoutId={id}
    >
      <Detail.Character id={id} onClose={onDismiss} />
    </motion.div>,
    document.getElementById('modal-root')!
  )
}

export default function characterDetail ({
  params: { id: characterId }
}: {
  params: { id: string }
}) {
  return <Modal id={characterId} />
}
