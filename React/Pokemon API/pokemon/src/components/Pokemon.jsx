import React, { useEffect, useState } from 'react';

const Pokemon = () => {
const [pok ,setPok]=useState("");
const [status ,setStatus]=useState(false);
useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
        .then(res =>res.json())
        // .then(res =>setPok(res))},[]);
        .then(res =>setPok(res.results))},[]);

  return (
    <div>
        <button onClick={()=>setStatus(true)}>Fetch Pokemon</button>
      {status && pok.map((one, i) =>{
        return( <p key={i}>{one.name}</p>)
      } )}
    </div>
  )
}

export default Pokemon
