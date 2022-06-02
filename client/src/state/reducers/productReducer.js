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

const initialState = {
  products: [],
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
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
        loading: false,
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
                total: parseFloat(state.detail.price),
              },
            ],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product._id !== action.payload),
      };
    case CLEAR_CART:
      localStorage.removeItem("cart");
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
        auxCart[i].total = (auxCart[i].price * auxCart[i].count).toFixed(2);
      });
      return {
        ...state,
        cart: auxCart,
      };
    case DECREMENT:
      auxCart = [...state.cart];
      auxCart.forEach((product, i) => {
        if (product._id === action.payload) auxCart[i].count--;
        auxCart[i].total = (auxCart[i].price * auxCart[i].count).toFixed(2);
      });
      return {
        ...state,
        cart: auxCart,
      };
    case CART_PRICE:
      let sum = 0;
      state.cart.forEach((product) => (sum += parseFloat(product.total)));
      setTimeout(
        () => localStorage.setItem("cart", JSON.stringify(state.cart)),
        500
      );
      return {
        ...state,
        cartPrice: sum.toFixed(2),
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
