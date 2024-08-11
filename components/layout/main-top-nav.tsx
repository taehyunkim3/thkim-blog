'use client'
import { usePathname, useRouter } from 'next/navigation'

import GitHubIcon from '@/assets/svg/github.svg'
import { GITHUB_URL } from '@/consts/url'

import ThemeChanger from '../button/theme-changer'
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

      <div className="flex items-center gap-3">
        <ThemeChanger />
        <Button
          onClick={() => router.push(GITHUB_URL)}
          variant="ghost"
          size="icon"
        >
          <GitHubIcon fill="gray" width={30} height={30} />
        </Button>
      </div>
    </nav>
  )
}

export default MainTopNav
