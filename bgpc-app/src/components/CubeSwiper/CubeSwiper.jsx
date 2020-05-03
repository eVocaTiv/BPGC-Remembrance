
  import React from 'react';
  import Swiper from 'react-id-swiper';
  import "swiper/css/swiper.css";
  import "@styles/cubeSwiperStyles.scss";
  import cf_swiper_img_1 from "@images/img1.jpg";
  import cf_swiper_img_2 from "@images/img2.jpg";
  import cf_swiper_img_3 from "@images/img3.jpg";
  import cf_swiper_img_4 from "@images/img4.jpg";
  import { Parallax } from 'react-scroll-parallax';

  const CubeEffect = () => {
    const params = {
      loop: true,
      lazy: true,
      effect: 'cube',
      clickable: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      }
    }

    return (
      <Parallax y={[-10, 110]} tagOuter="figure">
        <Swiper {...params}>
          <div className="cube-swiper-slide">
            <img className="cube-styled-image swiper-lazy" src={cf_swiper_img_1} />
            <div className="swiper-lazy-preloader" />
          </div>
          <div className="cube-swiper-slide">
            <img className="cube-styled-image swiper-lazy" src={cf_swiper_img_2} />
            <div className="swiper-lazy-preloader" />
          </div>
          <div className="cube-swiper-slide">
            <img className="cube-styled-image swiper-lazy" src={cf_swiper_img_3} />
            <div className="swiper-lazy-preloader" />
          </div>
          <div className="cube-swiper-slide">
            <img className="cube-styled-image swiper-lazy" src={cf_swiper_img_4} />
            <div className="swiper-lazy-preloader" />
          </div>
        </Swiper>
      </Parallax>
    );
  };

  export default CubeEffect;
    