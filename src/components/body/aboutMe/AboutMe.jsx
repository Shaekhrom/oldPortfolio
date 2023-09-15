import React from 'react';
import './AboutMeStyles.css';
import TypingAnimation from '../../../assets/animations/name/NameAnimation';

const AboutMe = () => {
  return (
    /* About me */
    <div className="aboutMeContainer">

      {/* Name with animation */}
      <div className="glowing-title-container">
        <div>
          <p className="glowing-title">Software_Developer</p>
        </div>
        <div style={{ height: '5rem'}}/>
        <div>
          <TypingAnimation />
        </div>
        
      </div>
      
      {/* Personal description */}
      <div className="descriptionContainer">
        <div className="box">
          <p className="description">
            "When I'm not navigating through lines of code 👨‍💻,
            I love immersing myself in enchanting worlds or challenging mighty dragons 🎮.
            Passionate about new technologies and committed to continuous learning."
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
