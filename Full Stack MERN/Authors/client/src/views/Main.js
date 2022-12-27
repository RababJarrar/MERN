import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableAuthors from '../components/TableAuthors';

const Main = () => {
    const[authors, Setauthors]=useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            Setauthors(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    const removeFromDom = j=>{
      Setauthors(authors.filter(one=>one._id !=j));
    }

  return (
    <div>
        {loaded && <TableAuthors authors={authors} removeFromDom={removeFromDom}/>}

    </div>
  )
}

export default Main
