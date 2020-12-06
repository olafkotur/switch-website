import React from 'react';
import logo from '../../assets/switch-icon.png';
import Download from '../Download/Download';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-between align-items-center header-container px-3" >
        <div className="d-flex flex-row mx-2 justify-content-center align-items-center">
          <img alt="Switch Logo" src={logo} className="header-logo" />
          <div className="d-flex flex-row ml-3">
            <h4 className="secondary mr-2">s</h4>
            <h4 className="primary mr-2">w</h4>
            <h4 className="primary mr-2">i</h4>
            <h4 className="primary mr-2">t</h4>
            <h4 className="tertiary mr-2">c</h4>
            <h4 className="quaternary mr-2">h</h4>
          </div>
        </div>

        <div className="d-flex flex-row">
          <Download short disabled os="Windows" />
          <Download short os="macOS" />
        </div>
      </div>
    );
  }
}