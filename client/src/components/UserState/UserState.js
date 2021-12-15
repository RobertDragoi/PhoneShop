import React, { useReducer, useContext } from "react";
import Cookies from "js-cookie";
import UserContext from "./userContext";
import UserReducer from "./userReducer";
import ProductContext from "../ProductsState/productContext";
import axios from "axios";
import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
} from "../../types";

const UserState = (props) => {
  const initialState = {
    token: Cookies.get("token"),
    isAuthenticated: null,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(UserReducer, initialState);
  const productContext = useContext(ProductContext);
  const { clearCart } = productContext;
  //Login
  const Login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/login",
        formData,
        config
      );
      dispatch({ type: LOGIN_SUCCES, payload: res.data });
      LoadUser();
    } catch (error) {
      console.log(error.response.data.msg);
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };
  //Register
  const Register = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const res = await axios.post(
        "http://localhost:5000/api/register",
        formData,
        config
      );
      dispatch({ type: REGISTER_SUCCES, payload: res.data });
      LoadUser();
    } catch (error) {
      dispatch({ type: REGISTER_FAIL, payload: error.response.data.msg });
    }
  };
  //Load user
  const LoadUser = async () => {
    if (Cookies.get("token")) {
      setAuthToken(Cookies.get("token"));
    }
    try {
      const res = await axios.get("http://localhost:5000/api/login");
      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.msg });
    }
  };
  //Logout
  const Logout = async () => {
    clearCart();
    dispatch({ type: LOGOUT });
  };
  //clearErrors
  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };
  //settoken
  const setAuthToken = (token) => {
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
  };
  return (
    <UserContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        token: state.token,
        error: state.error,
        Register,
        Login,
        clearErrors,
        LoadUser,
        Logout,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
