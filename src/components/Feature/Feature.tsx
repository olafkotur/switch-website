import React from 'react';
import { ButtonBase, Paper, Slide } from '@material-ui/core';
import { IFeatureConfig } from '../../typings/d';
import './feature.css';

interface IProps extends IFeatureConfig {
  id: number;
  show: boolean;
  handleClick: (id: number) => void;
}

export default class Feature extends React.Component<IProps> {

  render() {
    return (
      <ButtonBase
        className="feature-spacing"
        onClick={() => this.props.handleClick(this.props.id)}
      >
        <Paper elevation={0} className={`d-flex justify-content-center align-items-center bg-secondary feature-container ${this.props.show ? 'feature-container-expanded' : ''}`}>
          <span className="feature-icon">{this.props.icon}</span>
        </Paper>

        <span className={`overflow-hidden ${this.props.show ? '' : 'd-none'}`}>
          <Slide in={this.props.show} direction="right">
            <Paper className="bg-secondary feature-container-info">
              <h5 className="primary pt-2 text-left">{this.props.title}</h5>
              <p className="primary feature-description">{this.props.description}</p>
            </Paper>
          </Slide>
        </span>

      </ButtonBase>
    );
  }
}
