import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton'

const Update = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +(props.id))
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);

    const updateProduct = product=>{
        axios.put('http://localhost:8000/api/product/edit/' +(props.id),product)
            .then(res => console.log(res))
            .catch(err => console.error(err));
            navigate('/')
            }

  return (
    <div style={{textAlign: "center"}}>
        {loaded && (
            <>
                <ProductForm 
                onSubmitProp={updateProduct} 
                initialTitle={product.Title} 
                initialPrice={product.Price} 
                initialDescription={product.Description}
                />
                <DeleteButton productId={product._id}
                 successCallback={() => navigate("/")} />
            </>
        )}
    </div>
  )
}

export default Update
