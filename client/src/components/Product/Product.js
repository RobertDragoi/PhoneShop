import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.scss";
const Product = (props) => {
  const history = useHistory();
  const { id, title, img, price } = props;

  return (
    <div
      onClick={() => {
        history.push(`/details/${id}`);
      }}
      className="product-container"
    >
      <img className="product-container-image" src={img} alt="product"></img>

      <div className="product-container-footer">
        <div className="product-container-footer-text">
          <p>{title}</p>
        </div>
        <div className="product-container-footer-price">
          <h5>
            {price}
            <span className="mr-1"> Lei</span>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Product;
