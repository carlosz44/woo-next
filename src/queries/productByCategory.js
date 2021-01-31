import { gql } from "@apollo/client";

/**
 * GraphQL products by category slug query.
 */
const PRODUCT_BY_CATEGORY_ID = gql`
  query PRODUCT_BY_CATEGORY_SLUG($slug: ID!) {
    productCategory(id: $slug, idType: SLUG) {
      name
      products {
        edges {
          node {
            id
            averageRating
            slug
            description
            name
            databaseId
            sku
            image {
              uri
              title
              sourceUrl
            }
            ... on SimpleProduct {
              price
              regularPrice
            }
          }
        }
      }
    }
  }
`;

export default PRODUCT_BY_CATEGORY_ID;
