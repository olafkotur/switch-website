import React from 'react';
import { Carousel as BootCarousel } from 'react-bootstrap';
import previewOne from '../../assets/preview-1.gif';
import './carousel.css';

export default class Carousel extends React.Component {
  render() {
    return (
      <BootCarousel>
        <BootCarousel.Item>
          <img
            alt="Preview use of Switch"
            src={previewOne}
            className="preview mt-3"
          />
        </BootCarousel.Item>
      </BootCarousel>
    );
  }
}
