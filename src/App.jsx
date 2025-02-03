import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import Documentations from './documents/Documentations'










function App() {
  return (
    <>
    {/*}
      <Home/>
      <Documentation/> */}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Documentation' element={<Documentations/>}/>
      
    </Routes>
    
    </>
  )
}

export default App
