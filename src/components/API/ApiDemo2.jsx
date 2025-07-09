import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {
    const [products, setproducts] = useState([])
    const getProducts = async()=>{
        
        const res = await axios.get("https://node5.onrender.com/product/getall")
        console.log(res) //axios object..
        console.log(res.data)
        setproducts(res.data.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2</h1>
        <button onClick={()=>{getProducts()}}>GET</button>
        <table className='table'>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>COLOR</th>
                    <th>UNIT</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((prod)=>{
                        return<tr>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.colors}</td>
                            <td>{prod.unit}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
