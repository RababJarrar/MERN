import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom';

const Planets = () => {
    const [planet, setPlanet] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.dev/api/planets/${id}`)
            .then(response => {
                if(response.ok){
                    return response.json();
                }
                throw new Error("error");
            })
            .then(response => setPlanet(response))
            .catch(() => {navigate("/error")})
    }, [id, navigate]);

    return (
        <div>
            <h1>{planet.name}</h1>
            <br></br>
            <p><span><b>Diameter: </b></span>{planet.diameter}</p>
            <p><span><b>climate: </b></span>{planet.climate}</p>
            <p><span><b>Gravity: </b></span>{planet.gravity}</p>
            <p><span><b>Population: </b></span>{planet.population}</p>
            <p><span><b>Terrain: </b></span>{planet.terrain}</p>
            <p>{planet.id}</p>
        </div>
    )
}

export default Planets
