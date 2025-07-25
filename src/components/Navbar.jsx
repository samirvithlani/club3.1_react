import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      {/* <li class="nav-item active">
        <Link class="nav-link" to="/movies">Movies</Link>
      </li>

      <li class="nav-item">
        <Link class="nav-link" to="/shows">Shows</Link>
      </li>
    
      
      <li class="nav-item">
        <Link class="nav-link" to="/useStateDemo">useStateDemo</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/useStateDemo2">useStateDemo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/useStateDemo3">useStateDemo3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/inputdemo1">input demo 1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/usememo1">usememo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/findbomb">find bomb</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo1">form demo1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo2">form demo2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo3">form demo3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/formdemo4">form demo4</Link>
      </li> */}
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo1">API DEMO 1</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo111">API DEMO 111</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo2">API DEMO 2</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo3">API DEMO 3</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/apidemo5">API DEMO 5</Link>
      </li>
      
      <li class="nav-item">
        <Link class="nav-link" to="/useeffetdemo">useeffet DEMO </Link>
      </li>
    </ul>
    
  </div>
</nav>
  )
}
