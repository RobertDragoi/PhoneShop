import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from "../UserState/userContext";
import AlertContext from "../AlertState/alertContext";
import Alerts from "../Alerts";
import "./Register.scss";
const Register = (props) => {
  const userContext = useContext(UserContext);
  const alertContext = useContext(AlertContext);
  const { error, isAuthenticated, Register, clearErrors } = userContext;
  const { setAlert } = alertContext;
  useEffect(() => {
    if (isAuthenticated === true) {
      props.history.push("/");
    }
    if (error === "User already exists!") {
      setAlert(error, "danger");
      clearErrors();
    }
  });
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: "",
    address: "",
    password: "",
  });
  const { name, email, age, address, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    Register({ name, email, age, address, password });
  };

  return (
    <div className="w-50 mx-auto my-4 p-4 card container">
      <h1 className="register-title">Register now</h1>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label className="control-label" htmlFor="name">
              Full Name<span className="text-primary">*</span>:
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="name"
              value={name}
              required
              placeholder="Full name"
            />
          </div>
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
          <label className="control-label" htmlFor="Address">
            Age:
          </label>
          <div>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="age"
              value={age}
              placeholder="Age"
              autoComplete="street-address"
            />
          </div>
        </div>
        <div className="form-group col-md-12">
          <label className="control-label" htmlFor="Address">
            Address:
          </label>
          <div>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="address"
              value={address}
              placeholder="Address"
              autoComplete="street-address"
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
          <input type="submit" className="register-button" value="Submit" />
        </div>
        <p className="text-muted my-2">
          You already have an account?{" "}
          <Link className="register-link" to="/login">
            Log In
          </Link>
        </p>
        <Alerts />
      </form>
    </div>
  );
};

export default Register;
