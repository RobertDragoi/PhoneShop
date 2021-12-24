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

export const getProductsAction = (values) => ({
  type: GET_PRODUCTS,
  payload: values,
});

export const getDetailProductAction = (values) => ({
  type: DETAIL_PRODUCT,
  payload: values,
});

export const productErrorAction = (values) => ({
  type: PRODUCT_ERROR,
  payload: values,
});

export const addProductAction = () => ({
  type: ADD_PRODUCT,
});

export const removeProductAction = (values) => ({
  type: REMOVE_PRODUCT,
  payload: values,
});

export const incrementProductAction = (values) => ({
  type: INCREMENT,
  payload: values,
});

export const decrementProductAction = (values) => ({
  type: DECREMENT,
  payload: values,
});

export const clearCartAction = () => ({ type: CLEAR_CART });

export const cartPriceAction = () => ({ type: CART_PRICE });

export const loadingProductAction = () => ({ type: LOADING_PRODUCT });
