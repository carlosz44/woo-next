import client from "components/ApolloClient";
import Image from "next/image";
import { gql } from "@apollo/client";

const PRODUCTS_QUERY = gql`
  query {
    products(first: 20) {
      nodes {
        id
        averageRating
        slug
        description
        name
        image {
          uri
          srcSet
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
`;

export default function IndexPage(props) {
  const { products } = props;

  console.log(props);
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />

      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Listado de productos
      </h2>
      <ul>
        {products.length
          ? products.map((product) => <li key={product.id}>{product.name}</li>)
          : ""}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: PRODUCTS_QUERY,
  });
  return {
    props: {
      products: data?.products?.nodes ? data.products.nodes : [],
    },
  };
}
