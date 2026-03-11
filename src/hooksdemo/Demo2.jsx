import React, { useState } from 'react'

export default function Demo2() {
  const [name,setName] = useState("KLU") //initial value
    // name is a state object
    // set name is a method used to change name value

    function change()
    {
        setName("KLUniversity")
    }

  return (
    <div>
      <h2><u>Demo 2</u></h2>
      Name={name} <br />
      <button onClick={change}>Change</button>
    </div>
  )
}
