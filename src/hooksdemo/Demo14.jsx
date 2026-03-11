import React, { useState } from 'react'

export default function Demo14() {
   const[name,setName] = useState("")
    const[location,setLocation] = useState("")

    const handleChange1 = (e) => {
        setName(e.target.value)
    }

    const handleChange2 = (e) => {
        setLocation(e.target.value)
    }


  return (
    <div>
        <h2><u>Demo 14</u></h2>
        <h2><u>Handling Input Field values</u></h2>
      Enter Name  <input type="text"  onChange={handleChange1} /> <br />
      Enter Location <input t ype="text"  onChange={handleChange2}/> <br />
      Name = {name} <br />
      Location = {location}
      

    </div>
  )
}
