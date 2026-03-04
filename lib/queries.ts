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
