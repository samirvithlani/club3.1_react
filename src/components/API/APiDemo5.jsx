import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const APiDemo5 = () => {

  const navigate = useNavigate()
  const [isLoading, setisLoading] = useState(false)

  const addUser = async()=>{

    const userObj = {
      name:"jayraj",
      email:"jayraj@yopmail.com",
      age:25,
      isActive:true,
      password:"jayraj123"
    }

    setisLoading(true)
    const res = await axios.post("https://node5.onrender.com/user/user",userObj)
    console.log(res) //api respone...
    if(res.status==201){
      //alert("user added..")
      toast.success("user added..")
      setisLoading(false)
      navigate("/apidemo1")
      
    }
    else{
      alert("user not added..")
      setisLoading(false)
    }

  }
  return (
    <div style={{textAlign:"center"}}>
        <h1>APiDemo5 POST API</h1>
        <button onClick={()=>{addUser()}} className='btn btn-info'>ADD</button>
    </div>
  )
}
