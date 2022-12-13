import React, {useState, useEffect} from 'react';
import axios from 'axios'



const Pokemon = () => {
    const[ourres, setOurres]=useState([])
    const[load, setLoad]=useState(false)

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
            .then(resp => {console.log (resp);setOurres(resp.data.results)})
       }, []); 
   
  return (
    <div>
        <button  onClick={()=>(setLoad(true))}>Fetch Pokemon</button>
        {load && ourres.map((pok,i) => <p key={i}>{pok.name} </p>)}
    </div>
  )
}

export default Pokemon
