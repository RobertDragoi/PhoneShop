import {
  GET_PRODUCTS,
  DETAIL_PRODUCT,
  PRODUCT_ERROR,
  ADD_PRODUCT,
  LOADING_PRODUCT,
  REMOVE_PRODUCT,
  CLEAR_CART,
  INCREMENT,
  DECREMENT,
  CART_PRICE,
} from "../../types";
import Cookies from "js-cookie";

const initialState = {
  products: [],
  cart: Cookies.get("cart") ? JSON.parse(Cookies.get("cart")) : [],
  loading: null,
  detail: null,
  cartPrice: 0,
  error: null,
};

const productReducer = (state = initialState, action) => {
  let auxCart;
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case DETAIL_PRODUCT:
      return {
        ...state,
        loading: false,
        detail: action.payload,
      };
    case LOADING_PRODUCT:
      return {
        ...state,
        loading: true,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: state.cart.some((product) => product._id === state.detail._id)
          ? state.cart
          : [
              ...state.cart,
              {
                ...state.detail,
                count: 1,
                total: parseInt(state.detail.price),
              },
            ],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
    case CLEAR_CART:
      Cookies.remove("cart");
      return {
        ...state,
        cart: [],
        detail: null,
        cartPrice: 0,
      };
    case INCREMENT:
      auxCart = [...state.cart];
      auxCart.forEach((product, i) => {
        if (product._id === action.payload) auxCart[i].count++;
        auxCart[i].total = parseInt(auxCart[i].price) * auxCart[i].count;
      });
      return {
        ...state,
        cart: auxCart,
      };
    case DECREMENT:
      auxCart = [...state.cart];
      auxCart.forEach((product, i) => {
        if (product._id === action.payload) auxCart[i].count--;
        auxCart[i].total = parseInt(auxCart[i].price) * auxCart[i].count;
      });
      return {
        ...state,
        cart: auxCart,
      };
    case CART_PRICE:
      let sum = 0;
      state.cart.forEach((product) => (sum += product.total));
      setTimeout(() => Cookies.set("cart", JSON.stringify(state.cart)), 1000);
      return {
        ...state,
        cartPrice: sum,
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

export default productReducer;
