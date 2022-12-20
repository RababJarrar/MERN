import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const ProductList = (props) => { 
  
  
//method of Delete
  // const { removeFromDom } = props;
  // removeFromDom(personId)
    
  const deleteProduct = (kk) => {
      axios.delete('http://localhost:8000/api/product/' + kk)
          .then(res => {
              props.removeFromDom(kk)
          })
          .catch(err => console.error(err));
  }  
//
   
  return (
    <div style={{textAlign: "center"}}>
      {props.product.map( (one, i) =>
                <p>
                  <Link to ={"/"+one._id} key={i}>{one.Title}</Link> 
                  <button><Link to ={"/product/"+one._id+ "/edit"} key={i}>Edit</Link> </button> 
                  <button onClick={(e)=>{deleteProduct(one._id)}}>Delete</button>
                </p>
        
            )}


    </div>
  )
}

export default ProductList
