import React, { useEffect, useState } from 'react'

export const UseEffectDemo = () => {
    //()={},[]
    const [count, setcount] = useState(0)
    useEffect(()=>{
        console.log("component loaded..")
    },[count])
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseEffectDemo</h1>
        <button onClick={()=>{setcount(count+1)}}>+{count}</button>
    </div>
  )
}
