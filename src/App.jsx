// import React from 'react'
// import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './Components/Layout/Index'
import Home from './Pages/Home'
import About from './Pages/About'
import Resume from './Pages/Resume'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}/>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/Resume' element={<Resume/>}/>
          <Route path='/portfolio' element={<Resume/>}/>
          <Route path='/contact' element={<Resume/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App