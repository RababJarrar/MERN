import React, {useState, useEffect} from 'react'
import {useParams, Link, useNavigate} from 'react-router-dom';

const People = () => {
    const [person, setPerson] = useState("");
    const [homeworld, setHomeworld] = useState("");
    const [planetId, setPlanetId] = useState(0);
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then(response =>{
                if(response.ok){
                    return response.json();
                }
                throw new Error("error");
            })
            .then(response => {setPerson(response)})
            .catch(() => {navigate("/error")}) // Fetch promises only reject with a TypeError when a network error occurs. Since 4xx and 5xx responses aren't network errors, there's nothing to catch. You'll need to throw an error yourself to use Promise#catch. (https://stackoverflow.com/questions/38235715/fetch-reject-promise-and-catch-the-error-if-status-is-not-ok)
    }, [id, navigate]);

    useEffect(() => {
        fetch(person.homeworld)
            .then(response => response.json())
            .then(response => {setHomeworld(response.name); setPlanetId(person.homeworld.slice(-2))})
    }, [person.homeworld])

    return (
        <div>
            <h1>{person.name}</h1>
            <br></br>
            <p><span><b>Gender: </b></span>{person.gender}</p>
            <p><span><b>Height: </b></span>{person.height}</p>
            <p><span><b>Mass: </b></span>{person.mass}</p>
            <p><span><b>Hair color: </b></span>{person.hair_color}</p>
            <p><span><b>Eye color: </b></span>{person.eye_color}</p>
            {/* Bonus: output person homeworld and its link */}
            <p><b>Homeworld: </b><Link to={`/planets/${planetId}`}>{homeworld}</Link></p>
        </div>
    )
}

export default People
