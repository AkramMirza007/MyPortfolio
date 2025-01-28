// import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Nav from './navbar/Nav'
import Intro from './intro/Intro'
import Mouse from './mouse/Mouse'



function App() {
  return (
    <>
    <Mouse/>
    <Nav/>
    <Intro/>
    </>
  )
}

export default App
