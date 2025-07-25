import React from 'react'
import { useFetchData } from '../../hooks/ApiHook'
import { Loader } from '../Loader'

export const ApiDemo112 = () => {
    const {data,isLoading}=useFetchData("https://dummyjson.com/products")

  return (
    <div style={{textAlign:"center"}}>
        <h1>CUST HOOK DEMO 2s</h1>
        {
            isLoading && <Loader/>
        }
        {
            data.products?.map((pr)=>{
                return <li>{pr.title}</li>
            })
        }
    </div>
  )
}
