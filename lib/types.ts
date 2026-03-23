export interface BreadCategory {
  name: string
}

export interface FeaturedImage {
  node: {
    sourceUrl: string
    altText: string
  }
}

export interface Bread {
  title: string
  excerpt: string
  slug: string
  featuredImage: FeaturedImage | null
  breadCategories: {
    nodes: BreadCategory[]
  }
}

export interface BreadsData {
  breads: {
    nodes: Bread[]
  }
}

export interface BreadSingle extends Bread {
  content: string
}

export interface BreadSingleData {
  bread: BreadSingle | null
}

export type SafeBread = Bread & { featuredImage: NonNullable<Bread['featuredImage']> }
