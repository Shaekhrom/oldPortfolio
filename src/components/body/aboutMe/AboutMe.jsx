import React from 'react';
import './AboutMeStyles.css'
import TypingAnimation from '../../../assets/animations/name/NameAnimation';

const AboutMe = () => {
  
  return (

    /*About me */
    <div  className="name-titleContainer">

    {/*Name with animation */}
    <div>
      <p className="glowing-title">Software_Developer</p>
      <TypingAnimation/> 
    </div>
    
    {/*Personal description */}
    <div className="descriptionContainer">
      <div className="box">
        <p className="description">"When I'm not navigating through lines of code 👨‍💻 , 
        I love immersing myself in enchanting worlds or challenging mighty dragons 🎮. 
        Passionate about new technologies and committed to continuous learning." </p>
      </div>
    </div>
    
  </div>

  );
}

export default AboutMe;