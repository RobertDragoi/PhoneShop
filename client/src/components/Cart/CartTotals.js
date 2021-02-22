import React,{useContext,useState} from 'react'
import {Link} from 'react-router-dom';
import ProductContext from '../ProductsState/productContext';
import UserContext from '../UserState/userContext';
import OrderContext from '../OrderState/orderContext';
import Modal from '../Modal';
export default function CartTotals() {
    const productContext=useContext(ProductContext);
    const userContext=useContext(UserContext);
    const orderContext=useContext(OrderContext);
    const {cart,cartPrice,clearCart}=productContext;
    const {user}=userContext;
    const {orderId,sendOrder}=orderContext;
    const products=cart.map(product =>`${product._id}:${product.count}:${product.total}`)
    const [show,setShow]=useState(false);
    const closeModal=()=>setShow(false);
    const openModal=()=>setShow(true);
    
    return (
       <div>
           
           <div className="container">
            <div className="row">
               <Modal orderId={orderId} show={show} closeModal={closeModal}/>
                <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                <Link to="/">
                    <button className="btn btn-outline-danger text-uppercase mb-3 px-5" 
                    type="button"
                     onClick={()=>clearCart()}
                     >clear cart</button>
                </Link>
                <h5>
                    <span className="text-title">total: {cartPrice}
                    </span>
                    <strong>$ </strong>
                </h5>
                
                    <button className="btn btn-outline-primary text-uppercase mb-3 px-5" 
                    type="button"
                     onClick={()=>{sendOrder(user._id,products,cartPrice)
                    openModal()}}
                     >Send Order</button>
                </div>
            </div>
           </div>
       </div>
    )
}
