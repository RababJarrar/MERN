import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Routes,Route} from "react-router-dom";
import PlayerForm from './views/PlayerForm';
import Main from './views/Main';
import Update from './views/Update';
import { useNavigate } from "react-router-dom";

function App() {
  const [Players, setPlayers] = useState([]);
  const[errors,setErrors]=useState([]);
  // const [loaded, setLoaded] = useState(false);                            // ايش بستفيد منها ؟؟
  const navigate = useNavigate();

  // useEffect(() => {                                                       // ايش بستفيد منها ؟؟
  //   axios.get('http://localhost:8000/api/authors')
  //       .then(res =>{ 
  //           setPlayers(res.data)
  //           setLoaded(true);
  //       });
  // }, [])

  const createPlayer =p=>{
    axios.post('http://localhost:8000/api/create/player',p)
    .then(res=>{setPlayers([...Players,res.data]);navigate("/");  })        //ايش بستفيد منها ؟؟
    .catch(err=>{
        const errorResponse = err.response.data.errors;
        const errorArray =[];
        for (const key of Object.keys(errorResponse)){
            errorArray.push(errorResponse[key].message)
        }
        setErrors(errorArray);
    })  
  }

  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/players/list" element={<Main />} />
        <Route path="/players/addplayer" element={<PlayerForm onSubmitProp={createPlayer} initialName="" initialPosition="" errors={errors}/>} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;


//ok without Reusing
// import './App.css';
// import Main from './views/Main';
// import React from 'react';
// import {Routes,Route,Link} from "react-router-dom";
// import AuthorForm from './views/AuthorForm';
// import Update from './views/Update';

// function App() {
//   return (
//     <div className="App">      
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/new" element={<AuthorForm />} />
//         <Route path="/edit/:id" element={<Update />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
