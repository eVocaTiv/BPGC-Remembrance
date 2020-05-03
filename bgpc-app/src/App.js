import React from "react";
import "./App.css";
import "@styles/commonStyles.scss";
import { ParallaxSwiper, CoverflowSwiper, IntroBox, Navbar, CubeSwiper, BGImage, VerticalFlipSwiper } from "@components";
import { ParallaxProvider } from "react-scroll-parallax";
import cf_swiper_img_1 from "@images/img1.jpg";
import cf_swiper_img_2 from "@images/img2.jpg";
import cf_swiper_img_3 from "@images/img3.jpg";
import cf_swiper_img_4 from "@images/img4.jpg";

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <IntroBox />
        <ParallaxSwiper />
        <CoverflowSwiper />
        <CubeSwiper />
        <BGImage imgSrc={cf_swiper_img_2} />
        <VerticalFlipSwiper  yOffA={-200} yOffB={-425} imgSrc={cf_swiper_img_1} />
        <VerticalFlipSwiper  yOffA={120} yOffB={-175} imgSrc={cf_swiper_img_2} />
        <VerticalFlipSwiper  yOffA={120} yOffB={-175} imgSrc={cf_swiper_img_3} />
        <VerticalFlipSwiper  yOffA={120} yOffB={-175} imgSrc={cf_swiper_img_3} />
        <VerticalFlipSwiper  yOffA={120} yOffB={-175} imgSrc={cf_swiper_img_4} />

      </div>
    </ParallaxProvider>
  );
}

export default App;
