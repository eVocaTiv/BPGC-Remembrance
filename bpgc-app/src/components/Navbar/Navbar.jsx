import React, { Component } from 'react';
import '@styles/navbarStyles.scss';

class Navbar extends Component {
  listener = null;
  state = {
    navbarOpacity: 0,
  };

  componentDidMount() {
    this.listener = document.addEventListener('scroll', (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      const { navbarOpacity } = this.state;
      if (scrolled >= 120) {
        if (navbarOpacity !== 0.75) {
          this.setState({ navbarOpacity: 0.75 });
        }
      } else {
        if (navbarOpacity !== 0) {
          this.setState({ navbarOpacity: 0 });
        }
      }
    });

    this._div.scrollTop = 0;
  }

  componentDidUpdate() {
    document.removeEventListener('scroll', this.listener);
  }

  render() {
    const { navbarOpacity } = this.state;
    return (
      <div
        ref={(ref) => (this._div = ref)}
        style={{
          opacity: navbarOpacity,
          pointerEvents: navbarOpacity > 0 ? 'all' : 'none',
        }}
        className="navbar-container"
      >
        <div className="nav-items-div">
          <span className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://kunaldewan.com"
            >
              Kunal Dewan
            </a>
          </span>
          <span className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/drive/folders/1X19SPycDVfJAA4Mbog4xCoh2_0mCL9kB?usp=sharing"
            >
              More Photos &#8599;	
            </a>
          </span>
          <span className="nav-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
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
