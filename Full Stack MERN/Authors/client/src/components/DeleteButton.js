import axios from 'axios'
import React from 'react'

const DeleteButton = (props) => {

    const deleteAuthor=e=>{
        axios.delete('http://localhost:8000/api/delete/author/'+props.authorID)
        .then(res=>props.successCallback())
    }
  return (
    <button onClick={deleteAuthor}>Delete</button>
  )
}

export default DeleteButton
