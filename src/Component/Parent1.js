import React, { useCallback, useState } from 'react'
import Child1 from './Child1';

function Parent1() {
    const [data,setData]=useState("");
    const handleData=useCallback((childData)=>{
        console.log("childData",childData);
        setData(childData)
    },[])
  return (
    <div>
        <h1>Data from child:{data}</h1>
        <Child1 sendData={handleData}/>
    </div>
  )
}

export default Parent1
