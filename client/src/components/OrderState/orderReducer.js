import { ORDER_SENT } from "../../types";
export default (state, action) => {
  switch (action.type) {
    case ORDER_SENT:
      return {
        ...state,
        orderId: action.payload._id,
        customer: action.payload.customer,
        products: action.payload.products,
        price: action.payload.price,
      };
    default:
      return state;
  }
};
