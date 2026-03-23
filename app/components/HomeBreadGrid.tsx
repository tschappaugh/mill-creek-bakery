'use client'

import { useState, useMemo } from 'react'
import { Card, FilterBar } from '@tschappaugh/mill-creek-ui'
import { stripHtml } from '@/lib/utils'
import type { Bread } from '@/lib/types'

const HOME_LIMIT = 6

type SafeBread = Bread & { featuredImage: NonNullable<Bread['featuredImage']> }

interface HomeBreadGridProps {
  breads: SafeBread[]
  categories: string[]
}

export function HomeBreadGrid({ breads, categories }: HomeBreadGridProps) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const list = active
      ? breads.filter((b) =>
          b.breadCategories.nodes.some((c) => c.name === active)
        )
      : breads
    const sorted = [...list].sort((a, b) => a.title.localeCompare(b.title))
    return active ? sorted : sorted.slice(0, HOME_LIMIT)
  }, [breads, active])

  return (
    <>
      <FilterBar
        categories={categories}
        active={active}
        onChange={setActive}
        className="mb-10"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((bread) => (
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
    </>
  )
}
