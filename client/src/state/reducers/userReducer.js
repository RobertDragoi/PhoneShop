import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
} from "../../types";
import Cookies from "js-cookie";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCES:
    case REGISTER_SUCCES:
      Cookies.set("auth-token", action.payload.accessToken, {
        expires: 1 / 24,
      });
      Cookies.set("refresh-token", action.payload.refreshToken, {
        expires: 720,
      });
      return {
        ...state,
        isAuthenticated: true,
      };
    case USER_LOADED:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      Cookies.remove("auth-token");
      localStorage.removeItem("cart");
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    case LOGOUT:
      Cookies.remove("auth-token");
      localStorage.removeItem("cart");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        minutes: 0,
        seconds: 0,
      };
    default:
      return state;
  }
};
export default userReducer;
