import React, { useState,useEffect } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import Menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

function Navbar() {

  const [sticky,setSticky] = useState(false)

  useEffect(() => {
   window.addEventListener('scroll', () =>{
    window.scrollY > 25 ? setSticky(true) : setSticky(false)
   })
  }, [])
  

  const [show, setShow] = useState(false)

  const hide_Menu = () =>{
    show ? setShow(false):setShow(true)
    console.log("hello");
  }


  
  return (
    <nav className={`container ${sticky ? "dark-theme": ""}`}>
       <img src={logo} alt="logo" className='logo' /> 
       <ul className={`${show ? "": "hide-menu-list"}`}>
        <li><Link to='hero' smooth={true} offset={0}  duration={500} >Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260}  duration={500} >Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150}  duration={500} >About Us</Link></li>
        <li><Link to='Campus' smooth={true} offset={-260}  duration={500} >Campus</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260}  duration={500} >Testimonial</Link></li>
        <li><Link className='btn' to='Contact' smooth={true} offset={-260}  duration={500} >Contect us</Link></li>
       </ul>
       <img src={Menu_icon} className='menu-icon' onClick={hide_Menu} />
    </nav>
  )
}

export default Navbar