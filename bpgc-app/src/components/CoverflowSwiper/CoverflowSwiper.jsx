import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import '@styles/coverflowSwiperStyles.scss';

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
import click55 from '@images/clicks/img55.jpg';
import click56 from '@images/clicks/img56.jpg';
import click1 from '@images/clicks/img1.jpg';
import click22 from '@images/clicks/img22.jpg';
import click25 from '@images/clicks/img25.jpg';
import click27 from '@images/clicks/img27.jpg';
import click28 from '@images/clicks/img28.jpg';
import click34 from '@images/clicks/img34.jpg';
import click50 from '@images/clicks/img50.jpg';
import click53 from '@images/clicks/img53.jpg';
import click47 from '@images/clicks/img47.jpg';
import click46 from '@images/clicks/img46.jpg';
import click52 from '@images/clicks/img52.jpg';

import LazyLoad from 'react-lazyload';

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

const myCoverflowImages = [cf_mine_img_1, cf_mine_img_2, click55, click56, click22, click25, click27, click34, click47, click50, click53, click46, click52];

const CoverflowSwiper = ({ swiperType, autoPlay, centeredSlides }) => {
  const params = {
    effect: 'coverflow',
    lazy: true,
    grabCursor: true,
    freeMode: false,
    spaceBetween: 0,
    autoplay: autoPlay,
    coverflowEffect: {
      rotate: swiperType === 'coverflow-wide' ? 15 : 50,
      stretch: 0,
      depth: swiperType === 'coverflow-wide' ? 350 : 250,
      slideShadows: false,
    },
    pagination:
      swiperType === 'coverflow-wide'
        ? false
        : {
            el: '.swiper-pagination',
            dynamicBullets: true,
          },
    breakpoints: {
      1024: {
        slidesPerView: swiperType === 'coverflow-wide' ? 1 : 2,
        centeredSlides,
      },
      640: {
        slidesPerView: 1,
        centeredSlides: true,
      },
      475: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
        },
        slidesPerView: 1,
        centeredSlides: true,
      },
    },
  };  

  const getImageItems = () => {
    let imageSet =
      swiperType === 'coverflow-wide'
        ? wideCoverflowImages
        : swiperType === 'mine'
        ? myCoverflowImages
        : normalCoverflowImages;

    let isNormalSwiper = !(
      swiperType === 'coverflow-wide' || swiperType === 'mine'
    );

    return imageSet.map((img, index) => {
      let isNormalSwiperImg = 'normal-img-'.concat(isNormalSwiper);
      if (index === 0) {
        return (
          <div key={img} className="coverflow-swiper-slide ">
            <LazyLoad>
              <img className={`coverflow-styled-image ${isNormalSwiperImg}`} src={img} />
            </LazyLoad>
          </div>
        );
      }
      return (
        <div key={img} className="coverflow-swiper-slide">
          <LazyLoad>
            <img
             className={`coverflow-styled-image ${isNormalSwiperImg} swiper-lazy`} 
              data-src={img}
            />
            <div className="swiper-lazy-preloader" />
          </LazyLoad>
        </div>
      );
    });
  };

  return (
    <div className={` ${swiperType}`}>
      <Swiper className="coverflow-swiper-container" {...params}>
        {getImageItems()}
      </Swiper>
    </div>
  );
};

export default CoverflowSwiper;
