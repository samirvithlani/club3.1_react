import React, { useState } from 'react'

export const UseStateDemo3 = () => {
    const [fruits, setfruits] = useState(["apple","mango","banana"])

    const addFruit = ()=>{

        //spread operator...
        // var x = [...fruits,"orange"]
        // console.log("x...",x)
        // setfruits(x)

        setfruits([...fruits,"orange"])
    }
  return (
    <div>
        <h1>UseStateDemo3</h1>
        {
            fruits.map((f)=>{
                return <li>{f}</li>
            })
        }
        <button onClick={()=>{addFruit()}}>ADD</button>
    </div>
  )
}
