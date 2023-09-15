import React, { Component } from 'react';
import './HeaderStyles.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDiv: 'div1', // Inicialmente, se asume que el primer div está visible
    };
    this.navRef = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const navContainer = this.navRef.current;
    const divsToObserve = ['div1', 'div2', 'div3', 'div4'];

    // Encuentra el div actualmente visible
    let currentDiv = 'div1';
    let maxPercentage = 0;

    for (const divId of divsToObserve) {
      const divElement = document.getElementById(divId);
      const rect = divElement.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const top = Math.max(rect.top, 0);
      const bottom = Math.min(rect.bottom, viewportHeight);
      const percentage = (bottom - top) / viewportHeight;

      if (percentage > maxPercentage) {
        maxPercentage = percentage;
        currentDiv = divId;
      }
    }

    // Actualiza el estado para resaltar el elemento de la barra de navegación correspondiente
    this.setState({ activeDiv: currentDiv });
  };

  scrollToDiv = (divId) => {
    const divElement = document.getElementById(divId);
    if (divElement) {
      divElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  render() {
    return (
      <div className="App-header" ref={this.navRef}>
        <ul className="horizontal-list">
          <li
            className={`element-list ${this.state.activeDiv === 'div1' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div1')}
          >
            About me
          </li>
          <li
            className={`element-list ${this.state.activeDiv === 'div2' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div2')}
          >
            Software skills
          </li>
          <li
            className={`element-list ${this.state.activeDiv === 'div3' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div3')}
          >
            Personal projects
          </li>
          <li
            className={`element-list ${this.state.activeDiv === 'div4' ? 'active' : ''}`}
            onClick={() => this.scrollToDiv('div4')}
          >
            Contact form
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
