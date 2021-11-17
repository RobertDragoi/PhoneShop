import {
  GET_PRODUCTS,
  DETAIL_PRODUCT,
  PRODUCT_ERROR,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  INCREMENT,
  DECREMENT,
  CART_PRICE,
} from "../../types";
export default (state, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case DETAIL_PRODUCT:
      return {
        ...state,
        detail: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: action.payload,
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        detail: {
          title: "",
          img: "",
          price: "",
          company: "",
          description: "",
        },
        cartPrice: 0,
      };
    case INCREMENT:
    case DECREMENT:
      return {
        ...state,
        cart: action.payload,
      };
    case CART_PRICE:
      return {
        ...state,
        cartPrice: action.payload,
      };
    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
