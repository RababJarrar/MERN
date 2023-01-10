import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Details = (props) => {

    const [Competition, setCompetition] = useState([]);
    const{id}=useParams();
    const navigate = useNavigate();
    const[V1 , setV1]= useState(); 
    const[V2 , setV2]= useState(); 
    const[V3 , setV3]= useState();  
   
    useEffect(()=>{
        axios.get('http://localhost:8000/api/competition/'+id)
            .then(res =>{
                setCompetition(res.data);
            })
    },[]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/competition/'+id)
            .then(res =>{
                setV1(res.data.V1);
                setV2(res.data.V2);
                setV3(res.data.V3);
            })
            },[]);  
    
  return (
    <div>
      <div style={{width:'800px',margin:'auto'}}>
      <h1 style={{border:' 1px solid black' ,width:"800px",height:"60px",backgroundColor:"#dddddd"}}>Countries Competition</h1>
      <div style={{width:'800px',margin:'auto',backgroundColor:"#dddddd",height:"400px",border:' 1px solid black'}}>
      <h1>{Competition.Question}</h1> 
        <div style={{width:'500px',margin:'auto',display:"flex",border:' 1px solid black',height:"100px"}}>            
            <div style={{flex:"1",border:' 1px solid black',backgroundColor:"white"}}>
                <h3>{Competition.Country1}</h3>
                <button style={{backgroundColor:"yellow"}} onClick={e=>props.edit1(Competition._id,V1)} >Vote {Competition.Country1}</button>
            </div>
            <div style={{flex:"1",border:' 1px solid black',backgroundColor:"white"}}>
            <h3>{Competition.Country2}</h3>
                <button style={{backgroundColor:"red"}} onClick={e=>props.edit2(Competition._id,V2)}>Vote {Competition.Country2}</button>
            </div>
            {Competition.Country3!=""?  
                        <div style={{flex:"1",border:' 1px solid black',backgroundColor:"white"}}>
                        <h3>{Competition.Country3}</h3>
                        <button onClick={e=>props.edit3(Competition._id,V3)}>Vote {Competition.Country3}</button>
                    </div>
                    :
                    <div></div>}
        </div>

      </div>
      </div>
    </div>
  )
}

export default Details
