import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TablePlayers from '../components/TablePlayers';

const Main = () => {
    const[players, Setplayers]=useState("")
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
        .then(res=>{
            Setplayers(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    const removeFromDom = j=>{
      Setplayers(players.filter(one=>one._id !=j));
    }

  return (
    <div>
        {loaded && <TablePlayers players={players} removeFromDom={removeFromDom}/>}

    </div>
  )
}

export default Main
