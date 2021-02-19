import {
    ORDER_SENT
} from '../../types';
export default (state,action)=>{
    switch (action.type){
        case ORDER_SENT:
            return{
                ...state,
                customerId:action.payload.customerId,
                products:action.payload.products,
                price:action.payload.price
            }
        default:
            return state;
    }
}