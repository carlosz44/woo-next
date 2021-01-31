import client from "@components/ApolloClient";
// import ProductsBlock from "@components/product/ProductsBlock";
import Image from "next/image";

export default function IndexPage({ products }) {
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
      {/* <ProductsBlock products={products} /> */}
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
