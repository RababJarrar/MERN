import React ,{useState} from 'react'

const Form = (props) => {
    const[color, setColor] = useState("");

    const handleform =(e)=>{
        e.preventDefault();
        props.fun1(color);
    }
    

    return (
    <div>
        <form onSubmit={handleform}>
           <label>Color </label>
           <input type="text" onChange={e=> setColor(e.target.value)}></input>
            <button>Add</button>
        </form>
        <hr></hr>
    </div>
  )
}

export default Form
