import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
// بدي اسال عنها 
// const Main = (props) => {
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
 
    return (
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList product={product}/>} 
        </div>
    )
}
// export default Main;