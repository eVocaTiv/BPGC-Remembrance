import React, { Component } from "react";
import "@styles/bgImageStyles.scss";
import { Parallax } from "react-scroll-parallax";

class BGImage extends Component {
  render() {
    const { imgSrc } = this.props;
    return (
        <div className="bg-img-container">
          <img className="bg-image" data-src={imgSrc} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black" /> */}
        </div>
    );
  }
}

export default BGImage;
