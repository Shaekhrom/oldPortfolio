import React, { lazy, Suspense, Component } from 'react';
import Header from './components/header/Header'; 
import './App.css'; 

// Importa los componentes perezosos
const AboutMe = lazy(() => import('./components/body/aboutMe/AboutMe'));
const SoftwareSkills = lazy(() => import('./components/body/softwareSkills/SoftwareSkills'));
const PersonalProyects = lazy(() => import('./components/body/personalProyects/PersonalProyects'));
const Contact = lazy(() => import('./components/body/contact/Contact'));
const NeonBalls = lazy(() => import('./assets/animations/neonBalls/NeonBalls'));

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  scrollToDiv = (divId) => {
    const element = this.myRef.current.querySelector(`#${divId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div className="App">
        {/* Lazy loading */}
        <Suspense fallback={<div>Loading...</div>}>

          {/*Background animation */}
          <NeonBalls />

          {/* Header */}
          <Header scrollToDiv={this.scrollToDiv} />

          {/* Body */}
          <div className="bodyContainer" ref={this.myRef}>
            {/* About me */}
            <div id="div1">
              <AboutMe />
            </div>

            {/* Software skills */}
            <div id="div2">
              <SoftwareSkills />
            </div>

            {/* Personal projects */}
            <div id="div3">
              <PersonalProyects />
            </div>

            {/* Contact */}
            <div id="div4">
              <Contact />
            </div>
          </div>
        </Suspense>
      </div>
    );
  }
}

export default App;
