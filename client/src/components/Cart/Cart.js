import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartPriceOperation } from "../../state/operations/productOperations";
import { clearOrderOperation } from "../../state/operations/orderOperations";
import {CartColumns} from "./CartColumns";
import EmptyCart from "./EmptyCart";
import {CartList} from "./CartList";
import {CartTotals} from "./CartTotals";
import "./Cart.scss";
const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(clearOrderOperation());
    dispatch(cartPriceOperation());
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
