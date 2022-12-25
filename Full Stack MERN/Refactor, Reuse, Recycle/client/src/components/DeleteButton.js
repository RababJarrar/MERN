import React from 'react'
import axios from 'axios';
    
export default props => {
    
    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/product/' + props.productId)
            .then(res=>{
                props.successCallback();
            })
    }
    
    return (
        <button onClick={deleteProduct}> Delete</button>
    )
}