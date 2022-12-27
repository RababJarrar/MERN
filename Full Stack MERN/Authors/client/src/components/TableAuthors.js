import axios from 'axios';
import React from 'react'
import {Link} from "react-router-dom";
    

const TableAuthors = (props) => {

  const deleteAuthor=(hh)=>{
    axios.delete('http://localhost:8000/api/delete/author/'+hh)
    .then(res=>{props.remove(hh)})
    .catch(err => console.error(err));
  }
   
  return (    
    <div style={{width:'350px',textAlign:'left',margin:'auto'}}>
      <h1>Favorite authors</h1>
      <p><Link to={"/new"}>Add an author </Link></p>
      <p>We have qutes by: </p>
          <table style={{ borderCollapse: 'collapse'}}>
            <tr style={{height:'50px'}}>
              <td style={{border:' 1px solid black',width:'150px'}}>Author</td>
              <td style={{border:' 1px solid black',width:'200px'}}>Actions Available</td>
            </tr>
            {props.authors.map((one, i) => 
                <tr style={{height:'30px'}} key={i}>
                    <td  style={{border:' 1px solid black'}}>{one.Name}</td>   
                    <td style={{border:' 1px solid black'}}>
                      <button><Link to={"/edit/"+one._id} style={{textDecoration: 'none'}}>Edit</Link></button>
                      <button onClick={e=>{deleteAuthor(one._id)}}>Delete</button>                      
                    </td>         
                </tr>
            )}             
          </table>
    </div>
  )
}

export default TableAuthors
