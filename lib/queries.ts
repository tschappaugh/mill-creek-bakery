export const GET_BREADS = `
  {
    breads {
      nodes {
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        breadCategories {
          nodes {
            name
          }
        }
      }
    }
  }
`
export const GET_BREAD_BY_SLUG = `
  query GetBreadBySlug($slug: ID!) {
    bread(id: $slug, idType: SLUG) {
      title
      content
      excerpt
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      breadCategories {
        nodes {
          name
        }
      }
    }
  }
`
