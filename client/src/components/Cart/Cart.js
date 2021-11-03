import React, { useContext, Fragment, useEffect } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import ProductContext from "../ProductsState/productContext";
const Cart = (props) => {
  const productContext = useContext(ProductContext);
  const { cart, totalPrice } = productContext;
  useEffect(() => {
    totalPrice();
  }, [cart]);
  return (
    <Fragment>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <Fragment>
          <Title name="my" title="cart" />
          <CartColumns />
          <CartList cart={cart} />
          <CartTotals />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
