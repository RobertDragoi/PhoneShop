import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { clearCartOperation } from "../../state/operations/productOperations";
import { sendOrderOperation } from "../../state/operations/orderOperations";
import CartBilling from "./CartBilling";
import "./Cart.scss";
export const CartTotals = () => {
  const { user } = useSelector((state) => state.user);
  const { cart, cartPrice } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const history = useHistory();
  const products = cart.map((product) => ({
    count: product.count,
    product: product._id,
    total: product.total,
  }));

  const [billing, setBilling] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    address: "",
    phone: "",
    payOption: "cash",
    creditOption: {
      number: "",
      owner: "",
      cvv: "",
    },
  });
  const onChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const onChange2 = (e) => {
    let auxCreditOption = { ...creditOption, [e.target.name]: e.target.value };
    setFields({ ...fields, creditOption: auxCreditOption });
    console.log(creditOption);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      sendOrderOperation(user._id, fields, products, cartPrice, history)
    );
  };
  const { name, address, phone, payOption, creditOption } = fields;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <div>
              <Link to="/">
                <button
                  className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => dispatch(clearCartOperation())}
                >
                  Golește Cos
                </button>
              </Link>
            </div>
            <h5>
              <span className="text-title">total: {cartPrice}</span>
              <strong> Lei</strong>
            </h5>
            <div>
              {!billing && (
                <button
                  className="btn btn-outline-primary text-uppercase mb-3 px-5"
                  type="button"
                  onClick={() => setBilling(!billing)}
                >
                  Detalii comandă
                </button>
              )}
            </div>
            {billing && (
              <CartBilling
                onSubmit={onSubmit}
                onChange={onChange}
                onChange2={onChange2}
                name={name}
                phone={phone}
                address={address}
                payOption={payOption}
                creditOption={creditOption}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
