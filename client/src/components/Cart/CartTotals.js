import React,{useContext} from 'react'
import {Link} from 'react-router-dom';
import ProductContext from '../ProductsState/productContext';
export default function CartTotals() {
    const productContext=useContext(ProductContext);
    const {cartPrice,clearCart}=productContext;
    return (
       <React.Fragment>
           <div className="container">
            <div className="row">
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
                <Link to="/">
                    <button className="btn btn-outline-primary text-uppercase mb-3 px-5" 
                    type="button"
                     
                     >Send Order</button>
                </Link>
                </div>
            </div>
           </div>
       </React.Fragment>
    )
}
