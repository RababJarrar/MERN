// import React, { useState } from 'react'

// const List = () => {
//     const[mission,setMission]=useState([]);
//     const[onemission,setOnemission]=useState("");
    
//     const handleform =(e)=>{
//         e.prverntDeafult();
//         addfun(onemission);
//     }
    
//     const addfun = (x) =>{
//         setMission([...mission,x]);
//     }
//     return (
//     <div>
//         <form onSubmit={handleform}>
            
//             <input type="text" onChange={e=>setOnemission(e.target.value)}/><br />
//             <input type="submit" value="Add" />
//         </form>
//         <div>
        
//         { mission.map( (item, i) => <p key={ i }>{item}</p>)}
//         {console.log(mission)}
//         </div>
//     </div>
    
//   )
// }

// export default List
import React, { useState } from 'react'

const List = () => {

    const[mission,setMission]=useState([]);
    const[onemission, setOneMission]=useState("")
    const [isdone, setIsDone] = useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        addfun(onemission);

    }

    const addfun =(x)=>{
        setMission([...mission,x])

    }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text" onChange={(e)=>setOneMission(e.target.value)} /><br></br>
        <input type="submit" value="Add"/>
      </form>
      <hr></hr>
      <div>       
            { mission.map( (item, i) =>
                            <div>
                                
                                <input type="checkbox" checked={isdone} key={i} onChange={e => setIsDone(e.target.checked)}/>{ item }    
                                
                            </div>   
                        )
                        
            }
            {console.log(isdone)}
      </div>

    </div>
  )
}

export default List
