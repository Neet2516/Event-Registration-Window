import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Nav from './sections/Nav'
import Home from './pages/Home'
import Login from './pages/Login'

function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />   
    </Routes>
    

    </>
  )
}

export default App
