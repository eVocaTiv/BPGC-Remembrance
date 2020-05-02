import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";
import "@styles/parallaxSwiperStyles.scss";

const ParallaxSwiper = () => {
  const params = {
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    loop: true,
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
      <div className="parallax-swiper-top parallax-swiper-top--1" >
        <div className="parallax-swiper-top_heading" data-swiper-parallax="-400">
          Slide #1
        </div>
        <div data-swiper-parallax="-200">Subtitle</div>
        <div data-swiper-parallax="10000">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit amet faucibus felis iaculis
            nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit,
            ac laoreet nibh euismod.
          </p>
        </div>
      </div>
      <div className="parallax-swiper-top parallax-swiper-top--2" >
        <div className=" parallax-swiper-top_heading" data-swiper-parallax="-400">
          Slide #1
        </div>
        <div data-swiper-parallax="-200">Subtitle</div>
        <div data-swiper-parallax="10000">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam dictum mattis velit, sit amet faucibus felis iaculis
            nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec elit suscipit,
            ac laoreet nibh euismod.
          </p>
        </div>
      </div>
      <div className="parallax-swiper-top parallax-swiper-top--3" >
        <div className=" parallax-swiper-top_heading" data-swiper-parallax="-400">
          Slide #1
        </div>
        <div data-swiper-parallax="-200">Subtitle</div>
        <div data-swiper-parallax="10000">
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
