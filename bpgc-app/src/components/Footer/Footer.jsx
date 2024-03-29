import React, { Component } from 'react';
import '@styles/footerStyles.scss';

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
      document.getElementById('footer-text').style.margin = ' 2% auto 0 auto';
      document.getElementById('credits-text').style.display = 'block';
      document.getElementById('credits-text').style.opacity = '1';
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
        <span id="credits-text" className="credits-item">
          <b style={{ color: '#7DFFAD' }}>Photos Credits:</b> &nbsp; Kunal Dewan, Dept. of
          Photography BPGC &amp; several other BITSians!
        </span>
      </div>
    );
  }
}

export default Footer;
