import React, { useState } from 'react';import './ContactStyles.css';
import gmail from '../../../assets/icons/gmail.png';
import github from '../../../assets/icons/github.png';
import linkedin from '../../../assets/icons/linkedin.png';


function App() {
  

  const [emailText, setEmailText] = useState('Gmail');

  const handleLiClick = () => {
    const linkedinURL = 'https://www.linkedin.com/in/alejandro-barbacil-castro-623742296/';
  
    window.open(linkedinURL, '_blank');
  };

  const handleGitHubClick = () => {
    const githubURL = 'https://github.com/Shaekhrom?tab=repositories';
  
    window.open(githubURL, '_blank');
  };
  
  const handleEmailClick = () => {

    setEmailText('shaekhrom@gmail.com');
    
  };


  return (
    <div className="contactContainer">
          <div>
            <h1 className="contactTitle">Contact info</h1>
          </div>

          <div>

            <ul className='contactElementList'>
              
              <li className='contactElementContainer' > 
                <img src={linkedin} className="contactElement" alt='LinkedinIcon' ></img>
                <p className='contactText' onClick={handleLiClick} style={{ cursor: 'pointer' }}>Linkedin</p>
              </li>

              <li className='contactElementContainer' >
               <img src={github} className="contactElement" alt='GitHubIcon'></img> 
                <p className='contactText' onClick={handleGitHubClick} style={{ cursor: 'pointer' }}>GitHub</p>
              </li>

              <li className='contactElementContainer'>
                <img src={gmail} className="contactElement" alt='GmailIcon' />
                <p className='contactText' onClick={handleEmailClick} style={{ cursor: 'pointer' }}>{emailText}</p>
              </li>

            </ul>
          </div>
        </div>
  );
}

export default App; 