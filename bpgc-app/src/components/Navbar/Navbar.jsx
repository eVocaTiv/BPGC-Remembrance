import React, { Component } from 'react';
import '@styles/navbarStyles.scss';

class Navbar extends Component {
  componentDidMount() {
    this._div.scrollTop = 0;
  }

  render() {
    return (
      <div ref={(ref) => (this._div = ref)} className="navbar-container">
        <div className="nav-items-div">
          <span className="nav-item">
            <a target="_blank" href="https://kunaldewan.com">
              Kunal Dewan
            </a>
          </span>
          <span className="nav-item">
            <a
              target="_blank"
              href="https://github.com/eVocaTiv/BPGC-Remembrance"
            >
              Project GitHub
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Navbar;
