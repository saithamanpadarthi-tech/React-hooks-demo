import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Demo1 from './Demo1'
import Home from './Home'
import Demo2 from './Demo2'
import Demo3 from './Demo3'
import Demo4 from './Demo4'
import Demo6 from './Demo6'
import Demo7 from './Demo7'
import Demo8 from './Demo8'
import Demo9 from './Demo9'
import Demo10 from './Demo10'
import Demo11 from './Demo11'
import Demo12 from './Demo12'
import Demo13 from './Demo13'
import Demo14 from './Demo14'
import Demo15 from './Demo15'
import Demo16 from './Demo16'
import Demo17 from './Demo17'

import './navbar.css'


export default function NavBar() {
  return (
    <div>

    <nav className='navbar'>
        <Link to="/">Home</Link>
        <Link to="demo1">Demo1</Link>
        <Link to="demo2">Demo2</Link>
        <Link to="demo3">Demo3</Link>
        <Link to="demo4">Demo4</Link>
        <Link to="demo5">Demo5</Link>
        <Link to="demo6">Demo6</Link>
        <Link to="demo7">Demo7</Link>
        <Link to="demo8">Demo8</Link>
        <Link to="demo9">Demo9</Link>
        <Link to="demo10">Demo10</Link>
        <Link to="demo11">Demo11</Link>
        <Link to="demo12">Demo12</Link>
        <Link to="demo13">Demo13</Link>
        <Link to="demo14">Demo14</Link>
        <Link to="demo15">Demo15</Link>
        <Link to="demo16">Demo16</Link>
        <Link to="demo17">Demo17</Link>
       
    </nav>



      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="demo1" element={<Demo1/>}/>
        <Route path="demo2" element={<Demo2/>}/>
        <Route path="demo3" element={<Demo3/>} />
        <Route path="demo4" element={<Demo4/>} />
        <Route path="demo6" element={<Demo6/>} />
        <Route path="demo7" element={<Demo7/>} />
        <Route path="demo8" element={<Demo8/>} />
        <Route path="demo9" element={<Demo9/>} />
        <Route path="demo10" element={<Demo10/>} />
        <Route path="demo11" element={<Demo11/>} />
        <Route path="demo12" element={<Demo12/>} />
        <Route path="demo13" element={<Demo13/>} />
        <Route path="demo14" element={<Demo14/>} />
        <Route path="demo15" element={<Demo15/>} />
        <Route path="demo16" element={<Demo16/>} />
        <Route path="demo17" element={<Demo17/>} />
       
        
      </Routes>
    </div>
  )
}
