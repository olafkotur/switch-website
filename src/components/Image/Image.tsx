import React from 'react';
import { Slide } from '@material-ui/core';
import './image.css';

interface IProps {
  image: any;
  description: string;
}

export default class Image extends React.Component<IProps> {
  render() {
    return (
      <Slide in={true} direction="down" timeout={{ enter: 750 }}>
        <div className="d-flex row">
          <img src={this.props.image.default} alt={this.props.description} className="w-100" />
        </div>
      </Slide>
    );
  }
}