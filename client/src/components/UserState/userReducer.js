import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  LOGIN_SUCCES,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  USER_LOADED,
  LOGOUT,
} from "../../types";
export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCES:
    case REGISTER_SUCCES:
      localStorage.setItem("token", action.payload);
      return { ...state, token: action.payload, isAuthenticated: true };
    case USER_LOADED:
      return { ...state, user: action.payload, isAuthenticated: true };
    case LOGIN_FAIL:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
