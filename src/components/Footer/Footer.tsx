import React from 'react';
import './footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-center align-items-center bg-secondary footer-container" >
        <span className="mx-4">
          <a href="https://www.notion.so/olafkotur/Tutorial-a77509d0ed234ab985f0e0d7c88c01e2" className="text-muted">Tutorial</a>
        </span>

        <span className="mx-4">
          <a href="https://www.notion.so/olafkotur/Beta-69d5855bbd124df6b9fa0d78c4868cb5" className="text-muted">Beta</a>
        </span>

        <span className="mx-4">
          <a href="https://www.notion.so/What-s-New-87a42395e92d44f4866d895fcd91d0ac" className="text-muted">Updates</a>
        </span>
      </div>
    );
  }
}