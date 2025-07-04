import axios from 'axios'
import React, { useState } from 'react'

export const Apidemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getApiCall=async()=>{

        //promise-->async await , then catch
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("axios object",res)
        console.log(res.data)
        console.log(res.data.message)
        setmessage(res.data.message)
        console.log(res.data.data)
        setusers(res.data.data)


    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 1</h1>
        <button onClick={()=>{getApiCall()}}>GET</button>
        {message}
        {
            users.map((user)=>{
                return<li>{user.name}</li>
            })
        }
    </div>
  )
}
