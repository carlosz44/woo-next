import GET_CATEGORIES_QUERY from "../src/queries/getCategories";
import client from "../src/components/ApolloClient";
import CategoriesBlock from "../src/components/category/CategoriesBlock";

export default function Categories({ productCategories }) {
  return (
    <div className="categories product-categories-container container mx-auto my-32 px-4 xl:px-0">
      <h2 className="text-2xl mb-5 uppercase">Categorías</h2>
      <CategoriesBlock productCategories={productCategories} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_CATEGORIES_QUERY,
  });

  return {
    props: {
      productCategories: data?.productCategories?.nodes || [],
    },
    revalidate: 1,
  };
}
