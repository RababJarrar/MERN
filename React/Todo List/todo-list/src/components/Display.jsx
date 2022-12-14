import React, { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      { props.todos.map((todo,idx)=><p>{todo.text}<input type="checkbox" 
        onChange={e=>{props.updatetask(idx)}} checked={todo.completed}/>
        <button onClick={e=>props.deleteme(idx)}>Delete</button> </p> )
      }
    </div>
  )
}

export default Display
