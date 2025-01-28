import React from 'react'
import Nav from './navbar/Nav'
import { Outlet } from 'react-router-dom'
import Mouse from './mouse/Mouse'
import './App.css'

const Layout = () => {
  return (
    <>
    <Mouse/>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default Layout
