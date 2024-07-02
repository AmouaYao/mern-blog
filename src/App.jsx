import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Signup from './pages/Signup'
import About from './pages/About'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Singnin'
import Projects from './pages/Projects'

export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/projects" element={<Projects />} />


    </Routes>
   
   </BrowserRouter>
  )
}
