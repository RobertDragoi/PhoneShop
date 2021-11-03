import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../ProductsState/productContext";
import "./Product.scss";
const Product = (props) => {
  const productContext = useContext(ProductContext);
  const { productDetail } = productContext;
  const { id, title, img, price } = props;

  return (
    <div className="product-container">
      <Link to={`/details/${id}`}>
        <img
          className="product-container-image"
          src={img}
          alt="product"
          onClick={() => productDetail(id)}
        ></img>
      </Link>

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
