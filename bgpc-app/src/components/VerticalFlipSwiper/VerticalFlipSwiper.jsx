import React, { Component } from "react";
import "@styles/verticalFlipSwiperStyles.scss";
import { Parallax } from "react-scroll-parallax";
import Swiper from 'react-id-swiper';
import "swiper/css/swiper.css";

const FlipEffect = ({ yOffA, yOffB, imgSrc }) => {
  const params = {
    effect: "flip",
    lazy: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  };
  return (
    <Parallax y={[yOffA, yOffB]} tagOuter="figure">
      <Swiper {...params}>
        <div className='vertical-img-container'>
          <img className="vertical-img swiper-lazy" data-src={imgSrc} />
          <div className="swiper-lazy-preloader" />
        </div>
        <div className="vertical-img-container">
          <div className="swiper-lazy-preloader" />
          <img className="vertical-img swiper-lazy" data-src={imgSrc} />
        </div>
        
      </Swiper>
    </Parallax>
  );
};
export default FlipEffect;
