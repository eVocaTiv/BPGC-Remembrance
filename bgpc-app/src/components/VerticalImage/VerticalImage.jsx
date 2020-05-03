import React, { Component } from "react";
import "@styles/verticalImageStyles.scss";
import { Parallax } from "react-scroll-parallax";
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

const FlipEffect = ({ yOffA, yOffB, imgSrc, isFullHeight }) => {
  const params = {
    effect: "flip",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    grabCursor: false,
    flipEffect: {
      shadow: false,
    }
  };
  return (
    <Parallax y={[yOffA, yOffB]} tagOuter="figure">
      <Swiper {...params}>
        <div className={`vertical-img-container ${isFullHeight ? 'vertical-img-container-full-ht' : ' '}`}>
          <img className="vertical-img" src={imgSrc} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black" /> */}
        </div>
        <div className="vertical-img-container">
          <img className="vertical-img" src={imgSrc} />
          {/* <div className="swiper-lazy-preloader swiper-lazy-preloader-black" /> */}
        </div>
      </Swiper>
    </Parallax>
  );
};
export default FlipEffect;
