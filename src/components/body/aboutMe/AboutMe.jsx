import React from 'react';
import './AboutMeStyles.css';
import TypingAnimation from '../../../assets/animations/name/NameAnimation';

const AboutMe = () => {
  return (
    /* About me */
    <div className="contenedorPrincipal">
      <div className="divHijo">
        <div>
         <p className="title">Software_Developer</p>
        </div>
        <div>
          <TypingAnimation/>
        </div>
      </div>
         
      <div className="divHijo">
        <p className ="desc">
            "When I'm not navigating through lines of code 👨‍💻,
            I love immersing myself in enchanting worlds or challenging mighty dragons 🎮.
            Passionate about new technologies and committed to continuous learning."
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
