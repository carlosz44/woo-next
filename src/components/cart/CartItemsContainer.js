import Link from "next/link";
import { useContext } from "react";
import { removeItemFromCart } from "src/functions";
import { AppContext } from "../context/AppContext";
import CartItem from "./CartItem";

export default function CartItemsContainer() {
  const [cart, setCart] = useContext(AppContext);

  const handleRemoveProductClick = (event, databaseId, cartKey) => {
    // event.stopPropagation();
    // if (products.length) {
    //   // By passing the newQty to 0 in updateCart Mutation, it will remove the item.
    //   const newQty = 0;
    //   const updatedItems = getUpdatedItems(products, newQty, cartKey);

    //   updateCart({
    //     variables: {
    //       input: {
    //         clientMutationId: v4(),
    //         items: updatedItems,
    //       },
    //     },
    //   });
    // }

    const updatedCart = removeItemFromCart(databaseId);
    setCart(updatedCart);
  };

  return (
    <div className="cart product-cart-container container mx-auto my-32 px-4 xl:px-0">
      {cart ? (
        <div className="woo-next-cart-wrapper container">
          <div className="cart-header grid grid-cols-2 gap-4">
            <h1 className="text-2xl mb-5 uppercase">Carrito</h1>
            {/*Clear entire cart*/}
            {/* <div className="clear-cart text-right">
              <button
                className="px-4 py-1 bg-gray-500 text-white rounded-sm w-auto"
                onClick={(event) => handleClearCart(event)}
                disabled={clearCartProcessing}
              >
                <span className="woo-next-cart">Clear Cart</span>
                <i className="fa fa-arrow-alt-right" />
              </button>
              {clearCartProcessing ? <p>Clearing...</p> : ""}
              {updateCartProcessing ? <p>Updating...</p> : null}
            </div> */}
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5">
            <table className="cart-products table-auto col-span-3 mb-5">
              <thead className="text-left">
                <tr className="woo-next-cart-head-container">
                  <th className="woo-next-cart-heading-el" scope="col" />
                  <th className="woo-next-cart-heading-el" scope="col" />
                  <th className="woo-next-cart-heading-el" scope="col">
                    Producto
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Precio
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Cantidad
                  </th>
                  <th className="woo-next-cart-heading-el" scope="col">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.products.length &&
                  cart.products.map((item) => (
                    <CartItem
                      key={item.databaseId}
                      item={item}
                      // updateCartProcessing={updateCartProcessing}
                      products={cart.products}
                      handleRemoveProductClick={handleRemoveProductClick}
                      // updateCart={updateCart}
                      setCart={setCart}
                    />
                  ))}
              </tbody>
            </table>

            {/*Cart Total*/}
            <div className="row woo-next-cart-total-container border p-5 bg-gray-200">
              <div className="">
                {/* <h2 className="text-2xl">Cart Total</h2> */}
                <table className="mb-5">
                  <tbody>
                    <tr className="flex flex-col">
                      <td className="woo-next-cart-element-total text-2xl font-normal">
                        Subtotal
                      </td>
                      <td className="woo-next-cart-element-amt text-2xl font-bold">
                        S/{" "}
                        {"string" !== typeof cart.totalProductsPrice
                          ? cart.totalProductsPrice.toFixed(2)
                          : cart.totalProductsPrice}
                      </td>
                    </tr>
                    {/* <tr className="table-light">
										<td className="woo-next-cart-element-total">Total</td>
										<td className="woo-next-cart-element-amt">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</td>
									</tr> */}
                  </tbody>
                </table>
                <Link href="/checkout">
                  <button className="bg-main text-white px-5 py-3 rounded-sm w-auto xl:w-full">
                    <span className="woo-next-cart-checkout-txt">
                      Iniciar Checkout
                    </span>
                    <i className="fas fa-long-arrow-alt-right" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Display Errors if any */}
          {/* {requestError ? (
            <div className="row woo-next-cart-total-container mt-5">
              {" "}
              {requestError}{" "}
            </div>
          ) : (
            ""
          )} */}
        </div>
      ) : (
        <div className="container mx-auto my-32 px-4 xl:px-0">
          <h2 className="text-2xl mb-5">No tienes artículos en el carrito</h2>
          <Link href="/">
            <button className="bg-main text-white px-5 py-3 rounded-sm">
              <span className="woo-next-cart-checkout-txt">Ir al inicio</span>
              <i className="fas fa-long-arrow-alt-right" />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
