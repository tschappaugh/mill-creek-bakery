import { fetchGraphQL } from '@/lib/graphql-client'
import { GET_BREADS } from '@/lib/queries'
import { BreadsData, Bread } from '@/lib/types'
import { stripHtml } from '@/lib/utils'
import { Card } from '@/components/Card'

export default async function BreadsPage() {
  const data = await fetchGraphQL<BreadsData>(GET_BREADS)
  const breads = data.breads.nodes

  return (
    <main className="min-h-screen bg-mill-background">
      <div className="max-w-7xl mx-auto px-20 py-16">
        <h1 className="font-serif text-5xl font-light text-mill-text-primary leading-heading-xl mb-12">
          Our Breads
        </h1>
        <div className="grid grid-cols-3 gap-6">
          {breads.map((bread: Bread) => (
            <Card
              key={bread.slug}
              title={bread.title}
              excerpt={stripHtml(bread.excerpt)}
              tag={bread.breadCategories.nodes[0]?.name ?? 'Bread'}
              image={{
                src: bread.featuredImage.node.sourceUrl,
                alt: bread.featuredImage.node.altText,
              }}
              href={`/breads/${bread.slug}`}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
