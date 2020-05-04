import React from 'react';
import './App.css';
import '@styles/commonStyles.scss';
import {
  ParallaxSwiper,
  CoverflowSwiper,
  IntroBox,
  Navbar,
  CubeSwiper,
  BGImage,
  VerticalFlipSwiper,
  BGImageParallax,
} from '@components';
import { ParallaxProvider } from 'react-scroll-parallax';
import cf_swiper_img_1 from '@images/img1.jpg';
import cf_swiper_img_2 from '@images/img2.jpg';
import cf_swiper_img_3 from '@images/img3.jpg';
import cf_swiper_img_4 from '@images/img4.jpg';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <IntroBox />
        <ParallaxSwiper />
        <CoverflowSwiper swiperType="coverflow" />
        <CubeSwiper />
        <BGImage imgSrc={cf_swiper_img_3} />
        <VerticalFlipSwiper
          yOffA={-250}
          yOffB={-475}
          imgSrc={cf_swiper_img_1}
        />
        <VerticalFlipSwiper yOffA={120} yOffB={-210} imgSrc={cf_swiper_img_2} />
        <VerticalFlipSwiper yOffA={120} yOffB={-135} imgSrc={cf_swiper_img_3} />
        <BGImageParallax imageNumber={1} yOffA={150} yOffB={-70} />
        <VerticalFlipSwiper yOffA={120} yOffB={-65} imgSrc={cf_swiper_img_3} />
        <BGImageParallax doubleHeight imageNumber={1} yOffA={-30} yOffB={-51} />
        <VerticalFlipSwiper yOffA={120} yOffB={20} imgSrc={cf_swiper_img_4} />
      </div>
    </ParallaxProvider>
  );
}

export default App;
