import React from 'react'
import './Navbar.css'
import logo from '../../assets/gdsc-image.svg'



const Navbar = () => {
  return(
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className="nav-menu">
        <li className="home">Home</li>
        <li className="about_me">About me</li>
        <li className="nav-connect">Connect with me</li>

      </ul>
      

    </div>
  ) 
}
export default Navbar