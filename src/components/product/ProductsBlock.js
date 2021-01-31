import ProductCard from "./ProductCard";

export default function ProductsBlock({ products }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {undefined !== products && products?.length
        ? products.map((edge) => (
            <li key={edge?.node?.id} className="col-span-1 bg-white shadow">
              <ProductCard product={edge.node} />
            </li>
          ))
        : ""}
    </ul>
  );
}
