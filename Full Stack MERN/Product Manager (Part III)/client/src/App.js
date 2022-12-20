import { Router } from '@reach/router';
import React from 'react';
import Details from './views/Details';
import Main from './views/Main';
import Update from './views/Update';
function App() {
  return (
    <div className="App">
      
          
      <Router>
          <Main path="/" />
          <Details path="/:id"/>
          <Update path="/product/:id/edit"/>
          
      </Router>
    </div>
  );
}
export default App;

