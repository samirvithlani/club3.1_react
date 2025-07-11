import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo11 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const getApiCall = async()=>{


        const res = await axios.get("https://node5.onrender.com/user/user") //res == axios object..
        console.log(res)
        //api res
        console.log(res.data)
        setmessage(res.data.message)
        setusers(res.data.data)


    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 11</h1>
        {message}
        <button onClick={()=>{getApiCall()}}>GET</button>
        {
            users.map((user)=>{
                return <li>{user.name}</li>
            })
        }
    </div>
  )
}
