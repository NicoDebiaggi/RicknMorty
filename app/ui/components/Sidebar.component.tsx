import Link from 'next/link'

const SidebarButton = ({
  children,
  label,
  url,
  active = false
}: {
  children: React.ReactNode
  label: string
  url: string
  active?: boolean
}) => {
  return (
    <li>
      <Link
        href={url}
        className={`group relative flex justify-center rounded px-2 py-4 hover:bg-gray-700 ${
          active ? 'bg-gray-600' : ''
        }`}
      >
        {children}

        <span className='invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-700 px-2 py-1.5 text-xs font-medium text-white group-hover:visible'>
          {label}
        </span>
      </Link>
    </li>
  )
}

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex h-screen w-16 flex-col justify-between border-e bg-white dark:bg-slate-800 dark:border-black z-20'>
      <div>
        <div className='px-2 pt-3'>
          <ul className='space-y-4 pt-4'>{children}</ul>
        </div>
      </div>
    </div>
  )
}

Sidebar.Button = SidebarButton
