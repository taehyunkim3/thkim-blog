'use client'
import { usePathname, useRouter } from 'next/navigation'

import GitHubIcon from '@/assets/svg/github.svg'

import { Button } from '../ui/button'
const NAV_ITEMS = [
  //   { name: 'Home', href: '/' },
  { name: 'Posts', href: '/posts' },
  { name: 'About', href: '/about' },
]

const MainTopNav = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleClick = (url: string) => {
    if (url === pathname) return
    router.push(url)
  }

  return (
    <nav className="fixed top-0 flex h-14 w-full items-center justify-between border-b px-8">
      <div className="flex h-full items-center justify-center">
        {NAV_ITEMS.map((navItem) => (
          <Button
            key={navItem.name}
            className="mx-4"
            onClick={() => handleClick(navItem.href)}
            disabled={navItem.href === pathname}
          >
            {navItem.name}
          </Button>
        ))}
      </div>

      <div>
        <Button
          onClick={() => router.push('/login')}
          variant="ghost"
          size="icon"
        >
          <GitHubIcon fill="gray" />
        </Button>
      </div>
    </nav>
  )
}

export default MainTopNav
