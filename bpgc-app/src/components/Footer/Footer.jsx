import React, { Component } from 'react';
import '@styles/footerStyles.scss';
import { Parallax } from 'react-scroll-parallax';

class Footer extends Component {
  render() {
    const expandFooter = () => {
      document
        .getElementById('footer-container')
        .classList.toggle('footer-container-wide');
      document
        .getElementById('footer-container')
        .classList.add('disable-with-color-change');
      document.getElementById('footer-text').innerHTML = 'Thank you!';
      document.getElementById('footer-text').style.fontSize = '30px';
      document.getElementById('footer-text').style.margin = '4% auto';
    };

    return (
      <div
        onClick={expandFooter}
        id="footer-container"
        className="footer-container"
      >
        <div className="footer-items-div">
          <span id="footer-text" className="footer-item">
            © 2020 Kunal Dewan
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
