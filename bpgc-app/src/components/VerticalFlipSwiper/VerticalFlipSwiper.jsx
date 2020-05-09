import React, { Component } from 'react';
import '@styles/verticalFlipSwiperStyles.scss';
import { Parallax } from 'react-scroll-parallax';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const FlipEffect = ({ yOffA, yOffB, images }) => {
  const getImageItems = () => {
    return images.map((img) => (
      <div key={img} className="vertical-img-container">
        <img className="vertical-img swiper-lazy" data-src={img} />
        <div className="swiper-lazy-preloader" />
      </div>
    ));
  };

  const params = {
    effect: 'flip',
    lazy: true,
    grabCursor: images.length > 1,
    pagination:
      images.length > 1
        ? {
            el: '.swiper-pagination',
            dynamicBullets: true,
          }
        : {},
  };
  return (
    <Parallax y={[yOffA, yOffB]} tagOuter="figure">
      <Swiper {...params}>{getImageItems()}</Swiper>
    </Parallax>
  );
};
export default FlipEffect;
