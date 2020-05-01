import React from "react";
import Swiper from "react-id-swiper";
import "swiper/css/swiper.css";

const SwiperDemo = () => {
  const params = {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };

  return (
    <Swiper {...params}>
      <div className="image-div" style={{ backgroundColor: "green", height: "1000px", width: "100px" }}>
        1
      </div>
      <div style={{ backgroundColor: "green", height: "500px" }}>1 </div>
      <div style={{ backgroundColor: "green", height: "500px" }}>1 </div>
    </Swiper>
  );
};

export default SwiperDemo;
