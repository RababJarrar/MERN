import React, { useState } from 'react'

const Form = (props) => {
    const[Name , setName]= useState(props.initialName);  
    
    const onSubmitHandler = e =>{
        e.preventDefault();
        props.onSubmitProp(Name); 
        setName('') ;   
    }
    return (
        <div style={{width:'250px',textAlign:'left',margin:'auto'}}>
            <form onSubmit={onSubmitHandler} style={{border:'1px solid black',width:'220px',height:'150px',textAlign:'left' ,paddingLeft:'20px'}}>                
                {props.errors.map((one, idx)=><p key={idx}>{one}</p>)}
                <p>
                    <label>Name</label><br/>
                    <input type="text" onChange={e => setName(e.target.value)} value={Name} name="Name"/>
                </p>
                <input type="submit" value="Create"/>     
            </form>            
        </div>
    )
}
export default Form
