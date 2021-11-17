import React from "react";
import "./Cart.scss";
export default function EmptyCart() {
  return (
    <div className="container">
      <div className="row">
        <div className="cart-title">
          <h1 className="cart-title-left">Empty</h1>
          <h1 className="cart-title-right">Cart</h1>
        </div>
      </div>
    </div>
  );
}
