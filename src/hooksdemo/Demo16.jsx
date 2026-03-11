import React, { useState } from 'react'

export default function Demo16() {
  const[name,setName] = useState("")
  return (
    <div>
      Name = {name} 
      <input type="text"  onChange={(e)=>{setName(e.target.value)}} /> <br />
      NAME = {name.toUpperCase()} <br />
      name = {name.toLowerCase()} <br />
      Length = {name.length}
      
    </div>
  )
}
