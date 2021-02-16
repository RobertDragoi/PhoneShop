import React from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from "./EmptyCart";
import CartList from './CartList';
import CartTotals from './CartTotals';

const Cart=(props)=> {
  
        return (
            <section>
              
                    {(value)=>{
                        const{cart}=value;
                        if(cart.length>0){
                            return(
                                <React.Fragment>
                                    <Title name="your" title="cart"/>
                                <CartColumns></CartColumns>
                                <CartList value={value}/>
                                <CartTotals value={value}/>
                                </React.Fragment>
                                )
                        }
                        else{
                            return(
                                <EmptyCart/>
                                )
                        }
                    }}
                                
                
            </section>
            );
    
}
 
export default Cart;