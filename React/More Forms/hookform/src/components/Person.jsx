import React ,{useState} from 'react'

const divstyle = {
  padding: '12px 15px',
  width: 350,
  marginLeft:'35%',
  border:'solid 1px grey',
  backgroundColor:"#f1f3f4"
};


const Person = (props) => {
const [firstname,setFirstname]=useState("");
const [fnameError, setFirstnameError] = useState("");

const [lastname,setLastname]=useState("");
const [lnameError, setLastnameError] = useState("");

const [email,setEmail]=useState("");
const [emailError, setEmailError] = useState("");

const [pass,setPass]=useState("");
const [passError, setPassError] = useState("");

const [confirmpass,setConfirmpass]=useState("");
const [confirmpassError, setConfirmpassError] = useState("");

const handlefname = (e) => {      
        if(e.target.value.length < 2) {
            setFirstnameError("First Name must be 2 characters or longer!");
        } else {
            setFirstname(e.target.value);
            setFirstnameError("");
        }
    }
const handlelname = (e) => {      
        if(e.target.value.length < 2) {
          setLastnameError("Last Name must be 2 characters or longer!");
        } else {
            setLastname(e.target.value);
            setLastnameError("");
        }
    }
const handleemail = (e) => {      
        if(e.target.value.length < 2) {
          setEmailError("Email must be 2 characters or longer!");
        } else {
            setEmail(e.target.value);
            setEmailError("");
        }
    }
const handlepass = (ee) => {      
        if(ee.target.value.length < 2) {
            setPassError("Password must be at least 8 characters!");
        } else {
            setPass(ee.target.value);
            setPassError("");
        }
    }
const handlematch = (e) => {      
      if(e.target.value != pass) {
        setConfirmpassError("Password must be matched");
      } else {
          setConfirmpass(e.target.value);
          setConfirmpassError("");
      }
  }
  return (
    <div>
      <form>
        <div style={ divstyle }>
          <label>First Name </label>
          <input type="text" onChange={ handlefname}></input> <br></br>         
        </div>
        {fnameError}<br></br>   
        <div style={ divstyle }>
          <label>Last Name </label>
          <input type="text" onChange={ handlelname}></input><br></br>          
        </div>
        {lnameError}<br></br>   
        <div style={ divstyle }>
          <label>Email </label>
          <input type="text" onChange={ handleemail}></input><br></br>          
        </div>
        {emailError}<br></br>   
        <div style={ divstyle }>
          <label>Password </label>
          <input type="password" onChange={handlepass}></input><br></br>         
        </div>
        {passError}<br></br>   
        <div style={ divstyle }>
          <label>Confirm Password </label>
          <input type="password" onChange={ handlematch}></input><br></br>   
        </div>
        {confirmpassError}
      </form>
    </div>
    
    
  )
}

export default Person
