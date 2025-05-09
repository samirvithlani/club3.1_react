import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header.jsx"
import Content from './components/Content.jsx'
import { Footer } from './components/Footer.jsx'
import { MapDemo1 } from './components/MapDemo1.jsx'
import { MapDemo2 } from './components/MapDemo2.jsx'
import { MapDemo3 } from './components/MapDemo3.jsx'
//import './App.css'

//component..
function App() {

 
  return (
    <div>
      <Header></Header>
      {/* <Content></Content> */}
      {/* <MapDemo1></MapDemo1> */}
      {/* <MapDemo2></MapDemo2> */}
      <MapDemo3></MapDemo3>
      {/* <Footer></Footer> */}
      
    </div>
  )
}

export default App
