import React, { Component } from 'react';

class NotFoundPage extends Component {
  render() {
    return (
      <div style={{
          display: 'block',
          fontSize: '3rem',
          width: '80%',
          margin: '15% auto',
          textAlign: 'center',
      }}>
        <b><u>Access denied</u> </b><br />You are probably using an unsupported browser for this webpage - IE / Edge / Safari / Firefox.
      </div>
    );
  }
}

export default NotFoundPage;
