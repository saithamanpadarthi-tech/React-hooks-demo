import React, { useState } from 'react'

export default function Demo13() {
 const[value1,setValue1] = useState(0)
    const[value2,setValue2] = useState(0)
    const[output,setOutput] = useState(0)

    const handleChange1 = (e) => {
        setValue1(e.target.value)
    }

    const handleChange2 = (e) => {
        setValue2(e.target.value)
    }

    const ADD = () => {
     
        setOutput(Number(value2)+ Number(value1))
    }

    
    const SUB = () => {
     
        setOutput(Number(value2)-Number(value1))
    }


  return (
    <div>
        <h2><u>Demo 13</u></h2>
      <h2><u>Arithmetic Operations Demo </u></h2>
      First Value
      <input type="number" onChange={handleChange1} />
      <br />
      Second Value
      <input type="number" onChange={handleChange2} />
      <br />
      <button onClick={ADD}>ADD</button>
      <br />
      <button onClick={SUB}>SUB</button>

      output = {output}

      
    </div>
  )
}
