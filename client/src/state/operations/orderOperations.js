import { sendOrderAction, getUserOrdersAction } from "../actions/orderActions";
import axios from "axios";
export const sendOrderOperation =
  (customer, billingInfo, products, price) => async (dispatch) => {
    const res = await axios.post("http://localhost:5000/api/order", {
      customer,
      billingInfo,
      products,
      price,
    });
    dispatch(sendOrderAction(res.data));
  };

export const getUserOrdersOperation = (id) => async (dispatch) => {
  const res = await axios.get(`http://localhost:5000/api/order/user/${id}`);
  dispatch(getUserOrdersAction(res.data));
};
