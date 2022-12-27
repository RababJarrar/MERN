import React from 'react'

const List = (props) => {
   
  return (    
    <div >
            {props.students.map((one, i) =>             
            <p>{one.Name} 
              {
              one.Status=="testing"? 
              <button onClick={e=>props.edit(one._id)} style={{backgroundColor:"green"}}>Move to pass</button>: 
              <button onClick={e=>props.remove(one._id)}style={{backgroundColor:"red"}}>Delete </button>
              } 
            </p>       
            )}                         
    </div>
  )
}
export default List