import React, { useState, useEffect } from 'react';
import './SoftwareSkillsStyles.css';
import htmlicon from '../../../assets/icons/html.png';
import css3icon from '../../../assets/icons/css3.png';
import jsicon from '../../../assets/icons/js.png';
import reacticon from '../../../assets/icons/react.png';
import javaicon from '../../../assets/icons/java-logo-1.png';
import sqlIcon from '../../../assets/icons/sql.png';
import gitIcon from '../../../assets/icons/git.png';

function SoftwareSkills() {


    return (
        /*Software skills */
        <div className="softwareSkillsContainer">
          <div>
            <h1 className="softwareSkillsTitle">Main Skills</h1>
          </div>
          
          <ul className='iconList'>
            <li>
              <img src={htmlicon} alt="Html" className="custom-image"></img>
            </li>
            <li>
              <img src={css3icon} alt="css" className="custom-image"></img>
            </li>
            <li>
              <img src={jsicon} alt="js" className="custom-image"></img>
            </li>
            <li>
              <img src={reacticon} alt="react" className="custom-image"></img>
            </li>
            <li>
              <img src={javaicon} alt="java" className="custom-image"></img>
            </li>
            <li>
              <img src={sqlIcon} alt="sql"  className="custom-image"></img>
            </li>
            <li>
              <img src={gitIcon} alt="git" className="custom-image"></img>
            </li>
          </ul>
    
        </div>
    );
}

export default SoftwareSkills;