// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'
// import AuthorForm from './AuthorForm'
// import { useNavigate } from "react-router-dom";

// const Update = (props) => {
//     const [author, setAuthor]=useState();
//     const [loaded, setLoaded]=useState(false);
//     const navigate =useNavigate;
    

//     useEffect(()=>{
//         axios.get('http://localhost:8000/api/author/'+(props.id))
//             .then(res =>{
//                 setAuthor(res.data);
//                 setLoaded(true);
//             })
//     },[]);

//     const updateAuthor = x =>{
//         axios.put('http://localhost:8000/api/edit/author/'+(props.id),x)
//         .then(res => console.log(res))
//         .catch( err => console.log(err))
//         console.log("object")
        
//     }

//   return (
//     <div style={{width:'250px',textAlign:'left',margin:'auto'}}>
//         {loaded && (
//             <>
//                 <AuthorForm onSubmitProp={updateAuthor} initialName={author.Name} />

//             </>
//         )}    
//     </div>
//   )
// }
// export default Update


import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Update = (props) => {
    const[Name , setName]= useState("");
    const [errors,setErrors]=useState([]);
    const navigate = useNavigate();
    const{id}=useParams();
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/author/'+id)
            .then(res =>{
                setName(res.data.Name);
            })
    },[]);

    const updateAuthor = e =>{
        e.preventDefault();
        axios.put('http://localhost:8000/api/edit/author/'+id,{Name})
        .then(res=>{console.log(res); navigate("/");})
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
    <div style={{width:'250px',textAlign:'left',margin:'auto'}}>
        <h1>Favorite authors</h1>
        <p><Link to={"/"}>Home </Link></p>
        <p>Update an author</p>
            <form onSubmit={updateAuthor} style={{border:'1px solid black',width:'220px',height:'150px',textAlign:'left' ,paddingLeft:'20px'}}>
                {errors.map((one, idx)=>
                    <p key={idx}>{one}</p>
                )}
                <p>
                <label>Name</label><br/>
                <input type="text" onChange={e => setName(e.target.value)} value={Name} name="Name"/>
                </p>
                <input type="submit"/>  <button><Link to={"/"} style={{textDecoration: 'none'}}>Cancel </Link></button>     
            </form>                
    </div>
  )
}
export default Update

