import React, { useEffect, useRef, useState } from 'react'

export const UseRefDemo3 = () => {

    const [count, setcount] = useState(0) //1

    const countref  = useRef(0)
    useEffect(() =>{
        countref.current++;
    },[count])
  return (
    <div>
        <h1>USE REF DEMO 3</h1>
        <button onClick={() => setcount(count + 1)}>Count {count}</button>
        <h1>
            Count Ref: {countref.current}
        </h1>
    </div>
  )
}
