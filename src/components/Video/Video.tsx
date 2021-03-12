import React from 'react';
import './video.css';

const DemoVideo = require('../../assets/demo.mp4');

export default class Video extends React.Component {
  render() {
    return (
      <video
        playsInline
        autoPlay
        muted
        loop
        src={DemoVideo.default}
        className="preview mt-3 w-100"
      />
    );
  }
}
