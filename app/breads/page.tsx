import { fetchGraphQL } from '@/lib/graphql-client'
import { GET_BREADS } from '@/lib/queries'
import { BreadsData } from '@/lib/types'
import { filterSafeBreads } from '@/lib/utils'
import { ContentHeader } from '@tschappaugh/mill-creek-ui'
import { BreadsContent } from './BreadsContent'

export const revalidate = 3600

export default async function BreadsPage() {
  const data = await fetchGraphQL<BreadsData>(GET_BREADS)
  const safeBreads = filterSafeBreads(data.breads.nodes)
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
