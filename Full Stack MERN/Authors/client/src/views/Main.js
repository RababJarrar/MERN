import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableAuthors from '../components/TableAuthors';

const Main = () => {
    const[authors, setAuthors]=useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
        .then(res=>{
            setAuthors(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    const removefunc = j=>{
      setAuthors(authors.filter(one=>one._id !=j));
    }

  return (
    <div>
        {loaded && <TableAuthors authors={authors} remove={removefunc}/>}
    </div>
  )
}

export default Main
