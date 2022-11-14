import { useState } from 'react'
import './App.css'
import Homepage from './components/Homepage'
import EditPage from "./pages/Edit"
import {BrowserRouter, Routes,Route} from "react-router-dom"
function App() {

  return (
     <>
    
      {/* <Homepage/> */}
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Homepage/>}/>
          <Route path="/edit" element={<EditPage/>}/>
          {/* <Route path="/"/> */}
       </Routes>
      </BrowserRouter>
     </>
  )
}

export default App
