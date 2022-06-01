import React from "react";
import CartItem from "./CartItem";
export const CartList = (props) => {
  return (
    <div className="container-fluid">
      {props.cart.map((item) => {
        return <CartItem key={item._id} item={item} />;
      })}
    </div>
  );
};
