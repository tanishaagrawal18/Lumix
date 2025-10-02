import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'
function App() {
  return (
    <div className=' bg-[#1F1E24] w-screen h-screen flex'>
      <Routes>
        <Route path="/" element={<Home/>} />

        
      </Routes>
    </div>
  )
}

export default App

