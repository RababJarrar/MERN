import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Display from './components/Display';
import React, { useState } from 'react'

function App() {
  const[todos,setTodos]=useState([]);

  return (
    <div className="App">
        <List />
    </div>
  );
}

export default App;
