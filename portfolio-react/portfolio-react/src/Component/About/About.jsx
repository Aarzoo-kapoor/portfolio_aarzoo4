import React from "react";
import './About.css'

import profile_img from '../../assets/family2.jpeg'
const About=() => {
  return(
    <div id='about me' className="about">
      <div className="about-title">
        <h1>About me</h1>
       
      </div>
      <div className="about-section">
        <div className="about-left">
          <img  className="img1" src={profile_img} alt="" />
        </div>
        <div className="about-right">
        <div className="about-para">
          <p>From taking birth in Punjab, to shifting to China and now living in Gurugram for more than a decade, life has been a rollercoaster! </p>
          <p>Apart from being web developer enthusiast, my love for badminton and cricket is much more stronger. Where are my CSK fans? Few programming languages and my knowledge for them are higlighted below:</p>
        </div>
        <div className="about-skills">
          <div className="about-skill"><p>HTML</p><hr style={{width:"70%"}}></hr></div>
          <div className="about-skill"><p>CSS</p><hr style={{width:"60%"}}></hr></div>
          <div className="about-skill"><p>PYTHON</p><hr style={{width:"40%"}}></hr></div>
          
        </div>
        </div>
      </div>
     </div>
  )
}

export default About