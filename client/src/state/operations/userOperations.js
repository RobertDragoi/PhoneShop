import {
  registerAction,
  loginAction,
  registerErrorAction,
  loginErrorAction,
  loadUserAction,
  clearErrorsAction,
  logoutAction,
} from "../actions/userActions";
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
      "http://localhost:5000/api/login",
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
      "http://localhost:5000/api/register",
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
  if (Cookies.get("token")) {
    setAuthToken(Cookies.get("token"));
  }
  try {
    const res = await axios.get("http://localhost:5000/api/login");
    dispatch(loadUserAction(res.data));
  } catch (error) {
    dispatch(loginErrorAction(error.response.data));
  }
};

export const logoutOperation = () => async (dispatch) => {
  dispatch(logoutAction());
};

export const clearErrorsOperation = () => async (dispatch) => {
  dispatch(clearErrorsAction());
};
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
  }
};
