import GET_CATEGORIES_QUERY from "../src/queries/getCategories";
import client from "../src/components/ApolloClient";
import CategoriesBlock from "../src/components/category/CategoriesBlock";

export default function Categories({ productCategories }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
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
