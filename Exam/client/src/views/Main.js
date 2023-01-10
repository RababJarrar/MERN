import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

const Main = () => {
    const[competitions, setCompetitions]=useState([]);
    const[competitionsTop, setCompetitionsTop]=useState([]);
    const [loaded, setLoaded] = useState(false);
    const [loaded2, setLoaded2] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/competitions')
        .then(res=>{
            setCompetitions(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    useEffect(()=> {
      {competitions.map((one,i)=>{
        one.totalVotes = one.V1+one.V2
        console.log(one.totalVotes)
      })}
      
      axios.get('http://localhost:8000/api/top')
      .then(res => {
        setCompetitionsTop(res.data);
          setLoaded2(true);
      })
      .catch(err => console.error(err));
  }, []);


  return (
    <div>
        {loaded && loaded2 && <Table competitions={competitions} competitionsTop={competitionsTop} />}
    </div>
  )
}

export default Main
