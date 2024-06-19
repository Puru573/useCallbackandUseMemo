import React,{useState,useMemo, useCallback}from 'react'
import Child from './Child';

function Parent() {
    const [counter,setCounter]=useState(0);
    const [text,setText]=useState("hello");
    const person={
      name:"divya",
      age:18
    }
    function fn(){
      console.log("Hi");
    }
    console.log("parent render")
    const memorization=useMemo(()=>person,[]); // so it will memorize the perosn obj
    const memorizationfn=useCallback(()=>fn(),[]);
  return (
    <div>
      <h1>{text}</h1>
        <button onClick={()=>setCounter(counter+1)}>counter</button>
        <button onClick={()=>setText("bye....")}>text</button>
        <Child counter={counter} person={memorization} fn={memorizationfn}/>
    </div>
  )
}

export default Parent
