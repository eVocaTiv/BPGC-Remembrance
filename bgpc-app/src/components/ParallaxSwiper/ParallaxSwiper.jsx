import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "@styles/parallaxSwiperStyles.scss";

const ParallaxSwiper = () => {
  const params = {
    lazy: true,
    speed: 600,
    parallax: true,
    parallaxEl: {
      el: ".parallax-bg",
      value: "-23%",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  return (
    <Swiper {...params}>
      <div className="parallax-swiper-top parallax-swiper-top--1"  data-swiper-parallax="-30">
        <div data-swiper-parallax="-2000">
          Slide #1
        </div>
        <div data-swiper-parallax="-2000">Subtitle</div>
        <div data-swiper-parallax="10000">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit amet faucibus felis iaculis
            nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit,
            ac laoreet nibh euismod.
          </p>
        </div>
      </div>
      <div className="parallax-swiper-top parallax-swiper-top--2">
        <div data-swiper-parallax="-300">Slide #2</div>
        <div data-swiper-parallax="-200">Subtitle</div>
        <div data-swiper-parallax="-100">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit amet faucibus felis iaculis
            nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit,
            ac laoreet nibh euismod.
          </p>
        </div>
      </div>
      <div className="parallax-swiper-top parallax-swiper-top--3">
        <div data-swiper-parallax="-300">Slide #3</div>
        <div data-swiper-parallax="-200">Subtitle</div>
        <div data-swiper-parallax="-100">
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
