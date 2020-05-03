import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "@styles/coverflowSwiperStyles.scss";
import cf_swiper_img_1 from "@images/img1.jpg";
import cf_swiper_img_2 from "@images/img2.jpg";
import cf_swiper_img_3 from "@images/img3.jpg";
import cf_swiper_img_4 from "@images/img4.jpg";
import { Parallax } from 'react-scroll-parallax';

const CoverflowSwiper = () => {
  const params = {
    effect: 'coverflow',
    loop: true,
    lazy: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: '3',
    spaceBetween: 0,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: false,
    },
    lazy: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    }
  };

  return (
    <Parallax y={[-30, 70]} tagOuter="figure">
      <Swiper clasName="coverflow-swiper-container" {...params}>
        <div className="coverflow-swiper-slide">
          <img className="coverflow-styled-image  swiper-lazy" src={cf_swiper_img_1} />
          <div className="swiper-lazy-preloader" />
        </div>
        <div className="coverflow-swiper-slide">
          <img className="coverflow-styled-image  swiper-lazy" src={cf_swiper_img_2} />
          <div className="swiper-lazy-preloader" />
        </div>
        <div className="coverflow-swiper-slide">
          <img className="coverflow-styled-image  swiper-lazy" src={cf_swiper_img_3} />
          <div className="swiper-lazy-preloader" />
        </div>
        <div className="coverflow-swiper-slide">
          <img className="coverflow-styled-image  swiper-lazy" src={cf_swiper_img_4} />
          <div className="swiper-lazy-preloader" />
        </div>
      </Swiper>
    </Parallax>
  );
};

export default CoverflowSwiper;
