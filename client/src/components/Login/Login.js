import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserState/userContext";
import AlertContext from "../AlertState/alertContext";
import Alerts from "../Alerts";
import "./Login.scss";
const Login = (props) => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);
  const { isAuthenticated, Login, error, clearErrors } = userContext;
  const { setAlert } = alertContext;
  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/");
    }
    if (error) {
      setAlert(error, "danger");
      clearErrors();
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
    Login({ email, password });
  };
  return (
    <div className="w-50 mx-auto my-4 p-4 card container">
      <h1 className="login-title">Login now</h1>
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
            Password<span className="text-primary">*</span>:
          </label>
          <div>
            <input
              onChange={onChange}
              type="password"
              className="form-control"
              name="password"
              value={password}
              required
              placeholder="Password"
            />
          </div>
        </div>
        <div className="pt-2">
          <input type="submit" className="login-button" value="Submit" />
        </div>
        <p className="text-muted my-2">
          You don't have an account?{" "}
          <Link className="login-link" to="/register">
            Sign up
          </Link>
        </p>
        <Alerts />
      </form>
    </div>
  );
};

export default Login;
