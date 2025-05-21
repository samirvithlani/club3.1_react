import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header.jsx"
import Content from './components/Content.jsx'
import { Footer } from './components/Footer.jsx'
import { MapDemo1 } from './components/MapDemo1.jsx'
import { MapDemo2 } from './components/MapDemo2.jsx'
import { MapDemo3 } from './components/MapDemo3.jsx'
import { Route, Routes } from 'react-router-dom'
import { Movies } from './components/hotstar/Movies.jsx'
import { Shows } from './components/hotstar/Shows.jsx'
import { Navbar } from './components/Navbar.jsx'
import { Home } from './components/hotstar/Home.jsx'
import { Error404 } from './components/Error404.jsx'
import { PLayContent } from './components/hotstar/PLayContent.jsx'
import { UseStateDemo } from './components/UseStateDemo.jsx'
import { UseStateDemo2 } from './components/UseStateDemo2.jsx'
//import './App.css'

//component..
function App() {

 
  return (
    <div>
      <Navbar></Navbar>
      
      <Routes>
          <Route path='/' element ={<Home/>}></Route>
          <Route path='/movies' element = {<Movies/>}></Route>
          <Route path='/shows' element = {<Shows/>}></Route>
          <Route path='/playing/:id' element = {<PLayContent/>}></Route>
          <Route path='/useStateDemo' element = {<UseStateDemo/>}></Route>
          <Route path='/useStateDemo2' element = {<UseStateDemo2/>}></Route>
          {/* <Route path='/*' element = {<h1>404</h1>}></Route> */}
          <Route path='/*' element = {<Error404/>}></Route>
      </Routes>
      
      
    </div>
  )
}

export default App
