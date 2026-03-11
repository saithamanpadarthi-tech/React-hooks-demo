import React, { useState } from 'react'

export default function Demo11() {
  const[formdata,setFormData] = useState({
    name:"",
    email:"",
    location:""
 })

    const handleChange = (e) => {
       const {name,value} = e.target
       setFormData({...formdata,[name]:value})
    }

    const handleSubmit = (e) => {
       // alert("Registration Success")
       alert(formdata.name+""+formdata.email+""+formdata.location)
    }




  return (
    <div>
      <h2><u>Demo 11</u></h2>
      <h3><u>Registration Form</u></h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" required  onChange={handleChange}/>

         <label>Email</label>
        <input type="email" name="email" required onChange={handleChange} />
       
         <label>Location</label>
        <input type="text" name="Location" required  onChange={handleChange}/> <br />

        <input type="submit" value="Register"  />
        
      </form>
    </div>
  )
}
