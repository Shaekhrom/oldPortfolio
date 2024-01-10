import React, { Component } from 'react';
import './NameAnimation.css';

class TypingAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNameIndex: 0,
      currentText: '',
      isTyping: true,
    };

    this.names = ["ALEJANDRO BARBACIL", "SHAEKHROM"];
  }

  componentDidMount() {
    this.animateText();
  }

  componentWillUnmount() {
    clearInterval(this.animationInterval);
  }

  animateText = () => {
    this.animationInterval = setInterval(() => {
      const { currentNameIndex, currentText, isTyping } = this.state;
      const targetName = this.names[currentNameIndex];

      if (isTyping) {
        if (currentText !== targetName) {
          this.setState(prevState => ({
            currentText: targetName.substring(0, prevState.currentText.length + 1),
          }));
        } else {
          setTimeout(() => {
            this.setState(prevState => ({
              isTyping: false,
            }));
          }, 1000); // Wait for a second after typing is done
        }
      } else {
        if (currentText !== "") {
          this.setState(prevState => ({
            currentText: prevState.currentText.substring(0, prevState.currentText.length - 1),
          }));
        } else {
          const nextIndex = (currentNameIndex + 1) % this.names.length;
          this.setState({
            isTyping: true,
            currentNameIndex: nextIndex,
            currentText: this.names[nextIndex].substring(0, 1), // Start with the first letter
          });
        }
      }
    }, 150); // Adjust speed as needed
  };

  render() {
    const { currentText } = this.state;

    return (
      <div style={{ display: 'flex', alignItems: 'center',maxHeight: '2em'}}>
        <p className="glowing-text">{"<-" + currentText }</p>
        <span className="cursor">{'|'}</span>
        <span className="glowing-text">{"->"}</span>
    
        
      </div>
    );
  }
}

export default TypingAnimation;
