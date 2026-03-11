import React, { useState } from 'react'

export default function demo5() {
 const [count,setCount] = useState(0) //initial state
    const increment = () =>
        {
            setCount(count+1)
        } 

        const decrement = () =>
        {
            setCount(count-1)
        }
        const reset = () =>
        {
            setCount(0)
        }
  return (
    <div>
        <h2><u>Demo 5</u></h2>
        count = {count} <br />
        <button onClick={increment} >Increment</button> <br />
        <button onClick={decrement}>Decrement</button> <br />
        <button onClick={reset}>Reset</button>
    </div>
  )
}
