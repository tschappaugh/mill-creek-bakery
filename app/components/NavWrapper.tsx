'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Nav, Button, ArrowUpRight } from '@tschappaugh/mill-creek-ui'
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
      logo={
        <Link href="/">
          <Logo variant="light" />
        </Link>
      }
      logoPrimary={
        <Link href="/">
          <Logo variant="light" width={237} height={64} />
        </Link>
      }
      links={links}
      cta={
        <a href="https://244414312.hs-sites-na2.com/free-coupon-mill-creek-bakery-newsletter" target="_blank" rel="noopener noreferrer">
          <Button background="light" icon={<ArrowUpRight size={20} />}>
            Get a Free Loaf
          </Button>
        </a>
      }
    />
  )
}
