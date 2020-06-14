import React from 'react';
import '@styles/verticalFlipSwiperStyles.scss';
import { Parallax } from 'react-scroll-parallax';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import LazyLoad from 'react-lazyload';

const FlipEffect = ({ images }) => {
  const getImageItems = () => {
    // work around lazy load bug for 1st image.
    return images.map((img, index) => {
      if (index === 0) {
        return (
          <div key={img} className="vertical-img-container">
            <LazyLoad>
              <img className="vertical-img" src={img} />
            </LazyLoad>
          </div>
        );
      }
      return (
        <div key={img} className="vertical-img-container">
          <LazyLoad>
            <img className="vertical-img swiper-lazy" data-src={img} />
            <div className="swiper-lazy-preloader" />
          </LazyLoad>
        </div>
      );
    });
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
    <Parallax tagOuter="figure">
      <Swiper {...params}>{getImageItems()}</Swiper>
    </Parallax>
  );
};
export default FlipEffect;
