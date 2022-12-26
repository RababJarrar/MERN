import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Form = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    searchTerm? navigate(`/${searchTerm}/${id}`): navigate("/");
    setId("");
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <label>Search for:</label>
          <select onChange={e => setSearchTerm(e.target.value)}>
            <option value={""}>- select -</option>
            <option value={"people"}>People</option>
            <option value={"planets"}>Planets</option>
          </select>
          {/* {console.log(searchTerm)} */}
          <label>ID:</label>
          <input type={"text"} onChange={(e) => setId(e.target.value)} value={id} />
          <input type={"submit"} value="Search" />
        </form>
    </div>
  )
}

export default Form
