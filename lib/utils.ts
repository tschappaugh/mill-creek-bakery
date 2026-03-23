import type { Bread, SafeBread } from './types'

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

export function filterSafeBreads(breads: Bread[]): SafeBread[] {
  return breads.filter((bread): bread is SafeBread => {
    if (bread.featuredImage === null) {
      console.warn(`[Mill Creek] "${bread.title}" is missing a featured image and will not be displayed.`)
      return false
    }
    return true
  })
}
