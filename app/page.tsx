import Image from 'next/image'
import Link from 'next/link'
import { fetchGraphQL } from '@/lib/graphql-client'
import { GET_BREADS } from '@/lib/queries'
import { BreadsData } from '@/lib/types'
import {
  Hero,
  ContentHeader,
  Separator,
  Button,
} from '@tschappaugh/mill-creek-ui'
import { HomeBreadGrid } from './components/HomeBreadGrid'

export default async function Home() {
  const data = await fetchGraphQL<BreadsData>(GET_BREADS)
  const breads = data.breads.nodes

  const categories = [
    ...new Set(
      breads.flatMap((b) => b.breadCategories.nodes.map((c) => c.name))
    ),
  ].sort()

  return (
    <main className="bg-mill-background">
      <Hero
        image={
          <Image
            src="/hero.jpg"
            alt="Artisan breads at Mill Creek Bakery"
            fill
            className="object-cover"
            priority
          />
        }
        headline="Bread Worth Waking Up For"
        subhead="Handcrafted in the French tradition since 1986"
        body="Organic grains, local dairy, and natural levens — baked fresh every morning in the heart of Shawnee."
        cta={
          <Link href="/process">
            <Button background="dark">Our Breadmaking Process</Button>
          </Link>
        }
      />

      <section className="max-w-7xl mx-auto px-10 py-20">
        <ContentHeader
          level="h2"
          heading="Our Breads"
          body="From naturally leavened sourdough to buttery croissants, every loaf and pastry is made with organic ingredients sourced from local farms and producers we trust."
          className="mb-10"
        />
        <HomeBreadGrid breads={breads} categories={categories} />
      </section>

      <Separator className="mx-10" />
      <section className="max-w-7xl mx-auto px-10 py-20">
        <ContentHeader
          level="h2"
          heading="Come Find Us in Downtown Shawnee"
          body="We open early and stay open late so fresh bread fits into your day — whether you're on your morning commute or picking up something special on your way home."
          className="mb-6"
        />
        <div className="flex flex-col items-center gap-3 mb-12">
          <h3 className="font-serif text-2xl font-normal text-mill-text-primary">
            New to Mill Creek?
          </h3>
          <p className="font-sans text-base text-mill-text-primary max-w-[640px] text-center">
            Sign up for our newsletter and <a href="https://244414312.hs-sites-na2.com/free-coupon-mill-creek-bakery-newsletter" className="text-mill-brand-dark underline hover:text-mill-brand-darker" target='_blank'>get a free loaf on your next visit</a>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[640px] mx-auto font-sans text-base">
          <div>
            <p className="font-semibold text-mill-text-primary mb-3">Hours</p>
            <p className="text-mill-text-primary">Tuesday – Sunday</p>
            <p className="text-mill-text-primary mb-4">7:30am – 8:00pm</p>
            <p className="text-mill-text-secondary text-sm">
              We're closed Monday and Tuesday — bread heroes need a break too.
            </p>
          </div>
          <div>
            <p className="font-semibold text-mill-text-primary mb-3">Location</p>
            <p className="text-mill-text-primary">1234 Main Street</p>
            <p className="text-mill-text-primary">Shawnee, Kansas 66203</p>
            <p className="text-mill-text-primary mb-4">Phone: (913) 555-1234</p>
            <p className="text-mill-text-secondary text-sm">
              Also available for catering. Contact us to discuss your next event.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
