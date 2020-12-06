import { Button } from '@material-ui/core';
import { Apple, Dashboard } from '@material-ui/icons';
import React from 'react';

interface IProps {
  os: 'macOS' | 'Windows';
  short?: boolean;
  disabled?: boolean;
}

export default class Download extends React.Component<IProps> {
  /**
   * Local properties
   */
  protected downloadLinks = { macOS: 'http://gum.co/switchapp', Windows: 'http://gum.co/switchapp' }

  render() {
    return (
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
            ? <span className="primary ml-1">download</span>
            : <span className="primary ml-1">download for {this.props.os}</span>
          }
        </div>
      </Button>
    );
  }
}