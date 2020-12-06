import React from 'react';
import { Slide } from '@material-ui/core';
import logo from '../../assets/switch-icon.png';
import './title.css';

export default class Title extends React.Component {
  render() {
    return (
      <Slide in={true} direction="down" timeout={{ enter: 750 }} >
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img alt="Switch Logo" src={logo} className="title-logo" />
          <div className="d-flex flex-row">
            <h1 className="secondary mr-2">s</h1>
            <h1 className="primary mr-2">w</h1>
            <h1 className="primary mr-2">i</h1>
            <h1 className="primary mr-2">t</h1>
            <h1 className="tertiary mr-2">c</h1>
            <h1 className="quaternary mr-2">h</h1>
          </div>
        </div>
      </Slide>
    );
  }
}