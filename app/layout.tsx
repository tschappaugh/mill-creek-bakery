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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-mill-background focus:text-mill-text-primary focus:font-sans focus:text-sm focus:rounded focus:border focus:border-mill-border"
        >
          Skip to main content
        </a>
        <NavWrapper />
        <div id="main-content">
          {children}
        </div>
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
