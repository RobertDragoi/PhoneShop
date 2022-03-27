import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  loginOperation,
  clearErrorsOperation,
} from "../../state/operations/userOperations";
import { setAlertOperation } from "../../state/operations/alertOperations";
import Alerts from "../Alerts";
import Input from "../Input";
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
          <Input
            onChange={onChange}
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            required
          />
          <Input
            onChange={onChange}
            type="password"
            name="password"
            value={password}
            placeholder="Parolă"
            required
          />
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
