import React from 'react';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import { Button  } from '@material-ui/core';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Header />
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

            <Carousel />
          </div>

          <div className="w-100 mt-5">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}