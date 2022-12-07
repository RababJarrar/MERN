
import './App.css';
import React from 'react';
import PersonCard from './comonents/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Doe"} lastName={"Jane"} age ={45} hairColor={"Black"}/>
      <PersonCard firstName={"Smith"} lastName={"Jane"} age ={35} hairColor={"Black"}/>

    </div>
  );
}

export default App;
