import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const ApiDemo3 = () => {
    const [movies, setmovies] = useState([])
    const [movieName, setmovieName] = useState("")
    const getmovieeData = async()=>{

        //apikey
        //s 
        //query params
        //url?..&
        console.log(movieName)
        //const res = await axios.get(`http://www.omdbapi.com/?apikey=9d57be0b&s=Titanic`)
        const res = await axios.get(`http://www.omdbapi.com/?apikey=9d57be0b&s=${movieName}`)
        console.log(res.data.Search)
        setmovies(res.data.Search)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>API DEMO 3</h1>
        <input type='text' onChange={(event)=>{setmovieName(event.target.value)}}></input>
        
        <button onClick={()=>{getmovieeData()}}>SEARCH</button>
        <div className='container'>
            <div className='row' style={{padding:"2px",margin:"10px"}}>
                {
                    movies.map((movie)=>{
                        return <div className='card' style={{height:"auto",width:"auto",margin:"20px"}}>
                            <h1>NAME = {movie.Title}</h1>
                            <h2>YEAR = {movie.Year}</h2>
                            <p>IMDB = {movie.imdbID}</p>
                            <img style={{height:"100px",width:"100px"}} src={movie.Poster}></img>
                            <Link to={`/moviedetail/${movie.imdbID}`}>DETAIL</Link>
                        </div>
                    })
                }
            </div>
        </div>
    </div>
  )
}
