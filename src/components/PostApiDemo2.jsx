import axios from 'axios'
import React from 'react'

export const PostApiDemo2 = () => {

    const postUser = async()=>{

        const res = await axios.post("url","data obejct",{
            headers:{
                "Authorization":"Bearer 87a6e693c6ad5316132fb9df78c80553c9fe17fbee4945d3704e2b55fd94c2b5"
            }
        })
    }
  return (
    <div>
        <h1>POST API</h1>
    </div>
  )
}
