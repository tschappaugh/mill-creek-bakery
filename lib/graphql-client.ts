import DOMPurify from 'isomorphic-dompurify'

const WORDPRESS_API_URL = (process.env.WORDPRESS_API_URL || '') as string

if (!WORDPRESS_API_URL) {
  throw new Error('WORDPRESS_API_URL is not defined')
}

interface GraphQLResponse<T> {
  data: T
  errors?: Array<{ message: string }>
}

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(WORDPRESS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error(`GraphQL fetch failed: ${response.statusText}`)
  }

  const result: GraphQLResponse<T> = await response.json()

  if (result.errors?.length) {
    throw new Error(`GraphQL error: ${result.errors[0].message}`)
  }

  return result.data
}

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html)
}
