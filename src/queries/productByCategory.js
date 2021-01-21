import { gql } from "@apollo/client";

export const PRODUCT_BY_CATEGORY_ID = gql`
  query PRODUCT_BY_CATEGORY_SLUG($id: ID!) {
    productCategory(id: $id") {
      name
      products {
        edges {
          node {
            id
            databaseId
            slug
            image {
              sourceUrl
              title
              uri
            }
            averageRating
          }
        }
      }
    }
  }
`;
