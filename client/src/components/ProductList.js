 import React,{useContext,useEffect} from 'react';
 import Product from  './Product'
 import Title from './Title';
import ProductContext from './ProductsState/productContext';
 const ProductList =()=> {
         const productContext=useContext(ProductContext);
         const {products,getProducts}=productContext;
        
         useEffect(()=>{
        if(products.length===0){
        getProducts();
        }
         },[getProducts])
         return ( 
         <React.Fragment>
             <div className="py-5">
            <div className="container">
                <Title name="our" title="products"></Title>
            <div className="row ">
                {products.map(product=>{
                        return(<Product key={product._id} 
                        title={product.title}
                        img={product.img}
                        price={product.price}>
                        </Product>)
                })}
            </div>
            </div>
             </div>
         </React.Fragment>
         );
     
 }
  
 export default ProductList;