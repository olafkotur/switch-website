import React from 'react';
import Title from '../../components/Title/Title';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/Carousel/Carousel';
import Header from '../../components/Header/Header';
import Download from '../../components/Download/Download';

export default class Landing extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="mt-5 d-flex flex-column justify-content-center align-items-center">
          <Title />

          <h3 className="primary text-center mt-5">Simple browser overlay on your device</h3>
          <div className="d-flex flex-row">
            <h5 className="primary text-center">Switch to&nbsp;</h5>
            <h5 className="secondary"> S</h5>
            <h5 className="primary">w</h5>
            <h5 className="primary">i</h5>
            <h5 className="primary">t</h5>
            <h5 className="tertiary">c</h5>
            <h5 className="quaternary">h</h5>
          </div>

          <Carousel />

          <div className="d-flex flex-row mt-5">
            <Download disabled os="Windows" description="available soon" />
            <Download os="macOS" description="currently in beta" />
          </div>

          <div className="w-100 mt-5">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}