import {
  sendOrderAction,
  getUserOrdersAction,
  getOrderAction,
  loadingOrderAction,
} from "../actions/orderActions";
import axios from "axios";
export const sendOrderOperation =
  (customer, billingInfo, products, price) => async (dispatch) => {
    dispatch(loadingOrderAction());
    const res = await axios.post("http://localhost:5000/api/order", {
      customer,
      billingInfo,
      products,
      price,
    });
    dispatch(sendOrderAction(res.data));
  };

export const getOrderOperation = (id) => async (dispatch) => {
  dispatch(loadingOrderAction());
  const res = await axios.get(`http://localhost:5000/api/order/${id}`);
  dispatch(getOrderAction(res.data));
};

export const getUserOrdersOperation = (id) => async (dispatch) => {
  dispatch(loadingOrderAction());
  const res = await axios.get(`http://localhost:5000/api/order/user/${id}`);
  dispatch(getUserOrdersAction(res.data));
};
