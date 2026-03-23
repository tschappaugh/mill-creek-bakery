import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { fetchGraphQL, sanitizeHtml } from '@/lib/graphql-client'
import { GET_BREADS, GET_BREAD_BY_SLUG } from '@/lib/queries'
import { BreadsData, BreadSingleData } from '@/lib/types'
import { Badge } from '@tschappaugh/mill-creek-ui'

export async function generateStaticParams() {
  const data = await fetchGraphQL<BreadsData>(GET_BREADS)
  return data.breads.nodes.map((bread) => ({ slug: bread.slug }))
}

interface BreadPageProps {
  params: Promise<{ slug: string }>
}

export default async function BreadPage({ params }: BreadPageProps) {
  const { slug } = await params

  const [listData, singleData] = await Promise.all([
    fetchGraphQL<BreadsData>(GET_BREADS),
    fetchGraphQL<BreadSingleData>(GET_BREAD_BY_SLUG, { slug }),
  ])

  if (!singleData.bread) notFound()

  const { title, content, featuredImage, breadCategories } = singleData.bread
  const category = breadCategories.nodes[0]?.name ?? 'Bread'

  const sorted = [...listData.breads.nodes].sort((a, b) =>
    a.title.localeCompare(b.title)
  )
  const currentIndex = sorted.findIndex((b) => b.slug === slug)
  const prev = sorted[(currentIndex - 1 + sorted.length) % sorted.length]
  const next = sorted[(currentIndex + 1) % sorted.length]

  return (
    <main className="bg-mill-background pt-20 lg:pt-32">
      <div className="max-w-4xl mx-auto px-8 pb-10">
        <Badge label={category} className="mb-4" />
        <h1 className="font-serif text-5xl font-light text-mill-text-primary leading-heading-xl mb-10">
          {title}
        </h1>
        <div className="relative w-full aspect-[16/9] mb-10">
        {featuredImage && (
          <div className="relative w-full aspect-[16/9] mb-10">
            <Image
              src={featuredImage.node.sourceUrl}
              alt={featuredImage.node.altText}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
        </div>
        <div
          className="font-sans text-base text-mill-text-primary leading-body [&_p]:mb-5 [&_a]:text-mill-brand-dark [&_a]:underline [&_a:hover]:text-mill-brand-darker [&_a:active]:text-mill-brand-darkest max-w-none"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
        />
      </div>

      {sorted.length > 1 && (
        <nav
          aria-label="Bread navigation"
          className="border-t border-mill-border"
        >
          <div className="max-w-4xl mx-auto px-8 py-10 flex items-center justify-between gap-6">
            <Link
              href={`/breads/${prev.slug}`}
              className="flex items-center gap-2 min-w-0 text-mill-brand-dark hover:text-mill-brand-darker active:text-mill-brand-darkest transition-colors"
            >
              <span className="font-sans text-sm font-normal leading-5 shrink-0">←</span>
              <span className="font-sans text-sm font-normal leading-5 truncate">{prev.title}</span>
            </Link>
            <Link
              href={`/breads/${next.slug}`}
              className="flex items-center gap-2 min-w-0 text-mill-brand-dark hover:text-mill-brand-darker active:text-mill-brand-darkest transition-colors"
            >
              <span className="font-sans text-sm font-normal leading-5 truncate">{next.title}</span>
              <span className="font-sans text-sm font-normal leading-5 shrink-0">→</span>
            </Link>
          </div>
        </nav>
      )}
    </main>
  )
}
