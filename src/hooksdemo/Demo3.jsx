import React, { useState } from 'react'

export default function Demo3() {
 const [flag,setFlag] = useState(true) //initial value
    function handleChange()
    {
        setFlag(!flag)
    }
  return (
    <div>
      <h2><u>Demo 3</u></h2>
     {
        flag ? <b>THAMAN</b>: <b>NONE</b>
     } 
     <br />
     <button onClick = {handleChange}>Change</button>
    </div>
  )
}
