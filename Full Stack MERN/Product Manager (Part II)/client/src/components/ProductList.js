import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const ProductList = (props) => {
  
  return (
    <div style={{textAlign: "center"}}>
      {props.product.map( (one, i) =>
                <p><Link to ={"/"+one._id} key={i}>{one.Title}</Link></p>
            )}

    </div>
  )
}

export default ProductList
