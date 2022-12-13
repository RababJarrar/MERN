import React from 'react'

const Hello = (props) => {
  return (
    <div>
      { isNaN (props.number)? (<h1> The word is : {props.number} </h1> ):
      (<h1> The number is : {props.number} </h1>)
      }
	   

    </div>
  )
}

export default Hello
