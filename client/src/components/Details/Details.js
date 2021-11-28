import React, { useContext, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import ProductContext from "../ProductsState/productContext";
import UserContext from "../UserState/userContext";
import "./Details.scss";
const Details = () => {
  const productContext = useContext(ProductContext);
  const userContext = useContext(UserContext);
  const { cart, detail, loading, getProductDetail, addProduct } =
    productContext;
  const { isAuthenticated } = userContext;
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProductDetail = async (id) => {
      await getProductDetail(id);
    };
    fetchProductDetail(id);
  }, [id]);
  return (
    <div className="container">
      {loading ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Se încarcă..</span>
          </div>
        </div>
      ) : (
        <div className="row">
          <div>
            <div className="col-2"></div>
            <div className="col-8">
              <div className="details-container">
                <div className="details-container-row">
                  <img
                    src={`${process.env.PUBLIC_URL}/${detail?.img}`}
                    alt="product"
                    className="details-container-image"
                  ></img>
                </div>
                <div className="details-container-row">
                  <h1 className="details-container-row-title">
                    {detail?.title}
                  </h1>
                  <p className="details-container-row-text">
                    {detail?.company}
                  </p>
                  <p className="details-container-row-text">
                    {detail?.description}
                  </p>
                  <p className="details-container-row-text">
                    {detail?.price} Lei
                  </p>
                  {!isAuthenticated ? (
                    <Link className="details-container-button" to="/login">
                      Logare
                    </Link>
                  ) : cart.some((e) => e._id === detail._id) ? (
                    <button
                      disabled
                      className="details-container-button"
                      onClick={() => {
                        addProduct();
                        history.push("/cart");
                      }}
                    >
                      Adaugat în coș
                    </button>
                  ) : (
                    <button
                      className="details-container-button"
                      onClick={() => {
                        addProduct();
                        history.push("/cart");
                      }}
                    >
                      Adaugă în coș
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
