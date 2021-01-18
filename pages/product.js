import client from "../components/ApolloClient";
import { withRouter } from "next/router";
import { gql } from "@apollo/client";

// export default Product = withRouter(props) => {
//   const { product } = props;
//   return (
//     <>
//       {product ? (
//         <div>
//           <div>
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//           </div>
//         </div>
//       ) : (
//         ""
//       )}
//     </>
//   );
// }

const Product = ({ props }) => {
  const { product } = props;
  console.log(props);
  return (
    <>
      {product ? (
        <div>
          <div>
            <h2>{product.name}</h2>
            <p>{product.sku}</p>
            <p>{product.description}</p>
          </div>
        </div>
      ) : (
        ""
      )}
      HOL:A
    </>
  );
};
// TODO: solucionar
Product.getInitialProps = async function (context) {
  let {
    query: { slug },
  } = context;

  const id = slug ? parseInt(slug.split("-").pop()) : context.query.id;

  const PRODUCT_QUERY = gql`
    query Product($id: ID!) {
      product(id: $id, idType: DATABASE_ID) {
        databaseId
        slug
        name
        sku
        averageRating
        shortDescription
        description
        ... on SimpleProduct {
          id
          name
          regularPrice
          price
        }
      }
    }
  `;

  const { data } = await client.query({
    query: PRODUCT_QUERY,
    variables: { id },
  });

  return {
    props: {
      product: data?.product || {},
    },
    revalidate: 1,
  };
};

export default withRouter(Product);
