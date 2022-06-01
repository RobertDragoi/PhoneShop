import {
  sendOrderAction,
  getUserOrdersAction,
  getOrderAction,
  loadingOrderAction,
  clearOrderAction,
} from "../actions/orderActions";
import { clearCartAction } from "../actions/productActions";
import Cookies from "js-cookie";
import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    "x-auth-token": Cookies.get("auth-token"),
  },
};

export const sendOrderOperation =
  (customer, billingInfo, products, price, history) => async (dispatch) => {
    dispatch(loadingOrderAction());
    const res = await axios.post(
      "http://localhost:8080/api/order",
      {
        customer,
        billingInfo,
        products,
        price,
      },
      config
    );
    dispatch(sendOrderAction(res.data));
    history.push(`/summary/${res.data._id}`);
    dispatch(clearCartAction());
  };

export const getOrderOperation = (id) => async (dispatch) => {
  dispatch(loadingOrderAction());
  const res = await axios.get(`http://localhost:8080/api/order/${id}`, config);
  dispatch(getOrderAction(res.data));
};

export const getUserOrdersOperation = (id) => async (dispatch) => {
  dispatch(loadingOrderAction());
  const res = await axios.get(
    `http://localhost:8080/api/order/user/${id}`,
    config
  );
  dispatch(getUserOrdersAction(res.data));
};

export const clearOrderOperation = () => async (dispatch) => {
  dispatch(clearOrderAction());
};
