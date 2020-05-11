import React, { Component } from 'react';
import '@styles/verticalFlipSwiperStyles.scss';
import { Parallax } from 'react-scroll-parallax';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import LazyLoad from 'react-lazyload';

const FlipEffect = ({ yOffA, yOffB, images, preload }) => {
  const getImageItems = () => {
    if(preload) {
      return images.map((img) => (
        <div key={img} className="vertical-img-container">
          <img className="vertical-img swiper-lazy" data-src={img} />
          <div className="swiper-lazy-preloader" />
        </div>
      ));
    }
    return images.map((img) => (
      <div key={img} className="vertical-img-container">
        <LazyLoad>
          <img className="vertical-img swiper-lazy" data-src={img} />
          <div className="swiper-lazy-preloader" />
        </LazyLoad>
      </div>
    ));
  };

  const params = {
    effect: 'flip',
    lazy: true,
    // grabCursor: images.length > 1,
    // pagination:
    //   images.length > 1
    //     ? {
    //         el: '.swiper-pagination',
    //         dynamicBullets: true,
    //       }
    //     : {},
    autoplay:{
          delay: 3000,
          disableOnInteraction: false,
        },
  };
  return (
    <Parallax y={[yOffA, yOffB]} tagOuter="figure">
      <Swiper {...params}>{getImageItems()}</Swiper>
    </Parallax>
  );
};
export default FlipEffect;
