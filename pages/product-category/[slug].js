import { isEmpty } from "lodash";
import PRODUCT_BY_CATEGORY_ID from "@queries/productByCategory";
import GET_CATEGORIES_QUERY from "@queries/getCategories";
import client from "@components/ApolloClient";
import ProductsBlock from "@components/product/ProductsBlock";

export default function Category({ categoryName, products }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      {categoryName ? (
        <h3 className="text-2xl mb-5 uppercase">{categoryName}</h3>
      ) : (
        ""
      )}
      {products?.length ? (
        <ProductsBlock products={products} />
      ) : (
        <p>No existen productos en esta categoría</p>
      )}
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
      products: data?.productCategory?.products?.edges || "nada maestro",
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_CATEGORIES_QUERY,
  });

  const pathsData = [];

  data?.productCategories?.nodes &&
    data?.productCategories?.nodes.map((productCategory) => {
      if (!isEmpty(productCategory?.slug)) {
        pathsData.push({ params: { slug: productCategory?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
