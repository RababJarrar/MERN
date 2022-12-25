import React, { useEffect, useState } from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import DeleteButton from './DeleteButton';


const ProductList = (props) => { 
  const [product, setProduct] = useState([]);

useEffect(() => {
    axios.get('http://localhost:8000/api/product')
        .then(res => setProduct(res.data));
}, [])

const removeFromDom = productId => {
  setProduct(product.filter(product => product._id != productId))
}  

  return (
    <div style={{textAlign: "center"}}>
      {product.map( (one, i) =>
                <p>
                  <Link to ={"/"+one._id} key={i}>{one.Title}</Link> 
                  <button><Link to ={"/product/"+one._id+ "/edit"} key={i}>Edit</Link> </button> 
                  <DeleteButton productId={one._id} successCallback={()=>removeFromDom(one._id)}/>
                </p>
            )}
    </div>
  )
}

export default ProductList