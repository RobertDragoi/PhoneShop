import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearCartOperation } from "../../state/operations/productOperations";
import { sendOrderOperation } from "../../state/operations/orderOperations";
import "./Cart.scss";
const CartTotals = () => {
  const { user } = useSelector((state) => state.user);
  const { cart, cartPrice } = useSelector((state) => state.product);
  const { order } = useSelector((state) => state.order);
  const dispatch = useDispatch();
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
  });
  const onChange = (e) => {
    console.log(e.target.value);
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(sendOrderOperation(user._id, fields, products, cartPrice));
  };
  const { name, address, phone } = fields;
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
              <form onSubmit={onSubmit}>
                <div className="form-row">
                  <div className="col-md-6">
                    <label className="control-label">
                      Nume<span className="text-primary">*</span>:
                    </label>
                    <input
                      onChange={onChange}
                      value={name}
                      type="text"
                      className="form-control"
                      name="name"
                      required
                    />
                  </div>
                  <div className=" col-md-6">
                    <label className="control">
                      Număr de telefon<span className="text-primary">*</span>:
                    </label>
                    <input
                      onChange={onChange}
                      value={phone}
                      type="text"
                      className="form-control"
                      name="phone"
                      required
                    />
                  </div>
                  <div className=" col-md-6">
                    <label className="control">
                      Adresă<span className="text-primary">*</span>:
                    </label>
                    <input
                      onChange={onChange}
                      value={address}
                      type="text"
                      className="form-control"
                      name="address"
                      required
                    />
                  </div>
                  <label className="control">
                    Metodă de plată<span className="text-primary">*</span>:
                  </label>
                  <div>
                    <input
                      onChange={onChange}
                      className="form-check-input"
                      type="radio"
                      name="payOption"
                      id="1"
                      value="cash"
                      required
                    />
                    <label className="form-check-label" htmlFor="1">
                      Numerar
                    </label>
                  </div>
                  <div>
                    <input
                      onChange={onChange}
                      className="form-check-input"
                      type="radio"
                      name="payOption"
                      id="2"
                      value="credit"
                    />
                    <label className="form-check-label" htmlFor="2">
                      Card de credit/debit
                    </label>
                  </div>
                  <div className="pt-2">
                    <input
                      type="submit"
                      className="btn btn-outline-primary text-uppercase mb-3 px-5"
                      value="Trimite comandă"
                    />
                  </div>
                </div>
              </form>
            )}
          </div>
          {order && (
            <Link to={`/summary/${order._id}`} className="cart-title">
              <h2 className="cart-title-left">Vizualizare</h2>
              <h2 className="cart-title-right">comandă</h2>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartTotals;
