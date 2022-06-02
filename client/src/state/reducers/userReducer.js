import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
  SET_MINUTES,
  SET_SECONDS,
} from "../../types";
import Cookies from "js-cookie";
import getSeconds from "date-fns/getSeconds";
import getMinutes from "date-fns/getMinutes";

const calculateMinutes = (tokenDate) => {
  let date = new Date();
  console.log(date)
  console.log(tokenDate);
  console.log(getMinutes(tokenDate.getTime() - date.getTime()));
  return getMinutes(tokenDate.getTime() - date.getTime());
};
const calculateSeconds = (tokenDate) => {
  let date = new Date();
  return getSeconds(tokenDate.getTime() - date.getTime());
};

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
  minutes: localStorage.getItem("token-duration")
    ? calculateMinutes(new Date(localStorage.getItem("token-duration")))
    : 0,
  seconds: localStorage.getItem("token-duration")
    ? calculateSeconds(new Date(localStorage.getItem("token-duration")))
    : 0,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCES:
    case REGISTER_SUCCES:
      Cookies.set("auth-token", action.payload, { expires: 1 / 24 });
      let date = new Date();
      date.setTime(date.getTime() + 1*60 * 60 * 1000);
      localStorage.setItem("token-duration", date);
      return {
        ...state,
        isAuthenticated: true,
        minutes: calculateMinutes(date),
        seconds: calculateSeconds(date),
      };
    case USER_LOADED:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      Cookies.remove("auth-token");
      Cookies.remove("cart");
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
      localStorage.removeItem("token-duration");
      Cookies.remove("cart");
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        minutes: 0,
        seconds: 0,
      };
    case SET_MINUTES:
      return { ...state, minutes: action.payload };
    case SET_SECONDS:
      return { ...state, seconds: action.payload };
    default:
      return state;
  }
};
export default userReducer;
