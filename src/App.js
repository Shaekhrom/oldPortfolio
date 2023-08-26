import logo from './logo.svg';
import './App.css';
import TypingAnimation from './animations/name/NameAnimation'
import htmlicon from './icons/html.png';
import css3icon from './icons/css3.png';
import jsicon from './icons/js.png';
import reacticon from './icons/react.png';
import javaicon from './icons/java-logo-1.png';
import sqlIcon from './icons/sql.png';
import gitIcon from './icons/git.png';
import birthdayReminder from './icons/logo2.png';


function App() {
 
  return (
    <div className="App">

      {/*Header*/}
      <header className="App-header">
        <div>
          <ul className="horizontal-list">
            <li className="element-list">About me</li>
            <li className="element-list">Software skills</li>
            <li className="element-list">Personal proyects</li>
            <li className="element-list">Contact form</li>
          </ul>
        </div>  
        {/**/}
        
      </header>

      {/*Body*/}
      <div className="bodyContainer">

        {/* */}
        <div  className="name-titleContainer">

          {/*Name with animation */}
          <div>
            <p className="glowing-title">Software_Developer</p>
            <TypingAnimation/> 
          </div>
          
          {/*Personal description */}
          <div className="descriptionContainer">
            <p className="description">"When I'm not navigating through lines of code 👨‍💻 , I love immersing myself in enchanting worlds or challenging mighty dragons 🎮. Passionate about new technologies and committed to continuous learning." </p>
          </div>
          
        </div>

        {/*Software skills */}
        <div className="softwareSkillsContainer">
          <div>
            <h1 className="softwareSkillsTitle">Main Skills</h1>
          </div>
          
          <ul className='iconList'>
            <li>
              <img src={htmlicon} alt="Html" className="iconsAdapter"></img>
            </li>
            <li>
              <img src={css3icon} className="iconsAdapter"></img>
            </li>
            <li>
              <img src={jsicon} className="iconsAdapter"></img>
            </li>
            <li>
              <img src={reacticon} className="iconsAdapter"></img>
            </li>
            <li>
              <img src={javaicon} className="iconsAdapter"></img>
            </li>
            <li>
              <img src={sqlIcon} className="iconsAdapter"></img>
            </li>
            <li>
              <img src={gitIcon} className="iconsAdapter"></img>
            </li>
          </ul>
        </div>

        {/*Personal proyects */}
        <div className="personalProyectsContainer">
          <div className='personalProyectsTitleContainer'>
            <h1 className="personalProyectsTitle">Personal Proyects</h1>
          </div>
          
          <div>
            <img src={birthdayReminder} className="proyectsElement"></img>
          </div>

        </div>

        {/*Contact*/}
        <div className="contactContainer">
          <div className="contactTitleContainer">
            <h1 className="contactTitle">Contact info</h1>
          </div>
          <div>
            <ul>
              <li>
                <p>Linkedin:</p>
              </li>
              <li>
                <p>GitHub: </p>
              </li>
              <li>
                <p>Gmail: </p>
              </li>
            </ul>
          </div>

        </div>




      </div>
    </div>
  );
}

export default App;
