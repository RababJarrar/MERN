import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';



const Details = (props) => {
    const [product, setProduct] = useState({})

  //method of Delete add   
  const deleteProduct = (kk) => {
    axios.delete('http://localhost:8000/api/product/' + kk)
        .then(res => {
            props.removeFromDom(kk);
            
        })
        .catch(err => console.error(err));
        navigate('/')
}  
//
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +(props.id))
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

  return (
    <div style={{textAlign: "center"}}>
      <h1>Title: {product.Title}</h1>
      <p>Price: {product.Price}</p>
      <p>Description: {product.Description}</p>
      <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>

    </div>
  )
}

export default Details


