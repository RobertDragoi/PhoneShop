import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import ProductContext from "./ProductsState/productContext";
import UserContext from "./UserState/userContext";
const Details = (props) => {
  const productContext = useContext(ProductContext);
  const userContext = useContext(UserContext);
  const { detail, addProduct } = productContext;
  const { user } = userContext;
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm">
          <h2>{detail.title}</h2>
          <img
            src={`${process.env.PUBLIC_URL}/${detail.img}`}
            alt="product"
            className="card-img-top"
          ></img>
        </div>
        <div className="col-sm">
          <div className="d-flex flex-column">
            <div style={{ padding: 40 }}>
              <div className="p-2 bg-info">Name: {detail.title}</div>
              <div className="p-2 bg-primary">Company: {detail.company}</div>
              <div className="p-2 bg-warning">Price: ${detail.price}</div>
              <div className="p-2 bg-info">
                Description: {detail.description}
              </div>
              {user ? (
                <ButtonContainer onClick={() => addProduct()}>
                  Add to cart
                </ButtonContainer>
              ) : (
                <Link to="/api/login">
                  <ButtonContainer>Log in </ButtonContainer>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
