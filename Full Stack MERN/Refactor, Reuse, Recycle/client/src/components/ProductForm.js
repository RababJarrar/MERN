import React, { useState ,useEffect } from 'react'
import axios from 'axios';

//  so now we don't have to refresh to see the new person we created.??
export default (props) => {
    const { initialTitle, initialPrice, initialDescription } = props;
    const [Title, setTitle] = useState(initialTitle); 
    const [Price, setPrice] = useState(initialPrice);
    const [ Description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        props.onSubmitProp({Title,Price,Description});            
    }
    
    return (        
        <form onSubmit={onSubmitHandler} style={{textAlign: "center"}}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} name="Title" value={Title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" onChange={(e)=>setPrice(e.target.value)} name="Price" value={Price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input type="text" onChange={(e)=>setDescription(e.target.value)} name="Description" value={Description}/>
            </p>
            <input type="submit" value="Submit"/>
        </form>
    )
}
