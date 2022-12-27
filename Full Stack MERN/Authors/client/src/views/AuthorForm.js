import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom";

const AuthorForm = () => {
    const[Name , setName]= useState("");
    const [errors,setErrors]=useState([]);
    const navigate = useNavigate();
    
const onSubmitHandler = e =>{
    e.preventDefault();
    axios.post('http://localhost:8000/api/create/author',{
        Name,
    })
    .then(res=>{console.log(res); setName("");navigate("/");  })
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
            <p>Add a new author</p>
            <form onSubmit={onSubmitHandler} style={{border:'1px solid black',width:'220px',height:'150px',textAlign:'left' ,paddingLeft:'20px'}}>
                {errors.map((one, idx)=>
                    <p key={idx}>{one}</p>
                )}
                    <p>
                        <label>Name</label><br/>
                        <input type="text" onChange={e => setName(e.target.value)} value={Name}/>
                    </p>
                    <input type="submit"/>  <button><Link to={"/"} style={{textDecoration: 'none'}}>Cancel </Link></button>     
            </form>            
        </div>
    )
}
export default AuthorForm



// import React, { useState } from 'react'
// import {Link} from "react-router-dom";

// const AuthorForm = (props) => {
//     const[Name , setName]= useState(props.initialName);
    
//     const onSubmitHandler = e =>{
//         e.preventDefault();
//         props.onSubmitProp(Name);       
//     }
//     return (
//         <div style={{width:'250px',textAlign:'left',margin:'auto'}}>
//             <h1>Favorite authors</h1>
//             <p><Link to={"/"}>Home </Link></p>
//             <p>Add a new author</p>
//             <form onSubmit={onSubmitHandler} style={{border:'1px solid black',width:'220px',height:'150px',textAlign:'left' ,paddingLeft:'20px'}}>
//                 {props.errors.map((one, idx)=><p key={idx}>{one}</p>)}
//                 <p>
//                    <label>Name</label><br/>
//                    <input type="text" onChange={e => setName(e.target.value)} value={Name} name="Name"/>
//                 </p>
//                 <input type="submit"/><button><Link to={"/"} style={{textDecoration: 'none'}}>Cancel </Link></button>     
//             </form>            
//         </div>
//     )
// }
// export default AuthorForm