import {
  registerAction,
  loginAction,
  registerErrorAction,
  loginErrorAction,
  loadUserAction,
  clearErrorsAction,
  logoutAction,
} from "../actions/userActions";
import { clearCartAction } from "../actions/productActions";
import Cookies from "js-cookie";
import axios from "axios";
export const loginOperation = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8080/api/login",
      formData,
      config
    );
    dispatch(loginAction(res.data));
    dispatch(loadUserOperation());
  } catch (error) {
    dispatch(loginErrorAction(error.response.data));
  }
};

export const registerOperation = (formData) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post(
      "http://localhost:8080/api/register",
      formData,
      config
    );
    dispatch(registerAction(res.data));
    dispatch(loadUserOperation());
  } catch (error) {
    dispatch(registerErrorAction(error.response.data));
  }
};

export const loadUserOperation = () => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": Cookies.get("auth-token"),
      },
    };
    const res = await axios.get("http://localhost:8080/api/user", config);
    dispatch(loadUserAction(res.data));
  } catch (error) {
    dispatch(loginErrorAction(error.response.data));
  }
};

export const logoutOperation = () => async (dispatch) => {
  dispatch(logoutAction());
  dispatch(clearCartAction());
};

export const clearErrorsOperation = () => async (dispatch) => {
  dispatch(clearErrorsAction());
};
