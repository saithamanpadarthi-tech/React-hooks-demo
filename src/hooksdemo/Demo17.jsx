import React from 'react'

export default function Demo17() {
 const handleButton = () => {
     let txt =  document.getElementById('txt').value
     document.getElementById("output").innerHTML = txt
     document.getElementById("output").style.color="red"
     document.getElementById("output").style.fontSize="100pt"
     document.getElementById("output").style.fontWeight="bold"
     document.getElementById("output").style.fontStyle="Italic"

    }



  return (
    <div>
        <h2><u>Demo 17</u></h2>
      Enter Name 
    <input type="text" id='txt'/> <br />
    <button onClick={handleButton} >Click Here</button>
    <p id="output"></p>
    </div>
  )
}
