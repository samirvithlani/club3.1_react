import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetail = () => {
    const imdbId = useParams().id
    const [detail, setdetail] = useState({})
    const getMovieDetail = async()=>{

        const res = await axios.get(`http://www.omdbapi.com/?apikey=9d57be0b&i=${imdbId}`)
        console.log(res.data)
        setdetail(res.data)
    }
    useEffect(()=>{
        getMovieDetail()
    },[])
  return (
    <div>
        <h1>MOVE DETAIL</h1>
        {/* <button onClick={()=>{getMovieDetail()}}>GET</button> */}
        <h1>TITLE ={detail.Title}</h1>
        <h3>Year = {detail.Year}</h3>
        <img src={detail.Poster}></img>
    </div>
  )
}
