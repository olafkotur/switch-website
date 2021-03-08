import React from 'react';
import './carousel.css';

const DemoVideo = require('../../assets/demo.mp4');

export default class Carousel extends React.Component {
  render() {
    return (
      <video
        playsInline
        autoPlay
        muted
        loop
        src={DemoVideo.default}
        className="preview mt-3"
      />
    );
  }
}
