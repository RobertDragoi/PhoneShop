import React, { useReducer } from "react";
import ProductContext from "./productContext";
import ProductReducer from "./productReducer";
import axios from "axios";
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
const ProductState = (props) => {
  const initialState = {
    products: [],
    cart: [],
    loading: null,
    detail: null,
    cartPrice: 0,
    error: null,
  };
  const [state, dispatch] = useReducer(ProductReducer, initialState);
  //Get Products
  const getProducts = async () => {
    try {
      console.log("got products");
      const res = await axios.get("http://localhost:5000/api/shop");
      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.data.msg });
    }
  };
  //Get product detail
  const getProductDetail = async (id) => {
    try {
      console.log(`got product ${id}`);
      dispatch({ type: LOADING_PRODUCT });
      const res = await axios.get(`http://localhost:5000/api/shop/${id}`);
      dispatch({ type: DETAIL_PRODUCT, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.data.msg });
    }
  };
  //Add product
  const addProduct = () => {
    try {
      if (
        state.cart.filter((product) => product._id === state.detail._id)
          .length === 0
      )
        dispatch({
          type: ADD_PRODUCT,
          payload: {
            ...state.detail,
            count: 1,
            total: parseInt(state.detail.price),
          },
        });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.data.msg });
    }
    totalPrice();
  };
  const removeProduct = (id) => {
    try {
      dispatch({
        type: REMOVE_PRODUCT,
        payload: state.cart.filter((product) => product._id !== id),
      });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.data.msg });
    }
    totalPrice();
  };
  const clearCart = () => {
    try {
      dispatch({ type: CLEAR_CART });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.data.msg });
    }
  };
  const increment = (id) => {
    const auxCart = [...state.cart];
    auxCart.forEach((product, i) => {
      if (product._id === id) {
        auxCart[i].count++;
        auxCart[i].total = parseInt(auxCart[i].price) * auxCart[i].count;
        dispatch({ type: INCREMENT, payload: auxCart });
        return true;
      }
    });
    totalPrice();
  };
  const decrement = (id) => {
    const auxCart = [...state.cart];
    auxCart.forEach((product, i) => {
      if (product._id === id) {
        auxCart[i].count--;
        auxCart[i].total = parseInt(auxCart[i].price) * auxCart[i].count;

        dispatch({ type: DECREMENT, payload: auxCart });
        return true;
      }
    });
    totalPrice();
  };
  const totalPrice = () => {
    let sum = 0;
    state.cart.forEach((product) => (sum += product.total));
    dispatch({ type: CART_PRICE, payload: sum });
    console.log("total price added");
  };
  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        detail: state.detail,
        loading: state.loading,
        cartPrice: state.cartPrice,
        error: state.error,
        getProducts,
        getProductDetail,
        addProduct,
        removeProduct,
        clearCart,
        increment,
        decrement,
        totalPrice,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
