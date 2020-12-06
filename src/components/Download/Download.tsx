import React from 'react';
import { Button } from '@material-ui/core';
import { Apple, Dashboard } from '@material-ui/icons';
import './download.css';

interface IProps {
  os: 'macOS' | 'Windows';
  short?: boolean;
  disabled?: boolean;
  description?: string;
}

export default class Download extends React.Component<IProps> {
  /**
   * Local properties
   */
  protected downloadLinks = { macOS: 'http://gum.co/switchapp', Windows: 'http://gum.co/switchapp' }

  render() {
    return (
      <div className="d-flex flex-column align-items-center">
        <Button
          color="primary"
          variant="contained"
          className="mx-2"
          disabled={this.props.disabled}
          target="_blank"
          href={this.downloadLinks[this.props.os]}
        >
          <div className="d-flex flex-row justify-content-center align-items-center">
            {this.props.os === 'macOS' && <Apple color="secondary" fontSize="small" />}
            {this.props.os === 'Windows' && <Dashboard color="secondary" fontSize="small" />}
            {this.props.short
              ? <span className="primary ml-1 download-text">download</span>
              : <span className="primary ml-1 download-text">download for {this.props.os}</span>
            }
          </div>
        </Button>
        {this.props.description && <span className="text-muted download-description">{this.props.description}</span>}
      </div>
    );
  }
}