import React, { useState } from 'react'

export const InputDemo1 = () => {
    const [name, setname] = useState("")
    const [age, setage] = useState()
    const [isSubbmited, setisSubbmited] = useState(false)

    const nameHandler = (event)=>{

        console.log(event.target.value)
        setname(event.target.value)
    }

    const submitHandler = ()=>{
        //alert(`name = ${name} age=${age}`)
        setisSubbmited(true)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>InputDemo1</h1>
        <div>
            <label>NAME</label>
            <input type='text' onChange={(event)=>{nameHandler(event)}}></input>
            {/* {name} */}
        </div>
        <div>
            <label>AGE</label>
            <input type='text' onChange={(event)=>{setage(event.target.value)}}></input>
            {/* {age} */}
        </div>
        <div>
            <button onClick={()=>{submitHandler()}}>ADD</button>
        </div>
        {
            isSubbmited == true &&  <div>
            <h1>OUTPUT</h1>
            <h1>NAME = {name}</h1>
            <h2>AGE ={age}</h2>
        </div>
        }
        
    </div>
  )
}
