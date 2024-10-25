'use client'
import StoreProvider from '@/app/lib/StoreProvider'
import { Sidebar } from '@/app/ui/components'
import { usePathname } from 'next/navigation'

export default function DashboardLayout ({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className='flex h-screen w-screen justify-between'>
      <Sidebar>
        <Sidebar.Button label='Home' url='/'>
          <svg
            className='fill-white w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            id='Layer_1'
            data-name='Layer 1'
            viewBox='0 0 24 24'
            width='512'
            height='512'
          >
            <path d='M22,5.724V2c0-.552-.447-1-1-1s-1,.448-1,1v2.366L14.797,.855c-1.699-1.146-3.895-1.146-5.594,0L2.203,5.579c-1.379,.931-2.203,2.48-2.203,4.145v9.276c0,2.757,2.243,5,5,5h3c.553,0,1-.448,1-1V15c0-.551,.448-1,1-1h4c.552,0,1,.449,1,1v8c0,.552,.447,1,1,1h3c2.757,0,5-2.243,5-5V9.724c0-1.581-.744-3.058-2-4Zm0,13.276c0,1.654-1.346,3-3,3h-2v-7c0-1.654-1.346-3-3-3h-4c-1.654,0-3,1.346-3,3v7h-2c-1.654,0-3-1.346-3-3V9.724c0-.999,.494-1.929,1.322-2.487L10.322,2.513c1.02-.688,2.336-.688,3.355,0l7,4.724c.828,.558,1.322,1.488,1.322,2.487v9.276Z' />
          </svg>
        </Sidebar.Button>
        <Sidebar.Button
          active={pathname === '/dashboard/characters'}
          label='Characters'
          url='/dashboard/characters'
        >
          <svg
            className='fill-white w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            id='Layer_1'
            data-name='Layer 1'
            viewBox='0 0 24 24'
            width='512'
            height='512'
          >
            <path d='m7.393,18.801c-.535,1.336-1.81,2.199-3.25,2.199H1.5c-.829,0-1.5-.672-1.5-1.5s.671-1.5,1.5-1.5h2.643c.206,0,.388-.123.464-.314.308-.769,1.18-1.144,1.95-.835.769.308,1.143,1.181.835,1.95Zm5.607-13.801c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM21.077,0c-1.532,0-2.789,4.841-2.913,11h-2.164c-.177,0-.337-.091-.428-.242l-1.843-3.062c-.629-1.046-1.778-1.695-3-1.695h-3.993c-1.334,0-2.534.741-3.13,1.935l-1.447,2.895c-.37.741-.07,1.642.671,2.013.741.37,1.642.07,2.013-.671l1.447-2.895c.085-.171.256-.276.447-.276h1.268l-1.265,3.084c-.646,1.573-.07,3.375,1.428,4.322l4.081,2.322c.156.089.252.255.252.435v3.337c0,.828.671,1.5,1.5,1.5s1.5-.672,1.5-1.5v-3.337c0-1.256-.678-2.422-1.769-3.042l-2.614-1.486,1.332-3.247.552.917c.629,1.046,1.778,1.695,2.999,1.695h3c.552,0,1,.448,1,1s-.448,1-1,1h-.676c.402,4.658,1.481,8,2.753,8,1.614,0,2.923-5.373,2.923-12S22.691,0,21.077,0Z' />
          </svg>
        </Sidebar.Button>
      </Sidebar>
      <StoreProvider>
        <section className='flex-1 overflow-hidden'>{children}</section>
      </StoreProvider>
    </div>
  )
}
