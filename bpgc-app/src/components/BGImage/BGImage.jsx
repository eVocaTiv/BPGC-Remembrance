import React, { Component } from "react";
import "@styles/bgImageStyles.scss";
import LazyLoad from 'react-lazyload';

class BGImage extends Component {
  render() {
    const { imgSrc } = this.props;
    return (
      // <LazyLoad height={1100}>
      // use thumnail image via Lazy Load example instead of swiper-lazy
      // ***will save huge requests here.
        <div className="bg-img-container">
          <img className="bg-image" src={imgSrc} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black" /> */}
        </div>
        // </LazyLoad>
    );
  }
}

export default BGImage;
