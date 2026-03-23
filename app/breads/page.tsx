import { fetchGraphQL } from '@/lib/graphql-client'
import { GET_BREADS } from '@/lib/queries'
import { BreadsData, Bread } from '@/lib/types'
import { ContentHeader } from '@tschappaugh/mill-creek-ui'
import { BreadsContent } from './BreadsContent'

type SafeBread = Bread & { featuredImage: NonNullable<Bread['featuredImage']> }

export default async function BreadsPage() {
  const data = await fetchGraphQL<BreadsData>(GET_BREADS)

  const safeBreads = data.breads.nodes.filter((bread): bread is SafeBread => {
    if (bread.featuredImage === null) {
      console.warn(`[Mill Creek] "${bread.title}" is missing a featured image and will not be displayed.`)
      return false
    }
    return true
  })

  const categories = [
    ...new Set(
      safeBreads.flatMap((b) => b.breadCategories.nodes.map((c) => c.name))
    ),
  ].sort()

  return (
    <main className="bg-mill-background pt-16 lg:pt-24">
      <div className="max-w-7xl mx-auto px-10 py-16">
        <ContentHeader
          level="h1"
          heading="Our Breads"
          body="Handcrafted from organic grains and natural levains, baked fresh every morning in Shawnee, Kansas."
          className="mb-12"
        />
        <BreadsContent breads={safeBreads} categories={categories} />
      </div>
    </main>
  )
}
