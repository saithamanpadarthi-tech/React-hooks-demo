/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' */

import { BrowserRouter } from "react-router-dom"
import NavBar from "./hooksdemo/NavBar"



function App() {
  

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      </BrowserRouter>
     
    </>
  )
}

export default App
