import React, { Component } from "react";
import "@styles/verticalFlipSwiperStyles.scss";
import { Parallax } from "react-scroll-parallax";
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

const FlipEffect = ({ yOffA, yOffB, imgSrc }) => {
  const params = {
    effect: "flip",
    lazy: true,
    loop: true,
    grabCursor: true,
  };
  return (
    <Parallax y={[yOffA, yOffB]} tagOuter="figure">
      <Swiper {...params}>
        <div className='vertical-img-container'>
          <img className="vertical-img swiper-lazy" src={imgSrc} />
          <div className="swiper-lazy-preloader" />
        </div>
        <div className="vertical-img-container">
          <img className="vertical-img swiper-lazy" src={imgSrc} />
          <div className="swiper-lazy-preloader" />
        </div>
        
      </Swiper>
    </Parallax>
  );
};
export default FlipEffect;
