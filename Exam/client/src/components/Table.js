import axios from 'axios';
import React from 'react'
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';
    

const Table = (props) => {

  return (
        
    <div style={{width:'800px',margin:'auto'}}>
      <h1 style={{border:' 1px solid black' ,width:"800px",height:"60px" ,backgroundColor:"#dddddd"}}>Countries Competition</h1>
      <div style={{width:"800px",height:"40px",textAlign:"right",}}><button style={{backgroundColor:"#6FA8DC"}}><Link to={"contests/new"} style={{textDecoration:"none",color:"black"}}>Create Your Own Competition </Link></button></div>         
      <div style={{width:"800px",height:"400px",display:"flex"}}>
      
        <div style={{border:' 1px solid black' ,flex:"1" ,backgroundColor:"#dddddd",marginRight:"20px"}}>
          <h2 >Top 3 Competitions </h2>
              {props.competitionsTop.map((one, i) =>               
                      <div key={i} style={{border:' 2px solid black',margin:"20px"}}>               
                        <Link to={"/choose/"+one._id}>{one.Question}</Link><br></br>
                        <span style={{margin:"25px"}}>{one.Country1}:  {one.V1}Votes</span><span>{one.Country2}:  {one.V2}Votes</span>
                        {one.Country3!=""?<span style={{margin:"25px"}}>{one.Country3}:  {one.V3}Votes</span>: <span></span>}
                      </div>
              )}             
        </div>
      
        <div style={{border:' 1px solid black' ,flex:"1",backgroundColor:"#dddddd"}}>
          <h2>All competitions </h2>
              {props.competitions.slice(0).reverse().map((one, i) =>               
                      <div key={i} style={{border:' 2px solid black',margin:"20px"}}>               
                        <Link to={"/choose/"+one._id}>{one.Question}</Link><br></br>
                        <span style={{margin:"25px"}}>{one.Country1}:  {one.V1}Votes</span><span>{one.Country2}:  {one.V2}Votes</span> 
                        {one.Country3!=""?<span style={{margin:"25px"}}>{one.Country3}:  {one.V3}Votes</span>: <span></span>}
                      </div>
              )}             
        </div>
      </div>
    </div>
  )
}

export default Table