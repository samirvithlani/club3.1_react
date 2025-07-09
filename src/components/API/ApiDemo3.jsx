import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo3 = () => {
    const [movies, setmovies] = useState([])
    const getmovieeData = async()=>{

        //apikey
        //s 
        //query params
        //url?..&
        const res = await axios.get(`http://www.omdbapi.com/?apikey=9d57be0b&s=Titanic`)
        console.log(res.data.Search)
        setmovies(res.data.Search)
    }
  return (
    <div>
        <h1>API DEMO 3</h1>
        <button onClick={()=>{getmovieeData()}}>GET</button>
        <div className='container'>
            <div className='row' style={{padding:"2px",margin:"10px"}}>
                {
                    movies.map((movie)=>{
                        return <div className='card' style={{height:"300px",width:"300px",margin:"20px"}}>
                            <h1>NAME = {movie.Title}</h1>
                            <h2>YEAR = {movie.Year}</h2>
                            <img style={{height:"100px",width:"100px"}} src={movie.Poster}></img>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
