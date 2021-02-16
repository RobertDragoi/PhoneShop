import {
    GET_PRODUCTS,
    DETAIL_PRODUCT,
    PRODUCT_ERROR   
} from '../../types'
export default (state,action)=>{
    switch (action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products:action.payload
            }
        case PRODUCT_ERROR:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}