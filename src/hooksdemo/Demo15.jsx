import React, { useState } from 'react'

export default function Demo15() {
   const[temperature,setTemperature] = useState()




  return (
    <div>
        <h2><u>Demo 15</u></h2>
     <h2><u>TEMPERATURE DEMO</u></h2>
     Enter Temperature 
     <input type="number" onChange={(e) => {setTemperature(e.target.value)}} />
     <br />
     Temperature = {temperature} <br />
     {
        temperature<=24 ?
        <b>gedda kadatavu ra rey</b> : 
        temperature>=25 && temperature<=40 ?
        <b>Bane untavu ley</b> :
        temperature>40 ?
        <b>Sachipothavu ra rey</b>:
        <b>Nuvu ee graham lo levvu swami</b>
     }
    </div>
  )
}
