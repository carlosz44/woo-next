import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORIES_QUERY = gql`
  query {
    productCategories(where: { parent: 0 }, last: 15) {
      nodes {
        id
        slug
        name
        image {
          sourceUrl
        }
      }
    }
  }
`;

export default GET_CATEGORIES_QUERY;
