import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

const App = () => {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Outlet/>
    </>
    
  )
}

export default App