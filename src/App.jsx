import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Feature from './components/Feature'
import Blog from './components/Blog'


function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
