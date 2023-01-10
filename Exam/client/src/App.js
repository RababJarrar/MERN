import './App.css';
import {Routes,Route} from "react-router-dom";
import Main from './views/Main';
import Form from './views/Form';
import Details from './views/Details';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Contests from './views/Contests';


function App() {
  const[V1 , setV1]= useState(); 
  const[V2 , setV2]= useState(); 
  const[V3 , setV3]= useState(); 
  const navigate = useNavigate();
  const{id}=useParams();
  const [CompetitionV1, setCompetitionV1] = useState("");

  const edit1=(id,V1)=>{
    console.log(id)
    axios.put('http://localhost:8000/api/edit/competition/'+id ,{V1:V1+1})   
      .then(res=>{
        navigate("contests/"+id);
      })      
    } 
    const edit2=(id,V2)=>{
      console.log(id)
      axios.put('http://localhost:8000/api/edit/competition/'+id ,{V2:V2+1})   
        .then(res=>{
          navigate("contests/"+id);
        })      
      } 
      const edit3=(id,V3)=>{
        console.log(id)
        axios.put('http://localhost:8000/api/edit/competition/'+id ,{V3:V3+1})   
          .then(res=>{
            navigate("contests/"+id);
          })      
        } 
  return (
    <div className="App">      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="contests/new" element={<Form />} />
        <Route path="/choose/:id" element={<Details edit1={edit1} edit2={edit2} edit3={edit3}/>} />   
        <Route path="contests/:id" element={<Contests/>} />
      </Routes>
    </div>
  );
}

export default App;

