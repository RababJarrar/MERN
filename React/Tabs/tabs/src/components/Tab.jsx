import React from 'react'
import { useState } from 'react';

const Tab = () => {
    const array=["Tab1 ","Tab2 ","Tab3 "];
    const[ selectedtab, setSelectedtab]=useState("")
    const display = x =>{
        console.log(x)
        setSelectedtab(x+"is shown here")
    }  
    return (
    <div >
      {array.map((item, id)=><span onClick={e=>display(item)} key={id}>{item}</span>)}
      <hr></hr>
      <p>{selectedtab}</p>
    </div>
  )
}

export default Tab
