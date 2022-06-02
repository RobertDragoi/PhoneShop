import React from "react";
export const OrderItem = ({ product, index, prefix }) => {
  return (
    <div
      key={`${prefix}_${index}`}
      className="row my-2 text-center text-capitalize"
    >
      <div className="col-10 mx-auto col-lg-2">
        <img
          alt="img"
          src={`${process.env.PUBLIC_URL}/${product.product.img}`}
          style={{
            width: "5rem",
            heigth: "5rem",
          }}
          className="img-fluid"
        ></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">{product.product.title}</div>

      <div className="col-10 mx-auto col-lg-2">
        <strong> Bucăți : {product.count} </strong>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong> Total produs : {product.total} Lei</strong>
      </div>
    </div>
  );
};
