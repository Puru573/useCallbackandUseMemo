import React, { useState } from 'react'

function Child1({sendData}) {
    const [input,setInput]=useState("")
    const handleChange=(e)=>{
        setInput(e.target.value);
    }
    const handleButton=(e)=>{
        console.log("input",input);
        e.preventDefault();
        sendData(input);
    }
  return (
    <div>
        <input type="text" value={input} onChange={handleChange}/>
        <button type="button" onClick={handleButton}>button</button>
    </div>
  )
}

export default Child1
