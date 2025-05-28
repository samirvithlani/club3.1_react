import React, { useMemo, useState } from 'react'

export const UseMemoDemo1 = () => {
    const [flag, setFlag] = useState(false)
    //var randomNo = Math.floor(Math.random()*1000)
    var randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[])
    
    console.log(randomNo)
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>USE MEMO</h1>
        <button onClick={()=>{setFlag(flag == true ? false :true)}}>toggle</button>
        {flag?"active":"not active"}
    </div>
  )
}
