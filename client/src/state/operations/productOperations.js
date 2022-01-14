import {
  getProductsAction,
  getDetailProductAction,
  productErrorAction,
  addProductAction,
  removeProductAction,
  incrementProductAction,
  decrementProductAction,
  clearCartAction,
  cartPriceAction,
  loadingProductAction,
} from "../actions/productActions";
import { clearOrderAction } from "../actions/orderActions";
import axios from "axios";

export const getProductsOperation = () => async (dispatch) => {
  try {
    console.log("got products");
    dispatch(loadingProductAction());
    const res = await axios.get("http://localhost:5000/api/shop");
    dispatch(getProductsAction(res.data));
  } catch (error) {
    dispatch(productErrorAction(error.response.data.msg));
  }
};

export const getDetailProductOperation = (id) => async (dispatch) => {
  try {
    console.log(`got product ${id}`);
    dispatch(loadingProductAction());
    const res = await axios.get(`http://localhost:5000/api/shop/${id}`);
    dispatch(getDetailProductAction(res.data));
  } catch (error) {
    dispatch(productErrorAction(error.response.data.msg));
  }
};

export const addProductOperation = () => async (dispatch) => {
  dispatch(addProductAction());
  dispatch(cartPriceOperation());
  dispatch(clearOrderAction());
};
export const removeProductOperation = (id) => async (dispatch) => {
  dispatch(removeProductAction(id));
  dispatch(cartPriceOperation());
};
export const clearCartOperation = () => async (dispatch) => {
  dispatch(clearCartAction());
};
export const incrementProductOperation = (id) => async (dispatch) => {
  dispatch(incrementProductAction(id));
  dispatch(cartPriceOperation());
};
export const decrementProductOperation = (id) => async (dispatch) => {
  dispatch(decrementProductAction(id));
  dispatch(cartPriceOperation());
};
export const cartPriceOperation = () => async (dispatch) => {
  dispatch(cartPriceAction());
};
