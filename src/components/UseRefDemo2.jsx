import React, { useEffect, useRef } from 'react'

export const UseRefDemo2 = () => {
    const divref = useRef(null)
    useEffect(() => {
      
        divref.current.scrollIntoView({behavior:"smooth"})
      
    }, [])
    
  return (
    <div>
        <h1>USE REF DEMO 2</h1>
        <div style={{height:500,backgroundColor:"orange",border:"1 px solid black"}}></div>
        <div style={{height:800,backgroundColor:"white",border:"1 px solid black"}}></div>
        <div style={{height:400,backgroundColor:"green",border:"1 px solid black"}} ref={divref}></div>
        
    </div>
  )
}
