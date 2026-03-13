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
  featuredImage: FeaturedImage
  breadCategories: {
    nodes: BreadCategory[]
  }
}

export interface BreadsData {
  breads: {
    nodes: Bread[]
  }
}

export interface BreadSingle {
  title: string
  content: string
  excerpt: string
  slug: string
  featuredImage: FeaturedImage
  breadCategories: {
    nodes: BreadCategory[]
  }
}

export interface BreadSingleData {
  bread: BreadSingle
}
