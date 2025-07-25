import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../Loader'
import { toast } from 'react-toastify'
import { useFetchData } from '../../hooks/ApiHook'

export const Apidemo111 = () => {
    
    const {data,isLoading} =useFetchData("https://node5.onrender.com/user/user")

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

  return (
    <div style={{textAlign:"center"}}>
        {
            isLoading && <Loader/>
        }
        <h1>API DEMO 1</h1>
        {/* <button onClick={()=>{getApiCall()}}>GET</button> */}
        
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
                    data.data?.map((user)=>{
                        return<tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.isActive == true ? "Active":"Not Active"}</td>
                            <td>{user.password ? user.password :"N/A"}</td>
                            <button onClick={()=>{deleteUser(user._id)}} className='btn btn-danger'>DELETE</button>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
