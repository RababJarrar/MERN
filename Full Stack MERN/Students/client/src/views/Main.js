import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';

const Main = () => {
    const[students, setstudents]=useState([]);
    const [loaded, setLoaded] = useState(false);
    const testingArray=[];
    const passArray=[];

    useEffect(()=>{
        axios.get('http://localhost:8000/api/students')
        .then(res=>{
            setstudents(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    const removefunc = j=>{
        axios.delete('http://localhost:8000/api/delete/student/'+j)
        .then(res=>
          setstudents(students.filter (one=>one._id!=j)))
    }

      const editfunc=(id)=>{
      axios.put('http://localhost:8000/api/edit/student/'+id,  {Status:"pass"} )
        .then(res=>{
          const objindex =students.findIndex((obj=>obj._id ==id));
          const s1 =[...students.slice(0,objindex),{ ...students[objindex],"Status":"pass"}, ...students.slice(objindex+1)]; //+1
          setstudents(s1);
        })      
    }

    const createAuthor =p=>{
      axios.post('http://localhost:8000/api/create/student',{
         Name:p ,
         Status:"testing"})
      .then(res=>{setstudents([...students,res.data]);
      console.log(res.data);
      })        
      .catch(err=>{
          console.log(err)
      })  
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
      <Form onSubmitProp={createAuthor} initialName="" /><hr/>
      <div style={{display:"flex",margin:'auto',width:"700px"}}>
        <div style={{ border:'.5px solid black',flex:"1"}}>{loaded && <List students={testingArray} edit={editfunc} remove={removefunc}/>}</div>
        <div style={{ border:'.5px solid black',flex:"1"}}>{loaded && <List students={passArray} edit={editfunc} remove={removefunc}/>}</div>
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