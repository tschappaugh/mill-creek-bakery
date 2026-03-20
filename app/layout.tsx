import type { Metadata } from 'next'
import Link from 'next/link'
import { Cormorant_Garamond, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { NavWrapper } from './components/NavWrapper'
import { Footer } from '@tschappaugh/mill-creek-ui'
import { Logo } from './components/Logo'
import { siteConfig } from '@/lib/config/site'

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500'],
})

const sourceSans3 = Source_Sans_3({
  variable: '--font-source-sans',
  subsets: ['latin'],
  weight: ['400', '600'],
})

export const metadata: Metadata = {
  title: 'Mill Creek Bakery',
  description: 'Artisan breads baked fresh every morning in Shawnee, Kansas.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${sourceSans3.variable} antialiased`}
      >
        <NavWrapper />
        {children}
        <Footer
          logo={
            <Link href="/">
              <Logo variant="dark" width={237} height={64} />
            </Link>
          }
          links={siteConfig.footer.links}
          copyright={siteConfig.footer.copyright}
          socialLinks={siteConfig.footer.socialLinks}
        />
      </body>
    </html>
  )
}
