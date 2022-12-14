// import React, { useState } from 'react'

// const List = () => {

//     const[mission,setMission]=useState([]);
//     const[onemission, setOneMission]=useState("")
//     const [isdone, setIsDone] = useState(false);

//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         addfun(onemission);
//     }

//     const addfun =(x)=>{
//         setMission([...mission,x])
//     }
//   return (
//     <div>
//       <form onSubmit={handleSubmit} >
//         <input type="text" onChange={(e)=>setOneMission(e.target.value)} /><br></br>
//         <input type="submit" value="Add"/>
//       </form>
//       <hr></hr>
//       <div>       
//             { mission.map( (item, i) =>
//                             <div>                               
//                                 <input type="checkbox" checked={isdone} key={i} onChange={e => setIsDone(e.target.checked)}/>{ item }                                    
//                             </div>   
//                         )                      
//             }
//             {console.log(isdone)}
//       </div>
//     </div>
//   )
// }
// export default List

import React, { useState } from 'react'

const List = (props) => {

  const[todo,setTodo]=useState({});

  const fun1 =(e)=>{
    setTodo({
      // id:props.todos.length,
      text:e.target.value,
      completed:false,
    })
  }
    const handleSubmit=(e)=>{
      props.myfun(todo);
      e.preventDefault();
    }
 
  return (
    <div>
       <form onSubmit={handleSubmit} >
        {/* 27 */}
         <input type="text" onChange={fun1}/><br></br>
         <input type="submit" value="Add"/>
       </form>
       <hr></hr>
       <div>       
            
      </div>

    </div>
  )
}

export default List