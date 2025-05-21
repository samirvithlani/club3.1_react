import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    //const[loadnig,setLoading]=useState(true)
    const [loading, setloading] = useState(true) //boolean
    const stopLoader =()=>{
        setloading(false)
    }
    setTimeout(() => {
        setloading(false)
    }, 3000);
  return (
    <div style={{textAlign:"center"}}>
        <h1>UseStateDemo2</h1>
        {
            loading == true && <h1>Loading.......</h1>
        }
        <button onClick={()=>{stopLoader()}}>STOP</button>
    </div>
  )
}
