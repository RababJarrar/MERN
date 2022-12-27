import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';

const Main = () => {
    const[students, setStudents]=useState([]);
    const [loaded, setLoaded] = useState(false);
    const[errors,setErrors]=useState([]);
    const testingArray=[];
    const passArray=[];

    useEffect(()=>{
        axios.get('http://localhost:8000/api/students')
        .then(res=>{
            setStudents(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    const createStudent =(name_stu)=>{
      axios.post('http://localhost:8000/api/create/student',{
         Name:name_stu ,
         Status:"testing"})
      .then(res=>{setStudents([...students,res.data]);})        
      .catch(err=>{
        const errorResponse = err.response.data.errors;
        const errorArray =[];
        for (const key of Object.keys(errorResponse)){
            errorArray.push(errorResponse[key].message)
        }
        setErrors(errorArray);
      })  
    }
  
    const editfun=(id)=>{
    axios.put('http://localhost:8000/api/edit/student/'+id,  {Status:"pass"} )
      .then(res=>{
          const objindex =students.findIndex((obj=>obj._id ==id));
          const s1 =[...students.slice(0,objindex),{ ...students[objindex],"Status":"pass"}, ...students.slice(objindex+1)]; 
          setStudents(s1);
      })      
    }
    
    const removefun = j=>{
      axios.delete('http://localhost:8000/api/delete/student/'+j)
      .then(res=>
        setStudents(students.filter (one=>one._id!=j)))
  }

    students.map((one,i)=>{
    if (one.Status =="testing"){
      testingArray.push(one);
    }
    else if (one.Status =="pass"){
      passArray.push(one);
    }
  })

  return (
    <div>
      <Form onSubmitProp={createStudent} initialName="" errors={errors} /><hr/>
      <div style={{display:"flex",margin:'auto',width:"700px"}}>
        <div style={{ border:'.5px solid black',flex:"1"}}>{loaded && <List students={testingArray} edit={editfun}/>}</div>
        <div style={{ border:'.5px solid black',flex:"1"}}>{loaded && <List students={passArray} remove={removefun}/>}</div>
      </div>
    </div>
  )
}

export default Main


// const update=(j,id,status)=>{
//   if (j==0)
//   axios.put('http://localhost:8000/api/edit/author/'+id,  {status:"pass"} )
//   // const s1 =[...students.slice(0,id),{ ...needThyme[5],"dfdgdfg"}]
// }