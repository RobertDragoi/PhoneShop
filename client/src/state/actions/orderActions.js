import { ORDER_SENT, USER_ORDERS_LOADED } from "../../types";

export const sendOrderAction = (values) => ({
  type: ORDER_SENT,
  payload: values,
});

export const getUserOrdersAction = (values) => ({
  type: USER_ORDERS_LOADED,
  payload: values,
});
