type SocialPlatform = 'instagram' | 'facebook' | 'pinterest'

interface NavLink {
  label: string
  href: string
}

interface FooterLink {
  label: string
  href: string
}

interface SocialLink {
  platform: SocialPlatform
  href: string
}

export const siteConfig: {
  nav: { links: NavLink[] }
  footer: {
    links: FooterLink[]
    copyright: string
    socialLinks: SocialLink[]
  }
} = {
  nav: {
    links: [
      { label: 'Our Breads', href: '/breads' },
      { label: 'Our Process', href: '/process' },
    ],
  },
  footer: {
    links: [
      { label: 'Our Breads', href: '/breads' },
      { label: 'Our Process', href: '/process' },
      { label: 'Privacy Policy', href: '/privacy' },
    ],
    copyright: '© 2026 Mill Creek Bakery, LLC',
    socialLinks: [
      { platform: 'instagram', href: 'https://www.instagram.com' },
      { platform: 'pinterest', href: 'https://www.pinterest.com' },
    ],
  },
}
