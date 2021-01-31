import { useState, useContext } from "react";
import { addFirstProduct, getFormattedCart, updateCart } from "@src/functions";
import { AppContext } from "@context/AppContext";
import Link from "next/link";

export default function AddToCartButton({ product }) {
  // const productQryInput = {
  //   clientMutationId: v4(), // Generate a unique id.
  //   productId: product.productId,
  // };

  const [cart, setCart] = useContext(AppContext);
  const [showViewCart, setShowViewCart] = useState(false);
  // const [requestError, setRequestError] = useState(null);

  /**
   * Handles adding items to the cart.
   *
   * @return {void}
   */
  const handleAddToCart = () => {
    // If component is rendered client side.
    if (process.browser) {
      let existingCart = localStorage.getItem("woo-next-cart");

      // If cart has item(s) already, update existing or add new item.
      if (existingCart) {
        existingCart = JSON.parse(existingCart);

        const qtyToBeAdded = 1;

        const updatedCart = updateCart(existingCart, product, qtyToBeAdded);

        setCart(updatedCart);
      } else {
        const newCart = addFirstProduct(product);
        setCart(newCart);
      }

      // Show View Cart Button
      setShowViewCart(true);
    }
  };

  return (
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="w-0 flex-1 flex">
          <button
            onClick={handleAddToCart}
            className="py-3 text-md text-white font-bold bg-main relative -mr-px w-0 flex-1 inline-flex items-center justify-center border border-transparent"
          >
            Añadir al carrito
          </button>
        </div>
        {showViewCart ? (
          <Link href="/cart">
            <div className="-ml-px w-0 flex-1 flex">
              <button className="py-3 text-md text-white font-bold bg-main relative w-0  flex-1 inline-flex items-center justify-center border-l">
                Ver carrito
              </button>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
