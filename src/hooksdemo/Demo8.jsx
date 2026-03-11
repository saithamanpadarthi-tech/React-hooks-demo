import React, { useState } from 'react'
import About from './About'
import Home from './Home'

export default function Demo8() {
const [flag,setFlag] = useState(false)
    const change=()=>
    {
        setFlag(true)
    }
  return (
    <div>
        <h2><u>Demo 8</u></h2>
         {
            flag? <b>CSE</b> : <b>ECE</b>
        } <br />
        {
            flag? <button>Login</button>: <button>Logout</button>
        }
        {
            flag? <About/> : <Home/>
        } <br />
    <button onClick={change} >
        Change
    </button>
    </div>
  )
}
