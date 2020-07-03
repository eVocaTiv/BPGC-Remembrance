import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div
        style={{
          display: 'block',
          fontSize: '3rem',
          width: '80%',
          margin: '10% auto',
          textAlign: 'center',
        }}
      >
        <b>
          <u>Access denied</u>{' '}
        </b>
        <br />
        You are probably on a mobile device, or using an unsupported browser for this webpage - IE /
        Edge / Safari / Firefox.
        <br /> <br />
        PS: For the best experience use a desktop with a 1080p resolution :)
      </div>
    );
  }
}

export default NotFoundPage;
