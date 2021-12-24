import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loginOperation,
  clearErrorsOperation,
} from "../../state/operations/userOperations";
import { setAlertOperation } from "../../state/operations/alertOperations";
import Alerts from "../Alerts";
import "./Login.scss";

const Login = (props) => {
  const dispatch = useDispatch();
  const { isAuthenticated, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/");
    }
    if (error) {
      dispatch(setAlertOperation(error, "danger"));
      dispatch(clearErrorsOperation());
    }
  });
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginOperation({ email, password }));
  };
  return (
    <div className="w-50 mx-auto my-4 p-4 card container">
      <h1 className="login-title">Logare</h1>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label className="control-label" htmlFor="email">
              Email<span className="text-primary">*</span>:
            </label>
            <input
              onChange={onChange}
              type="email"
              className="form-control"
              name="email"
              value={email}
              required
              placeholder="Email"
            />
          </div>
        </div>

        <div className="form-group col-md-12">
          <label className="control-label">
            Parolă<span className="text-primary">*</span>:
          </label>
          <div>
            <input
              onChange={onChange}
              type="password"
              className="form-control"
              name="password"
              value={password}
              required
              placeholder="Parolă"
            />
          </div>
        </div>
        <div className="pt-2">
          <input type="submit" className="login-button" value="Submit" />
        </div>
        <p className="text-muted my-2">
          Nu ai un cont înregistrat?{" "}
          <Link className="login-link" to="/register">
            Înregistrează-te
          </Link>
        </p>
        <Alerts />
      </form>
    </div>
  );
};

export default Login;
