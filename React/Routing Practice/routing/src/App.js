import './App.css';
import React from 'react';
import {Router} from '@reach/router';
import Home from './components/Home';
import Hello from './components/Hello';
import Style from './components/Style';
function App() {
  return (
    <div className="App">
      <Router>
          <Home path="/home" />
          <Hello path="/:number" />
          <Style path="/:text/:fontcolor/:bgcolor" />
      </Router>


    </div>
  );
}

export default App;
