// import './App.css';
// import Main from './views/Main';
// import React, { useEffect, useState } from 'react';
// import {Routes,Route,Link, useNavigate} from "react-router-dom";
// import AuthorForm from './views/AuthorForm';
// import axios from 'axios';
// import Update from './views/Update';

// function App() {
//   const [authors, setAuthors]=useState([]);
//   const [loaded, setLoaded]=useState(false);
//   const [errors,setErrors]=useState([]);
//   const navigate = useNavigate();
//   const [author, setAuthor]=useState("");

//   useEffect(() =>{
//     axios.get('http://localhost:8000/api/authors')
//     .then(res =>{
//       setAuthors(res.data)
//       setLoaded(true);
//     });
//   },[])

//   const createAuthor = x =>{
//     axios.post('http://localhost:8000/api/create/author', x)
//     .then(res=>{
//       setAuthors([...authors,res.data]);navigate("/");
//     })
//     .catch(err=>{
//       const errorResponse = err.response.data.errors;
//       const errorArray =[];
//       for (const key of Object.keys(errorResponse)){
//           errorArray.push(errorResponse[key].message)
//       }
//       setErrors(errorArray);
//     })
//   }

//   useEffect(()=>{
//     axios.get('http://localhost:8000/api/author/:id')
//         .then(res =>{
//             setAuthor(res.data);
//             setLoaded(true);
//         })
// },[]);

//   return (
//     <div className="App">      
//       <Routes>
//         <Route path="/" element={<Main />} />
//         <Route path="/new" element={ loaded&& <AuthorForm onSubmitProp={createAuthor} initialName="" errors={errors}/>} />
//         <Route path="/edit/:id" element={<Update />} id={author._id} />   
//       </Routes>
//     </div>
//   );
// }
// export default App;


import './App.css';
import Main from './views/Main';
import React from 'react';
import {Routes,Route,Link} from "react-router-dom";
import AuthorForm from './views/AuthorForm';
import Update from './views/Update';

function App() {
  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<AuthorForm />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
