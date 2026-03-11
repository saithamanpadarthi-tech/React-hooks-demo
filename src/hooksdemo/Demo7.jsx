import React, { useRef } from 'react'

export default function Demo7() {
  const unameRef = useRef(null)
    const pwdRef = useRef(null)

    const handleSubmit = ()=> {
        const uname = unameRef.current.value
        const pwd = pwdRef.current.value
        if (uname == "thaman" && pwd == "tham,m,") {
            alert("Login valid")
        }

        else
            alert("Login Invalid")
    }

  return (
    <div>
        <h2><u>Demo 7</u></h2>
        <h2 style={{color:"green"}} ><u>Login Form</u></h2>
        <form onSubmit={handleSubmit} >
            <label htmlFor="">Enter Username</label>
            <input type="text" required ref={unameRef} /> <br />
            <label htmlFor="">Enter Password</label>
            <input type="password" required ref={pwdRef} /> <br />
            <input type="submit" value="Login" />
            <input type="reset" value="Clear" />
        </form>
    </div>
  )
}
