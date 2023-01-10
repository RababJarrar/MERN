import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

const Form = () => {
    const[Question , setQuestion]= useState(""); 
    const[Country1 , setCountry1]= useState(""); 
    const[Country2 , setCountry2]= useState(""); 
    const[Country3 , setCountry3]= useState(""); 
    const[V1 , setV1]= useState(0); 
    const[V2 , setV2]= useState(0); 
    const[V3 , setV3]= useState(0);   
    const [errors,setErrors]=useState([]);
    const navigate = useNavigate(); 
    
    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/create/competition',{
            Question,Country1,Country2,Country3,V1,V2,V3
        })
        .then(res=>{console.log(res); setQuestion("");navigate("/");  })
        .catch(err=>{
            const errorResponse = err.response.data.errors;
            const errorArray =[];
            for (const key of Object.keys(errorResponse)){
                errorArray.push(errorResponse[key].message)
            }
            setErrors(errorArray);
        })          
    }
    return (
        <div style={{width:'800px',margin:'auto'}}>
        <h1 style={{border:' 1px solid black' ,width:"800px",height:"60px" ,backgroundColor:"#dddddd"}}>Countries Competition</h1>
        <div style={{width:"800px",height:"40px",textAlign:"right"}}><button style={{backgroundColor:"#6FA8DC"}}><Link to={"/"} style={{textDecoration:"none",color:"black"}}>Back to Home </Link></button></div>

            <form onSubmit={onSubmitHandler} style={{textAlign:'left' ,paddingLeft:'20px',border:' 1px solid black',backgroundColor:"#dddddd",height:"400px"}}>                
                {errors.map((one, idx)=><p key={idx}>{one}</p>)}
                <p>
                    <label>Content Question: *</label><br/>
                    <textarea onChange={e => setQuestion(e.target.value)} value={Question} name="Question"/>
                </p>
                <p>
                    <label>Country1: *</label><br/>
                    <input type="text" onChange={e => setCountry1(e.target.value)} value={Country1} name="Country1"/>
                </p>
                <p>
                    <label>Country2: *</label><br/>
                    <input type="text" onChange={e => setCountry2(e.target.value)} value={Country2} name="Country2"/>
                </p>
                <p>
                    <label>Country3</label><br/>
                    <input type="text" onChange={e => setCountry3(e.target.value)} value={Country3} name="Country3"/>
                </p>
                <input type="submit" value="ADD" style={{backgroundColor:"#6FA8DC"}} />     
            </form>            
        </div>
    )
}
export default Form
