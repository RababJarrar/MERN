import React, { useState } from 'react'

const List = () => {

    const[mission,setMission]=useState([]);
    const[textoftask, setTextoftask]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        addfun(textoftask);
    }

    const addfun =(x)=>{
      const onetask ={text:x,status:false}
        setMission([...mission,onetask])
    }
    const fun_check =(p)=>{
      console.log(mission[p].status);
      mission[p].status=!mission[p].status;
        setMission([...mission]);

    }
    const fun_delete=(id)=>{      
      setMission(mission.filter((one,idx)=>id!=idx))
    }
    // if({item.status} == false){style={{textDecorationLine:'line-through'}}} 
    const style1={
      textDecorationLine:'line-through'
    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={(e)=>setTextoftask(e.target.value)} /><br></br>
        <input type="submit" value="Add"/>
      </form>
      <hr></hr>
      <div>       
            { mission.map( (item, i) =>
                  <p key={i}> 
                  {/* <p key={i} style={item.status? style1:null}> */}
                  <input type="checkbox" checked={item.status}  onChange={(e)=>fun_check(i)}/>
                  {item.status? <span style={style1}>{ item.text } </span>: <span >{ item.text }</span>}                  
                  <button onClick={(e)=>fun_delete(i)}>Delete</button>                                 
                  </p>  
                        )                      
            }
           
      </div>
    </div>
  )
}
export default List
