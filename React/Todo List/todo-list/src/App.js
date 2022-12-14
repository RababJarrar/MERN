import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Display from './components/Display';
import React, { useState } from 'react'

function App() {
  const[todos,setTodos]=useState([]);

  const fun1=(todo)=>{
    setTodos([...todos,todo])
  }
const deletetask=(id)=>{
  setTodos(todos.filter((todo,i)=>id!=i));
  // one called todo
}
const updatetask=(id)=>{
   const tasktoupdate=todos.filter((todo,i)=>i==id);
   // array of one object
   tasktoupdate[0].completed=!tasktoupdate[0].completed;
   setTodos([...todos]);
}

  return (
    <div className="App">
        <List todos={todos} myfun={fun1}/>
        <Display todos={todos} deleteme={deletetask} updatetask={updatetask}/>
    </div>
  );
}

export default App;
