import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Header} from "./components/Header.jsx"
import Content from './components/Content.jsx'
import { Footer } from './components/Footer.jsx'
//import './App.css'

//component..
function App() {

 
  return (
    <div>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      
    </div>
  )
}

export default App
