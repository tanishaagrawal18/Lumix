import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home.jsx'

function App() {
  return (
    <div className="bg-[#1F1E24] min-h-screen w-full overflow-x-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
