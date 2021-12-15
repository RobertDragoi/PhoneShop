import React, { useContext } from "react";
import ProductContext from "../ProductsState/productContext";
export default function CartItem(props) {
  const productContext = useContext(ProductContext);
  const { removeProduct, increment, decrement } = productContext;
  const { _id, title, img, price, count, total } = props.item;

  return (
    <div className="row my-2 text-center text-capitalize">
      <div className="col-10 mx-auto col-lg-2">
        <img
          alt="img"
          src={`${process.env.PUBLIC_URL}/${img}`}
          style={{ width: "5rem", heigth: "5rem" }}
          className="img-fluid"
        ></img>
      </div>
      <div className="col-10 mx-auto col-lg-2">{title}</div>
      <div className="col-10 mx-auto col-lg-2">{price} Lei</div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            {count === 1 ? (
              <span disabled className="btn btn-black mx-1">
                -
              </span>
            ) : (
              <span
                onClick={() => decrement(_id)}
                className="btn btn-black mx-1"
              >
                -
              </span>
            )}

            <span className="btn btn-black mx-1">{count}</span>
            <span onClick={() => increment(_id)} className="btn btn-black mx-1">
              +
            </span>
          </div>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <i
            onClick={() => {
              removeProduct(_id);
            }}
            className="fas fa-trash"
          ></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <strong> {total} Lei</strong>
      </div>
    </div>
  );
}
