import React from 'react'
import './Hero.css'
import logo from '../../assets/img4.png'
import intro_image from '../../assets/intro-bg.jpg'

const Hero= () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into_image" src={intro_image} alt="intro_image"/>
        </div>
        <div className='content'>
        <img className="logo" src={logo} alt=''></img>
            <h1 className='name'>  Aarzoo kapoor </h1>
            <p>first year, DTU, maths and computing</p>
            <p className='p1'> member of GDSC and DELTECH MUN</p>
            
            
        </div>
        
    </div>
    
  
    
    
) 
}
export default Hero