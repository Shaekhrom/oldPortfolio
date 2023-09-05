import React, {Component } from 'react';
import Header from './components/header/Header';
import AboutMe from './components/body/aboutMe/AboutMe';
import SoftwareSkills from './components/body/softwareSkills/SoftwareSkills';
import PersonalProyects from './components/body/personalProyects/PersonalProyects';
import Contact from './components/body/contact/Contact';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }


  //takes a divId as a parameter
  scrollToDiv = (divId) => {
    // retrieve the DOM element with the specified divId using a ref
    const element = this.myRef.current.querySelector(`#${divId}`);
    //check if the element exists in the DOM
    if (element) {
      //scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  render(){
  return (
    
    <div className="App">

      {/*Header*/}
      <Header scrollToDiv={this.scrollToDiv}/>

      {/*Body*/}
      <div className="bodyContainer" ref={this.myRef}>
        
        {/*About me */}
        <div id="div1">
          <AboutMe/>
        </div>
        

        {/*Software skills */}
        <div id="div2">
          <SoftwareSkills/>
        </div>
        

        {/*Personal proyects */}
        <div id="div3">
          <PersonalProyects/>
        </div>
        

        {/*Contact*/}
        <div id="div4">
          <Contact/>
        </div>
        
      
      </div>
    </div>
  );
}
}

export default App;
