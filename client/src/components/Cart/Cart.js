import React, { useContext, Fragment, useEffect } from "react";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import CartTotals from "./CartTotals";
import ProductContext from "../ProductsState/productContext";
import "./Cart.scss";
const Cart = () => {
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
          <div className="cart-title">
            <h1 className="cart-title-left">Coșul</h1>
            <h1 className="cart-title-right">Meu</h1>
          </div>
          <CartColumns />
          <CartList cart={cart} />
          <CartTotals />
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
