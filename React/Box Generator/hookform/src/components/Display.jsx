
import React, { useState } from 'react'

    const Display = (props) => {

        return (
            <div style={{display:"flex",}   }>
                {props.new.map((item,i)=><div style={{backgroundColor:item, width:100, height:100 ,margin:20,}}>{item}</div>)}
            </div>
        )
    }

    export default Display
