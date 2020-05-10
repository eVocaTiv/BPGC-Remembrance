import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '@styles/cubeSwiperStyles.scss';
import cube1 from '@images/cubeImages/cube1.jpg';
import cube2 from '@images/cubeImages/cube2.jpg';
import cube3 from '@images/cubeImages/cube3.jpg';
import cube4 from '@images/cubeImages/cube4.jpg';
import { Parallax } from 'react-scroll-parallax';

const CubeEffect = () => {
  const cubeImages = [cube1, cube2, cube3, cube4];

  const getImageItems = () => {
    return cubeImages.map((img) => (
        <div key={img} className="cube-swiper-slide">
          <img className="cube-styled-image swiper-lazy" data-src={img} />
          <div className="swiper-lazy-preloader" />
        </div>
    ));
  };

  const params = {
    loop: true,
    lazy: true,
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };

  return (
    <Parallax y={[-10, 110]} tagOuter="figure">
      <Swiper {...params}>{getImageItems()}</Swiper>
    </Parallax>
  );
};

export default CubeEffect;
