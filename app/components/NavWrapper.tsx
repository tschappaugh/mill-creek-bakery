'use client'

import { usePathname } from 'next/navigation'
import { Nav } from '@tschappaugh/mill-creek-ui'
import { Logo } from './Logo'
import { siteConfig } from '@/lib/config/site'

export function NavWrapper() {
  const pathname = usePathname()

  const links = siteConfig.nav.links.map((link) => ({
    ...link,
    active: pathname === link.href || pathname.startsWith(link.href + '/'),
  }))

  return (
    <Nav
      logo={<Logo variant="light" />}
      links={links}
    />
  )
}
