import axios from 'axios';
import React from 'react'
import {Link} from "react-router-dom";
    

const TablePlayers = (props) => {

  const deletePlayer=(hh)=>{
    axios.delete('http://localhost:8000/api/delete/player/'+hh)
    .then(res=>{props.removeFromDom(hh)})
    .catch(err => console.error(err));
  }
   
  return (    
    <div style={{width:'900px',textAlign:'left',margin:'auto'}}>
      <h2><Link to={"/players/list"}>List </Link> | <Link to={"/players/addplayer"}>Add Player </Link></h2>
          <table style={{ borderCollapse: 'collapse'}}>
            <tr style={{height:'30px',backgroundColor:"#a0a1b0"}}>
              <td style={{border:' 1px solid black',width:'300px'}}>Player Name</td>
              <td style={{border:' 1px solid black',width:'300px'}}>Preffered Position</td>
              <td style={{border:' 1px solid black',width:'300px'}}>Actions</td>
            </tr>
            {props.players.map((one, i) => 
                <tr style={{height:'30px'}}>
                    <td key={i} style={{border:' 1px solid black'}}>{one.Name}</td>   
                    <td key={i} style={{border:' 1px solid black'}}>{one.Position}</td> 
                    <td style={{border:' 1px solid black'}}>               
                      <button style={{width:'100px',backgroundColor:"red",color:"white"}} onClick={e=>{deletePlayer(one._id)}}>Delete</button>                      
                    </td>         
                </tr>
            )}             
          </table>
    </div>
  )
}

export default TablePlayers
