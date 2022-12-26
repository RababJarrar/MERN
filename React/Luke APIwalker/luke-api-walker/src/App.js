import './App.css';
import {Route, Routes} from 'react-router-dom';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';

function App() {
  

  return (
    <div className="App">
      <Form />
      <Routes>
        <Route path='/people/:id' element={<People />} />
        <Route path='/planets/:id' element={<Planets />} />
        <Route path='/error' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
