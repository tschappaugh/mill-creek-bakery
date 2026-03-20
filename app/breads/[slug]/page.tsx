import { notFound } from 'next/navigation'
import Image from 'next/image'
import { fetchGraphQL } from '@/lib/graphql-client'
import { GET_BREADS, GET_BREAD_BY_SLUG } from '@/lib/queries'
import { BreadsData, BreadSingleData } from '@/lib/types'

export async function generateStaticParams() {
  const data = await fetchGraphQL<BreadsData>(GET_BREADS)
  return data.breads.nodes.map((bread) => ({ slug: bread.slug }))
}

interface BreadPageProps {
  params: Promise<{ slug: string }>
}

export default async function BreadPage({ params }: BreadPageProps) {
  const { slug } = await params
  const data = await fetchGraphQL<BreadSingleData>(GET_BREAD_BY_SLUG, {
    slug,
  })

  if (!data.bread) notFound()

  const { title, content, featuredImage, breadCategories } = data.bread
  const category = breadCategories.nodes[0]?.name ?? 'Bread'

  return (
    <main className="min-h-screen bg-mill-background pt-16 lg:pt-24">
      <div className="max-w-4xl mx-auto px-8 pb-16">
        <p className="font-sans text-sm uppercase tracking-widest text-mill-text-secondary mb-4">
          {category}
        </p>
        <h1 className="font-serif text-5xl font-light text-mill-text-primary leading-heading-xl mb-10">
          {title}
        </h1>
        <div className="relative w-full aspect-[16/9] mb-10">
          <Image
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div
          className="font-sans text-base text-mill-text-primary leading-body prose prose-neutral max-w-none"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </main>
  )
}
