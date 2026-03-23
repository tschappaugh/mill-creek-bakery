'use client'

import { useState, useMemo } from 'react'
import { Card, FilterBar } from '@tschappaugh/mill-creek-ui'
import { stripHtml } from '@/lib/utils'
import type { Bread } from '@/lib/types'

type SafeBread = Bread & { featuredImage: NonNullable<Bread['featuredImage']> }

interface BreadsContentProps {
  breads: SafeBread[]
  categories: string[]
}

export function BreadsContent({ breads, categories }: BreadsContentProps) {
  const [active, setActive] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const list = active
      ? breads.filter((b) =>
          b.breadCategories.nodes.some((c) => c.name === active)
        )
      : breads
    return [...list].sort((a, b) => a.title.localeCompare(b.title))
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
