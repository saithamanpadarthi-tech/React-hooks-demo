import React, { useState } from 'react'

export default function Demo12() {
  const [courses, setCourses] = useState([
        "React",
        "JavaScript",
        "Node.js",
        "CSS"
      ]);
  return (
    <div>
        <h2><u>Demo 12</u></h2>
          <h3><u>List Demo</u></h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Course</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{course}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
