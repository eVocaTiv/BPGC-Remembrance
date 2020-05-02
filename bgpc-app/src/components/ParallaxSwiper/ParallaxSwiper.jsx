import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "@styles/parallaxSwiperStyles.scss";

const ParallaxSwiper = () => {
  const params = {
    lazy: true,
    speed: 600,
    parallax: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    parallaxEl: {
      el: ".parallax-bg",
      value: "-23%",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper className="parallax-swiper-container" {...params}>
      <div className="parallax-swiper-top-slide parallax-swiper-top-slide--1">
        <div className="parallax-swiper-top-slide_heading" data-swiper-parallax="-400">
          Welcome
        </div>
        <div className="parallax-swiper-top-slide_sub-heading" data-swiper-parallax="-200">
          Subtitle
        </div>
        <div className="parallax-swiper-top-slide_data"  data-swiper-parallax="10000">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit amet faucibus felis iaculis
            nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit,
            ac laoreet nibh euismod.
          </p>
        </div>
      </div>
      <div className="parallax-swiper-top-slide  parallax-swiper-top-slide--2">
        <div className="parallax-swiper-top-slide_heading" data-swiper-parallax="-400">
          Slide #2
        </div>
        <div className="parallax-swiper-top-slide_sub-heading" ata-swiper-parallax="-200">
        Subtitle
        </div>
        <div className="parallax-swiper-top-slide_data" data-swiper-parallax="10000">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit amet faucibus felis iaculis
            nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit,
            ac laoreet nibh euismod.
          </p>
        </div>
      </div>
    </Swiper>
  );
};

export default ParallaxSwiper;
