import AddToCartButton from "src/components/cart/AddToCartButton";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="p-4 border-2 border-gray-600 bg-white shadow-md flex items-center flex-col space-y-4 max-w-xs mx-auto">
      <Link
        as={`/product/${product.slug}`}
        href={`/product?slug=${product.slug}-${product.databaseId}`}
      >
        <a className="text-center space-y-4">
          <Image
            src={product.image.sourceUrl}
            alt={product.name}
            width={240}
            height={240}
            className="w-full"
          />
          <h2 className="text-base font-text uppercase leading-5 text-gray-900">
            {product.name}
          </h2>
        </a>
      </Link>
      <span>{product.averageRating} de 5 estrellas</span>
      <span className="line-through">
        Precio regular: {product.regularPrice}
      </span>
      <span className="font-semibold"> Precio oferta {product.price}</span>
      <AddToCartButton product={product} />
    </div>
  );
}
