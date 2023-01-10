import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Contests = () => {
    const [Competition, setCompetition] = useState([]);
    const{id}=useParams();
    const navigate = useNavigate();
   
    useEffect(()=>{
        axios.get('http://localhost:8000/api/competition/'+id)
            .then(res =>{
                setCompetition(res.data);
            })
    },[]);
  return (
    <div>
      <div style={{width:'800px',margin:'auto'}}>
      <h1 style={{border:' 1px solid black' ,width:"800px",height:"60px",backgroundColor:"#dddddd"}}>Countries Competition</h1>
      <div style={{width:"800px",height:"40px",textAlign:"right"}}><button style={{backgroundColor:"#6FA8DC"}}><Link to={"/"} style={{textDecoration:"none",color:"black"}}>Back to Home </Link></button></div>
        <div style={{width:'800px',margin:'auto',backgroundColor:"#dddddd",height:"400px",border:' 1px solid black'}}>
        <h1>{Competition.Question}</h1> 
            <div style={{width:'500px',margin:'auto',display:"flex",height:"100px"}}>            
                <div style={{flex:"1"}}>
                <h1>{Competition.Country1}</h1> 
                <h3>{Competition.V1} clicks</h3>
                </div>
                
                <div style={{flex:"1"}}>
                <h1>{Competition.Country2}</h1> 
                <h3>{Competition.V2} clicks</h3>
                </div>

                {Competition.Country3!=""?  
                                <div style={{flex:"1"}}>
                                <h1>{Competition.Country3}</h1> 
                                <h3>{Competition.V3} clicks</h3>
                                </div>
                                :<div></div>}
            </div>

        </div>
      </div>
    </div>
  )
}

export default Contests
