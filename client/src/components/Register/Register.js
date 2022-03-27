import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  registerOperation,
  clearErrorsOperation,
} from "../../state/operations/userOperations";
import { setAlertOperation } from "../../state/operations/alertOperations";
import Alerts from "../Alerts";
import Input from "../Input";
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
          <Input
            onChange={onChange}
            type="text"
            name="name"
            value={name}
            placeholder="Nume"
            required
          />
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
            type="text"
            name="age"
            value={age}
            placeholder="Vârstă"
            required
          />
          <Input
            onChange={onChange}
            type="text"
            name="address"
            value={address}
            placeholder="Adresă"
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
