import React,{useContext} from 'react';
import Modal from 'react-modal';
import './Modal.css';
import {Link} from 'react-router-dom';
import ProductContext from './ProductsState/productContext';
const Aux = (props) => {
  const productContext=useContext(ProductContext);
  const {clearCart}=productContext;
  return (
      <div>
        <Modal 
           isOpen={props.show}
           onRequestClose={props.closeModal}
           className="Modal"
           overlayClassName="Overlay"
        >
            <div className="center">
              <h3>{`Order has been sent! Keep shopping on our site!`}</h3>
              </div>
              <div className="center">
              <Link to="/">
           <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=>{props.closeModal(); clearCart(); }}>Close Modal</button>
           </Link>
              </div>
          
          
        </Modal>
      </div>
    
  )
}

export default Aux
