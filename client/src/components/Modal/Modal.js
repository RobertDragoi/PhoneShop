import React, { useContext } from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";
import ProductContext from "../ProductsState/productContext";
import OrderContext from "../OrderState/orderContext";
const Modal = (props) => {
  const productContext = useContext(ProductContext);
  const orderContext = useContext(OrderContext);
  const { clearCart } = productContext;
  const { order } = orderContext;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default Modal;
