import React from 'react';
import './HeaderStyles.css'


class Header extends React.Component {
  render() {
  return (
    /*Header*/
    <div className="App-header">
        
            <ul className="horizontal-list">
              
                <li className="element-list" onClick={() => this.props.scrollToDiv('div1')}>
                  About me
                </li>
                <li className="element-list" onClick={() => this.props.scrollToDiv('div2')}>
                  Software skills
                </li>
                <li className="element-list" onClick={() => this.props.scrollToDiv('div3')}>
                  Personal proyects
                </li>
                <li className="element-list" onClick={() => this.props.scrollToDiv('div4')}>
                  Contact form
                </li>
            </ul>
         
    </div>

  );
  }
}

export default Header;