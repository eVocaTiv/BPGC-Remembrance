import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '@styles/parallaxSwiperStyles.scss';
import { Parallax } from 'react-scroll-parallax';

const ParallaxSwiper = () => {
  const params = {
    lazy: true,
    speed: 600,
    parallax: true,
    grabCursor: true,
    parallaxEl: {
      el: '.parallax-bg',
      value: '-23%',
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  return (
    <div className="parallax-swiper-container">
      <Swiper {...params}>
        <div className="parallax-swiper-top-slide parallax-swiper-top-slide--1">
          <div
            className="parallax-swiper-top-slide_heading"
            data-swiper-parallax="-400"
          >
            <Parallax y={[-40, 40]} x={[-220, 120]} tagOuter="figure">
              Welcome &nbsp;
              <span
                className="parallax-swiper-top-slide_sub-heading"
                data-swiper-parallax="600"
              >
                &#8594;
              </span>
            </Parallax>
          </div>
        </div>
        <div className="parallax-swiper-top-slide  parallax-swiper-top-slide--2">
          <div
            className="parallax-swiper-top-slide_heading"
            data-swiper-parallax="-400"
          >
            <Parallax y={[-40, 40]} x={[-220, 120]} tagOuter="figure">
              BITS Pilani
            </Parallax>
          </div>
          <div
            className="parallax-swiper-top-slide_data"
            data-swiper-parallax="10000"
          >
            <p>
              This is an endearing collection of my undergraduate memories,
              connecting with awesome people, places and feelings. So take a backseat and enjoy!
            </p>
          </div>
        </div>
        <div className="parallax-swiper-top-slide  parallax-swiper-top-slide--3">
          <div
            className="parallax-swiper-top-slide_heading"
            data-swiper-parallax="-400"
          >
            <Parallax y={[-40, 40]} x={[-220, 120]} tagOuter="figure">
              It's magic!
            </Parallax>
          </div>
          <div
            className="parallax-swiper-top-slide_data"
            data-swiper-parallax="10000"
          >
            <p>
              Feel free to get in touch should you have any similar ideas to work with,
              or wish to showcase your own memories here!
            </p>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default ParallaxSwiper;
