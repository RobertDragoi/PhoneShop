import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsOperation } from "../../state/operations/productOperations";
import { setAlertOperation } from "../../state/operations/alertOperations";
import Product from "../Product/Product";
import "./ProductList.scss";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, error, loading } = useSelector((state) => state.product);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProductsOperation());
    }
    if (error) {
      dispatch(setAlertOperation(error, "danger"));
    }
  }, []);
  return (
    <React.Fragment>
      <div className="container">
        <div className="product-list-title">
          <h1 className="product-list-title-left">Produse</h1>
        </div>
        {loading ? (
          <div className="d-flex align-items-center justify-content-between mt-5">
            <div
              className="spinner-border"
              style={{ width: "12rem", height: "12rem" }}
              role="status"
            >
              <span className="sr-only">Se încarcă..</span>
            </div>
          </div>
        ) : (
          <div className="row justify-content-between">
            {products.map((product) => {
              return (
                <Product
                  key={product._id}
                  id={product._id}
                  title={product.title}
                  img={`${process.env.PUBLIC_URL}/${product.img}`}
                  price={product.price}
                ></Product>
              );
            })}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProductList;
