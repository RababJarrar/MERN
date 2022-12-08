import React ,{useState} from 'react'

const divstyle = {
  padding: '12px 15px',
  width: 350,
  marginLeft:'35%',
  
};


const Person = (props) => {
const [firstname,setFirstname]=useState("");
const [lastname,setLastname]=useState("");
const [email,setEmail]=useState("");
const [pass,setPass]=useState("");
const [confirmpass,setConfirmpass]=useState("");

  return (
    <div>
      <form>
      <div style={ divstyle }>
      <label>First Name </label>
      <input type="text" onChange={ (e) => setFirstname(e.target.value)}></input> 
      </div>
      <div style={ divstyle }>
      <label>Last Name </label>
      <input type="text" onChange={ (e) => setLastname(e.target.value)}></input>
      </div>
      <div style={ divstyle }>
      <label>Email </label>
      <input type="text" onChange={ (e) => setEmail(e.target.value)}></input>
      </div>
      <div style={ divstyle }>
      <label>Password </label>
      <input type="password" onChange={ (e) => setPass(e.target.value)}></input>
      </div>
      <div style={ divstyle }>
      <label>Confirm Password </label>
      <input type="password" onChange={ (e) => setConfirmpass(e.target.value)}></input>
      </div>
      </form>
      <br></br>
      <h3>Your Form Data</h3>
      <p>First Name:{firstname}</p>
      <p>Last Name:{lastname}</p>
      <p>Email:{email}</p>
      <p>Password:{pass}</p>
      <p>Confirm Password:{confirmpass}</p>
    </div>
    
    
  )
}

export default Person
