import React from 'react';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import preview from '../../assets/preview-1.gif';
import { Button, Zoom } from '@material-ui/core';
import './landing.css';

export default class Landing extends React.Component {
  render() {
    return (
      <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
        <Title />

        {/* download part */}
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h3 className="primary text-center mt-5">Simple browser overlay on your device</h3>
          <h5 className="primary text-center">Stop switching windows</h5>

          <Button
            variant="contained"
            className="mt-3"
            color="primary"
            target="_blank"
            href="https://gumroad.com/l/switchapp"
          >
            Download
          </Button>
          <p className="text-center text-muted mt-1 font-italic">currently in beta</p>

          <Zoom in timeout={{ enter: 1000 }}>
            <img alt="Preview use of Switch" src={preview} className="preview mt-3" />
          </Zoom>
        </div>

        <div className="w-100 mt-5">
          <Footer />
        </div>
      </div>
    );
  }
}