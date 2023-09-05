import React from 'react';
import './ContactStyles.css';
import gmail from '../../../assets/icons/gmail.png';
import github from '../../../assets/icons/github.png';
import linkedin from '../../../assets/icons/linkedin.png';


function App() {


    const handleLiClick = () => {
        window.location.href = 'https://www.linkedin.com/in/alejandro-barbacil-castro-955372184/';
    };  

  return (
    <div className="contactContainer">
          <div className="contactTitleContainer">
            <h1 className="contactTitle">Contact info</h1>
          </div>
          <div>
            <ul className='contactElementList'>

              <li className='contactElementContainer' onClick={handleLiClick} style={{ cursor: 'pointer' }}> 
                <img src={linkedin} className="contactElement" ></img>
                <p className='contactText'>Linkedin</p>
              </li>

              <li className='contactElementContainer'>
               <img src={github} className="contactElement"></img> 
                <p className='contactText'>GitHub</p>
              </li>

              <li className='contactElementContainer'>
                <img src={gmail} className="contactElement"></img>
                <p className='contactText'>Gmail</p>
              </li>

            </ul>
          </div>
        </div>
  );
}

export default App;