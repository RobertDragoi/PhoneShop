import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
  REFRESH_TOKEN,
} from "../../types";
export const registerAction = (values) => ({
  type: REGISTER_SUCCES,
  payload: values,
});
export const loginAction = (values) => ({
  type: LOGIN_SUCCES,
  payload: values,
});
export const registerErrorAction = (values) => ({
  type: REGISTER_FAIL,
  payload: values,
});
export const loginErrorAction = (values) => ({
  type: LOGIN_FAIL,
  payload: values,
});
export const loadUserAction = (values) => ({
  type: USER_LOADED,
  payload: values,
});
export const clearErrorsAction = () => ({
  type: CLEAR_ERRORS,
});
export const refreshTokenAction = (values) => ({
  type: REFRESH_TOKEN,
  payload: values,
});
export const logoutAction = () => ({ type: LOGOUT });
