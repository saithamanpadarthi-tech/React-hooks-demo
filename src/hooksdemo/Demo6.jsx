import React, { useRef } from 'react'

export default function Demo6() {
    const idRef = useRef( null ) //inital value is null
  const nameRef = useRef (null)//initial value is null

  const handleSubmit = () => {
        const id = idRef.current.value
        const name = nameRef.current.value
        alert(id+","+name)
  }
   return (
    <div>  
        <h2><u>Demo 6</u></h2>
        <h2 style={{color:"green"}}><u> Sample Form </u></h2> 
        <form onSubmit={handleSubmit}>
            <label> Enter ID </label>
            <input type="number" required ref={idRef}/><br></br>
            <label> Enter Name</label>
             <input type="text" required ref={nameRef}/><br></br>
             <input type="submit" value="Submit"></input><br/>
             <input type="reset" value="Clear"/><br/>
        </form> 
         

    </div>
   )
}
