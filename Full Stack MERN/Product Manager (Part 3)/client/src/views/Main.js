import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default (props) => {

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
        .then(res=>{
            setProduct(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    const removeFromDom = personId => {
        setProduct(product.filter(product => product._id != personId));
    }

 
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>} 
        </div>
    )
}
