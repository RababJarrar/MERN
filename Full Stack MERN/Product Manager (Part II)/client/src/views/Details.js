import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';



const Details = (props) => {
    const [product, setProduct] = useState({})

    
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

    </div>
  )
}

export default Details


