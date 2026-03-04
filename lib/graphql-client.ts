const WORDPRESS_API_URL = (process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  '') as string

if (!WORDPRESS_API_URL) {
  throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL is not defined')
}

export async function fetchGraphQL<T>(query: string): Promise<T> {
  if (!WORDPRESS_API_URL) {
    throw new Error('NEXT_PUBLIC_WORDPRESS_API_URL is not defined')
  }

  const response = await fetch(WORDPRESS_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error(`GraphQL fetch failed: ${response.statusText}`)
  }

  const { data } = await response.json()
  return data
}
