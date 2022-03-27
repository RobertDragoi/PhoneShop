import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDetailProductOperation,
  addProductOperation,
} from "../../state/operations/productOperations";
import { Link, useParams, useHistory } from "react-router-dom";
import { Spinner } from "../Spinner";
import "./Details.scss";

const Details = () => {
  const { cart, detail, loading } = useSelector((state) => state.product);
  const { isAuthenticated } = useSelector((state) => state.user);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetailProductOperation(id));
  }, [id]);
  return (
    <div className="container">
      {loading ? (
        <Spinner/>
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
                  ) : cart.some((e) => e._id === detail?._id) ? (
                    <button disabled className="details-container-button">
                      Adaugat în coș
                    </button>
                  ) : (
                    <button
                      className="details-container-button"
                      onClick={() => {
                        dispatch(addProductOperation(id));
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
