import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

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
        console.log(res.data.message) //string
        setmessage(res.data.message)
        console.log(res.data.data) //array
        setusers(res.data.data)
        setisLoading(false)
    }

    useEffect(()=>{
        getApiCall()
    },[])

    const deleteUser = async(id)=>{
        //delete api
        //url
        //https://node5.onrender.com/user/user/id
        //DELETE FROM USERS WHERE ID  = ?
        const res = await axios.delete("https://node5.onrender.com/user/user/"+id)
        //error success
        console.log(res)
        if(res.status == 204){
            //alert("user deleteed...")
            toast.success("user deleted...")
            getApiCall()
        }
    }

    const searchHandler = async(value)=>{
        console.log(value)
         const res = await  axios.get(`https://node5.onrender.com/user/filter?name=${value}`)
         setusers(res.data.data)
    }

  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <Loader/>
        }
        <h1>API DEMO 1</h1>
        {/* <button onClick={()=>{getApiCall()}}>GET</button> */}
        {message}
        {/* <in onch=={}> */}
        <input type='text' onChange={(event)=>{searchHandler(event.target.value)}}></input>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>ISACTIVE</th>
                    <th>PASSWORD</th>
                    <th>ACTION</th>
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
                            <td>
                            <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>DELETE</button>
                            <Link to={`/updateuser/${user._id}`} className='btn btn-warning' style={{marginLeft:"2px"}}>update</Link>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
