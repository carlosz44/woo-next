import PRODUCT_BY_CATEGORY_ID from "../src/queries/productByCategory";
import client from "../../src/components/ApolloClient";
import ProductCard from "../src/components/ui/ProductCard";

export default function Category({ categoryName, products }) {
  return (
    <div className="product-categories-container container mx-auto my-32 px-4 xl:px-0">
      {categoryName ? (
        <h3 className="text-2xl mb-5 uppercase">{categoryName}</h3>
      ) : (
        ""
      )}
      <div className="product-categories grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {undefined !== products && products?.length
          ? products.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))
          : ""}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { data } = await client.query({
    query: PRODUCT_BY_CATEGORY_ID,
    variables: { slug },
  });

  return {
    props: {
      categoryName: data?.productCategory?.name || "",
      products: data?.productCategory?.products?.nodes || [],
    },
    revalidate: 1,
  };
}
