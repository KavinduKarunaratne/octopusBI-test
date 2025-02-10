import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginPage from './components/LoginPage'
import OwnerDashboard from './components/OwnerDashboard'
import CustomerItems from './components/CustomerItems'
import CustomerCart from './components/CustomerCart'
import CustomerTrack from './components/CustomerTrack'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/owner' element={<OwnerDashboard />} />
        <Route path='/customer' element={<CustomerItems />} />
        <Route path='/cart' element={<CustomerCart />} />
        <Route path='/track' element={<CustomerTrack />} />
      </Routes>
    </>
  )
}

export default App
