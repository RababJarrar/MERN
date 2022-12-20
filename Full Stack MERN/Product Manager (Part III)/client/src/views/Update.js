import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const Update = (props) => {
    const [Title, setTitle] = useState(""); 
    const [Price, setPrice] = useState("");
    const [ Description, setDescription] = useState("");

    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +(props.id))
            .then(res => {
                setTitle(res.data.Title);
                setPrice(res.data.Price);
                setDescription(res.data.Description);
            })
    }, []);
    const updateProduct = e=>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/edit/' +(props.id),{
        Title,
        Price,
        Description
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
    navigate('/')
    }

  return (
    <div style={{textAlign: "center"}}>
        <form onSubmit={updateProduct}>
            <h1>Update A Product</h1>
            <p>
                <label>Title</label><br/>
                <input type="text" value={Title} name="Title" onChange={(e)=>{setTitle(e.target.value)}} />
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" value={Price} name="Price" onChange={(e)=>{setPrice(e.target.value)}} />
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" value={Description} name="Description" onChange={(e)=>{setDescription(e.target.value)}} />
            </p>
            <input type="submit" value="Save"/>
        </form>
    </div>
  )
}

export default Update
