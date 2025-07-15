import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'

export const Apidemo1 = () => {
    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])
    const [isLoading, setisLoading] = useState(false)

    const getApiCall=async()=>{

        setisLoading(true)
        //promise-->async await , then catch
        const res = await axios.get("https://node5.onrender.com/user/user")
        console.log("axios object",res)
        console.log(res.data)
        console.log(res.data.message)
        setmessage(res.data.message)
        console.log(res.data.data)
        setusers(res.data.data)
        setisLoading(false)


    }

    useEffect(()=>{
        getApiCall()
    },[])
  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <Loader/>
        }
        <h1>API DEMO 1</h1>
        {/* <button onClick={()=>{getApiCall()}}>GET</button> */}
        {message}
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ISACTIVE</th>
                    <th>PASSWORD</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user)=>{
                        return<tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive == true ? "Active":"Not Active"}</td>
                            <td>{user.password ? user.password :"N/A"}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
