import React, { useState } from 'react'

export const UseStateDemo = () => {
    //var count =0;

    const [count,setCount]= useState(0) //number
    //count --- stateVariable
    //setCount ->function -->use -->count chnage --> setCount -->
    //0 intial value
    const increseCount = ()=>{
        //count++
        setCount(count+1)
        console.log("count = ",count)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo</h1>
        <h1>COUNT = {count}</h1>
        {/* <button onClick={increseCount}>increse</button> */}
        {/* //dont give () */}
        <button onClick={()=>{increseCount()}}>increse</button>
    </div>
  )
}
