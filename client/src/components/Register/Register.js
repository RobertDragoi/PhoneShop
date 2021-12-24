import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  registerOperation,
  clearErrorsOperation,
} from "../../state/operations/userOperations";
import { setAlertOperation } from "../../state/operations/alertOperations";
import Alerts from "../Alerts";
import "./Register.scss";

const Register = (props) => {
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

    dispatch(registerOperation({ name, email, age, address, password }));
  };

  return (
    <div className="w-50 mx-auto my-4 p-4 card container">
      <h1 className="register-title">Înregistrare</h1>
      <form onSubmit={onSubmit}>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label className="control-label" htmlFor="name">
              Nume<span className="text-primary">*</span>:
            </label>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="name"
              value={name}
              required
              placeholder="Nume"
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
            Vârstă:
          </label>
          <div>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="age"
              value={age}
              placeholder="Vârstă"
            />
          </div>
        </div>
        <div className="form-group col-md-12">
          <label className="control-label" htmlFor="Address">
            Adresă:
          </label>
          <div>
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              name="address"
              value={address}
              placeholder="Adresă"
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
          <input type="submit" className="register-button" value="Submit" />
        </div>
        <p className="text-muted my-2">
          Ai deja un cont?{" "}
          <Link className="register-link" to="/login">
            Loghează-te
          </Link>
        </p>
        <Alerts />
      </form>
    </div>
  );
};

export default Register;
