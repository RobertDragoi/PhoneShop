import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  clearOrderOperation,
  getOrderOperation,
} from "../../state/operations/orderOperations";
import { Link } from "react-router-dom";
import { Spinner } from "../Spinner";
import { SummaryItem } from "./SummaryItem";
import "./Summary.scss";

const Summary = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderOperation(id));
  }, []);
  const { order, loading } = useSelector((state) => state.order);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="summary-title">
            <h1 className="summary-title-left">Comanda a fost plasată cu</h1>
            <h1 className="summary-title-right">succes!</h1>
          </div>
          {order?.products?.map((product, index) => (
            <SummaryItem product={product} index={index} />
          ))}
          <Link
            onClick={() =>
              setTimeout(() => dispatch(clearOrderOperation()), 100)
            }
            to={`/shop`}
            className="summary-title"
          >
            <h2 className="summary-title-left">Întoarce-te la</h2>
            <h2 className="summary-title-right">cumpărături!</h2>
          </Link>
        </div>
      )}
    </>
  );
};

export default Summary;
