import { ORDER_SENT, USER_ORDERS_LOADED, GET_ORDER } from "../../types";

export const sendOrderAction = (values) => ({
  type: ORDER_SENT,
  payload: values,
});

export const getOrderAction = (values) => ({
  type: GET_ORDER,
  payload: values,
});

export const getUserOrdersAction = (values) => ({
  type: USER_ORDERS_LOADED,
  payload: values,
});
