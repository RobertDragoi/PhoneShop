import React,{useReducer} from 'react'
import ProductContext from './productContext';
import ProductReducer from './productReducer';
import axios from 'axios';
import {
    GET_PRODUCTS,
    DETAIL_PRODUCT,
    PRODUCT_ERROR   
} from '../../types'
const ProductState = (props) => {
    const initialState={
        products:[],
        cart:[],
        detail:null,
        
        cartPrice:0,
        error:null
    }
    const [state,dispatch]=useReducer(ProductReducer,initialState)
    //GET PRODUCTS
    const getProducts=async()=>{
        try {
            const res=await axios.get('http://localhost:5000/shop')
            dispatch({type:GET_PRODUCTS,payload:res.data})
        } catch (error) {
            dispatch({type:PRODUCT_ERROR,payload:error.response.data.msg})
        }
    }
    return (<ProductContext.Provider value={{
    products:state.products,
    cart:state.cart,
    detail:state.detail,
    cartPrice:state.cartPrice,
    error:state.error,
    getProducts
    }}>
        {props.children}
    </ProductContext.Provider>
        
    )
}

export default ProductState
