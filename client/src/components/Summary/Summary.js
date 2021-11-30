import React, { useContext } from "react";
import OrderContext from "../OrderState/orderContext";
import "./Summary.scss";
const Summary = () => {
  const orderContext = useContext(OrderContext);
  const { order } = orderContext;
  return (
    <div>
      {order.products.map((product, index) => (
        <div
          key={`summary_${index}`}
          className="row my-2 text-center text-capitalize"
        >
          <div className="col-10 mx-auto col-lg-2">
            <img
              alt="img"
              src={product.product.img}
              style={{ width: "5rem", heigth: "5rem" }}
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
      ))}
      <div className="summary-title">
        <h1 className="summary-title-left">Comanda a fost plasată cu</h1>
        <h1 className="summary-title-right">succes!</h1>
      </div>
    </div>
  );
};

export default Summary;
