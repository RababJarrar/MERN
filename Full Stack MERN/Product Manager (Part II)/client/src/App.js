import { Router } from '@reach/router';
import React from 'react';
import Details from './views/Details';
import Main from './views/Main';
function App() {
  return (
    <div className="App">
      
          
      <Router>
          <Main path="/" />
          <Details path="/:id"/>
      </Router>
    </div>
  );
}
export default App;

