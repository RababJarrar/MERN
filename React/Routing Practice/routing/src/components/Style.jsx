import React from 'react'

const Style = (props) => {
  return (
    <div>
      <h1 style={{backgroundColor:props.bgcolor, color:props.fontcolor}}> The word is : {props.text} </h1>
    </div>
  )
}

export default Style
