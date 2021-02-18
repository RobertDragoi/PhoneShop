import React,{useReducer} from 'react'
import ProductContext from './productContext';
import ProductReducer from './productReducer';
import axios from 'axios';
import {
    GET_PRODUCTS,
    DETAIL_PRODUCT,
    PRODUCT_ERROR,
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    CLEAR_CART    
} from '../../types'
const ProductState = (props) => {
    const initialState={
        products:[],
        cart:[],
        detail:{
            title: "",
            img: "",
            price: "",
            company: "",
            description:""
          },
        loading:true,
        cartPrice:0,
        error:null
    }
    const [state,dispatch]=useReducer(ProductReducer,initialState)
    //Get Products
    const getProducts=async()=>{
        try {console.log('got products')
            const res=await axios.get('http://localhost:5000/shop')
            dispatch({type:GET_PRODUCTS,payload:res.data})
        } catch (error) {
            dispatch({type:PRODUCT_ERROR,payload:error.response.data.msg})
        }
    }
    //Get product detail 
    const productDetail=async(id)=>{
        try {console.log(`got product ${id}`)
            const res=await axios.get(`http://localhost:5000/shop/${id}`)
            dispatch({type:DETAIL_PRODUCT,payload:res.data})
        } catch (error) {
            dispatch({type:PRODUCT_ERROR,payload:error.response.data.msg})
        }
    }
    //Add product
    const addProduct=()=>{
        try { console.log('added to cart')
            if(state.cart.filter(product=>product._id===state.detail._id).length===0)
                dispatch({type:ADD_PRODUCT,payload:state.detail})
        } catch (error) {
            dispatch({type:PRODUCT_ERROR,payload:error.response.data.msg})
        }
    }
    const removeProduct=(id)=>{
        try {
            dispatch({type:REMOVE_PRODUCT,payload:state.cart.filter(product=>product._id!==id)})
        } catch (error) {
            dispatch({type:PRODUCT_ERROR,payload:error.response.data.msg})
        }
    }
    const clearCart=()=>{
        try {
            dispatch({type:CLEAR_CART})
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
    getProducts,
    productDetail,
    addProduct,
    removeProduct,
    clearCart
    }}>
        {props.children}
    </ProductContext.Provider>
        
    )
}

export default ProductState
