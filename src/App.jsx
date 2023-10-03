import { useState } from 'react'
// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Whatsapp from './components/Whatsapp/Whatsapp'


function App() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    <Whatsapp />
    </>
  )
}

export default App
