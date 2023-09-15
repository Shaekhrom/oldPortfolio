import React from 'react';
import './PersonalProyectsStyles.css';
import birthdayReminder from '../../../assets/icons/logo2.png';

function PersonalProyects() {
  return (
    <div className="personalProyectsContainer">
        <div>
            <h1 className="personalProyectsTitle">Personal Proyects</h1>
        </div>
        <div>
            <img src={birthdayReminder} className="proyectsElement"></img>
        </div>
    </div>
  );
}

export default PersonalProyects;