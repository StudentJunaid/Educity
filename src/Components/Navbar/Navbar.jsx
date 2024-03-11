import React, { useState,useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

function Navbar() {
  const [stikey, setStikey] = useState(false)

  useEffect(() => {
   window.addEventListener('scroll', () =>{
    window.scrollY > 25 ? setStikey(true): setStikey(false)
   })
  }, [])
  
  return (
    <nav className={`container ${stikey ? 'dark-theme': ""}`}>
       <img src={logo} alt="logo" className='logo' />
       <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About Us</li>
        <li>Campus</li>
        <li>Testimonial</li>
        <li><button className='btn'>Contect us</button></li>
       </ul>
    </nav>
  )
}

export default Navbar