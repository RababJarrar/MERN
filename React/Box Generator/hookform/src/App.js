
import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [selectedcolor, setSelectedcolor]= useState([]);
  const fun=(x)=>{
    setSelectedcolor([...selectedcolor,x])

  }
  return (
    <div className="App" >
      <Form fun1={fun}/>
      <Display new={selectedcolor}/>

    </div>
  );
}

export default App;
