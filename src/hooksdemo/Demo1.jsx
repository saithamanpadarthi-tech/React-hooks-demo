import React from 'react'

export default function Demo1() {
 const a=10,b=20.5,txt="KLU",flag=false
    const student ={id:100,name:"Sitha",cgpa:8.5,contact:"9666585080"}
  return (
    <div>
      <h2><u>Demo 1</u></h2>
      a={a} <br />
      b={b} <br />
      txt= {txt} <br />
      Student ID={student.id} <br />
       Student Name={student.name} <br />
        Student CGPA = {student.cgpa} <br />
         Student Contact = {student.contact} <br />
          
          {
            flag ? <h3>KLU</h3>:<h3>KL University</h3>
          }
    </div>

  )
}
