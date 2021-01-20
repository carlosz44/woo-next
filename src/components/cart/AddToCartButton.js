import { useState, useContext } from "react";
import { addFirstProduct, getFormattedCart, updateCart } from "../../functions";
import { AppContext } from "../context/AppContext";
import Link from "next/link";

export default function AddToCartButton({ product }) {
  const [cart, setCart] = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  // console.log(product);
  const handleAddToCart = () => {
    // If component is rendered client side.
    if (process.browser) {
      let existingCart = localStorage.getItem("woo-next-cart");

      // If cart has item(s) already, update existing or add new item.
      if (existingCart) {
        existingCart = JSON.parse(existingCart);

        const qtyToBeAdded = 1;

        const updatedCart = updateCart(existingCart, product, qtyToBeAdded);

        // setCart(updatedCart);
      } else {
        const newCart = addFirstProduct(product);
        setCart(newCart);
      }

      // Show View Cart Button
      setShowViewCart(true);
    }
  };

  return (
    <>
      <button
        onClick={handleAddToCart}
        className="px-6 py-3 text-md text-white font-bold bg-main"
      >
        Añadir al carrito
      </button>
      {showViewCart ? (
        <Link href="/cart">
          <button className="px-3 py-1 rounded-sm text-sm border-solid border border-current inline-block hover:bg-purple-600 hover:text-white hover:border-purple-600">
            Ver carrito
          </button>
        </Link>
      ) : (
        ""
      )}
    </>
  );
}
