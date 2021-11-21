import React, { useReducer } from "react";
import { ORDER_SENT, USER_ORDERS_LOADED } from "../../types";
import axios from "axios";
import OrderContext from "./orderContext";
import OrderReducer from "./orderReducer";
const OrderState = (props) => {
  const initialState = {
    order: null,
    userOrders: [],
  };
  const [state, dispatch] = useReducer(OrderReducer, initialState);
  //Sent order
  const sendOrder = async (customer, products, price) => {
    try {
      const res = await axios.post("http://localhost:5000/api/order", {
        customer,
        products,
        price,
      });
      dispatch({ type: ORDER_SENT, payload: res.data });
    } catch (error) {}
  };
  //Get customer's orders
  const getUserOrders = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/api/order/user/${id}`);
      dispatch({ type: USER_ORDERS_LOADED, payload: res.data });
    } catch (error) {}
  };
  return (
    <OrderContext.Provider
      value={{
        order: state.order,
        userOrders: state.userOrders,
        sendOrder,
        getUserOrders,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default OrderState;
