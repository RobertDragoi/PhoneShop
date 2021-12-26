import {
  ORDER_SENT,
  USER_ORDERS_LOADED,
  GET_ORDER,
  LOADING_ORDER,
} from "../../types";
const initialState = {
  order: null,
  userOrders: [],
  loading: null,
};
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
    case ORDER_SENT:
      return {
        ...state,
        order: action.payload,
        loading: false,
      };
    case USER_ORDERS_LOADED:
      return {
        ...state,
        userOrders: action.payload,
        loading: false,
      };
    case LOADING_ORDER:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export default orderReducer;
