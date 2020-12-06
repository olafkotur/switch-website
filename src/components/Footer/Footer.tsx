import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-center align-items-center bg-secondary footer-container" >
        <div className="d-flex flex-row row overflow-auto justify-content-center">
          <span className="mx-4">
            <a
              className="primary"
              href="https://www.notion.so/olafkotur/Tutorial-a77509d0ed234ab985f0e0d7c88c01e2"
              rel="noreferrer"
              target="_blank"
            >
              &#129355; Tutorial
            </a>
          </span>

          <span className="mx-4">
            <a
              className="primary"
              href="https://www.notion.so/olafkotur/News-Updates-97fc4e6c87724db2b8c32acfbe8f7ae0"
              rel="noreferrer"
              target="_blank"
            >
              &#128227; News & Updates
            </a>
          </span>
        </div>
      </div>
    );
  }
}