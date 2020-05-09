import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '@styles/coverflowSwiperStyles.scss';
import { Parallax } from 'react-scroll-parallax';

// normal coverflow swiper
import cf_swiper_img_1 from '@images/coverflowImages/img1.jpg';
import cf_swiper_img_2 from '@images/coverflowImages/img2.jpg';
import cf_swiper_img_3 from '@images/coverflowImages/img3.jpg';
import cf_swiper_img_4 from '@images/coverflowImages/img4.jpg';
import cf_swiper_img_5 from '@images/coverflowImages/img5.jpg';
import cf_swiper_img_6 from '@images/coverflowImages/img6.jpg';

// wide coverflow swiper
import cf_wide_img_1 from '@images/coverflowImages/wide/img1.jpg';
import cf_wide_img_2 from '@images/coverflowImages/wide/img2.jpg';
import cf_wide_img_3 from '@images/coverflowImages/wide/img3.jpg';
import cf_wide_img_4 from '@images/coverflowImages/wide/img4.jpg';
import cf_wide_img_5 from '@images/coverflowImages/wide/img5.jpg';
import cf_wide_img_6 from '@images/coverflowImages/wide/img6.jpg';
import cf_wide_img_7 from '@images/coverflowImages/wide/img7.jpg';

import cf_wide_img_8 from '@images/coverflowImages/wide/img8.jpg';
import cf_wide_img_9 from '@images/coverflowImages/wide/img9.jpg';
import cf_wide_img_10 from '@images/coverflowImages/wide/img10.jpg';
import cf_wide_img_11 from '@images/coverflowImages/wide/img11.jpg';
import cf_wide_img_12 from '@images/coverflowImages/wide/img12.jpg';
import cf_wide_img_13 from '@images/coverflowImages/wide/img13.jpg';

// my coverflow swiper
import cf_mine_img_1 from '@images/coverflowImages/mine/img1.jpg';
import cf_mine_img_2 from '@images/coverflowImages/mine/img2.jpg';

const normalCoverflowImages = [
  cf_swiper_img_1,
  cf_swiper_img_2,
  cf_swiper_img_3,
  cf_swiper_img_4,
  cf_swiper_img_5,
  cf_swiper_img_6,
];

const wideCoverflowImages = [
  cf_wide_img_1,
  cf_wide_img_2,
  cf_wide_img_3,
  cf_wide_img_4,
  cf_wide_img_5,
  cf_wide_img_6,
  cf_wide_img_7,
  cf_wide_img_8,
  cf_wide_img_9,
  cf_wide_img_10,
  cf_wide_img_11,
  cf_wide_img_12,
  cf_wide_img_13,
];

const myCoverflowImages = [cf_mine_img_1, cf_mine_img_2];

const CoverflowSwiper = ({ swiperType }) => {
  const params = {
    effect: 'coverflow',
    lazy: true,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: swiperType === 'coverflow-wide' ? 'auto' : 2,
    spaceBetween: 10,
    freeMode: swiperType === 'coverflow-wide' ? true : false,
    coverflowEffect: {
      rotate: swiperType === 'coverflow-wide' ? 15 : 50,
      stretch: 0,
      depth: swiperType === 'coverflow-wide' ? 350 : 250,
      slideShadows: false,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination:
      swiperType === 'coverflow-wide'
        ? false
        : {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
    navigation:
      swiperType === 'coverflow-wide'
        ? {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        : false,
  };

  const getImageItems = () => {
    let imageSet =
      swiperType === 'coverflow-wide'
        ? wideCoverflowImages
        : swiperType === 'mine'
        ? myCoverflowImages
        : normalCoverflowImages;
    return imageSet.map((img) => (
      <div key={img} className="coverflow-swiper-slide">
        <img className="coverflow-styled-image  swiper-lazy" data-src={img} />
        <div className="swiper-lazy-preloader" />
      </div>
    ));
  };

  return (
    <Parallax y={[-30, 70]} tagOuter="figure">
      <Swiper clasName="coverflow-swiper-container" {...params}>
        {getImageItems()}
      </Swiper>
    </Parallax>
  );
};

export default CoverflowSwiper;
