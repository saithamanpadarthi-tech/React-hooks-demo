import React, { useState } from 'react'
import studenttt from'./students.json'

export default function Demo10() {
  const [students,setStudents] = useState(studenttt)



  return (
    <div>
      <h2><u>Demo 10</u></h2>
      <h3><u>JSON demo</u></h3>
      <table border={1}>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>AGE</th>
            <th>COURSE</th>
        </tr>
      {
        students.map( (value,i) => (
           
           <tr key={i}>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.age}</td>
                <td>{value.course}</td>
            </tr>

        ))

        
      }
      </table>
    </div>
  )
}
