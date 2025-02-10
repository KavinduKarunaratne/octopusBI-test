import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import LoginPage from './components/LoginPage'
import OwnerDashboard from './components/OwnerDashboard'
import CustomerLandingPage from './components/CustomerLandingPage'


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/owner' element={<OwnerDashboard />} />
        <Route path='/customer' element={<CustomerLandingPage />} />
      </Routes>
    </>
  )
}

export default App
