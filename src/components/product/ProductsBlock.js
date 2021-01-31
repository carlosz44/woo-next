import ProductCard from "./ProductCard";

export default function ProductsBlock({ products }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.length
        ? products.map((product) => (
            <li key={product.id} className="col-span-1 bg-white shadow">
              <ProductCard product={product} />
            </li>
          ))
        : ""}
    </ul>
  );
}
