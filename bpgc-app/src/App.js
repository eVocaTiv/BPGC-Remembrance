import React, { useEffect } from 'react';
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
  Footer,
} from '@components';
import { ParallaxProvider } from 'react-scroll-parallax';
import cf_swiper_img_1 from '@images/img1.jpg';
import cf_swiper_img_2 from '@images/img2.jpg';
import cf_swiper_img_3 from '@images/img3.jpg';
import v1img1 from '@images/verticalImages/v1img1.jpg';
import v2img1 from '@images/verticalImages/v2img1.jpg';
import v2img2 from '@images/verticalImages/v2img2.jpg';
import v3img1 from '@images/verticalImages/v3img1.jpg';
import v3img2 from '@images/verticalImages/v3img2.jpg';
import v4img1 from '@images/verticalImages/v4img1.jpg';

import bgImage1 from '@images/bgImages/borkars.jpg';
import bgImage2 from '@images/bgImages/lightning.jpg';
function App() {

  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <IntroBox />
        <ParallaxSwiper />
        <CoverflowSwiper />
        <CubeSwiper />
        {/* <BGImage imgSrc={bgImage1} /> */}
        <BGImage imgSrc={cf_swiper_img_1} />
        <VerticalFlipSwiper yOffA={-250} yOffB={-475} images={[v1img1]} />
        <VerticalFlipSwiper
          yOffA={120}
          yOffB={-210}
          images={[v2img1, v2img2]}
        />
        <VerticalFlipSwiper
          yOffA={120}
          yOffB={-135}
          images={[v3img1, v3img2]}
        />
        <BGImageParallax imageNumber={1} yOffA={150} yOffB={-70} />
        <VerticalFlipSwiper
          yOffA={180}
          yOffB={-40}
          images={[cf_swiper_img_2, cf_swiper_img_3]}
        />
        <VerticalFlipSwiper yOffA={10} yOffB={50} images={[v4img1]} />
        <BGImageParallax doubleHeight imageNumber={2} yOffA={-20} yOffB={10} />
        <CoverflowSwiper swiperType="coverflow-wide" />
        <CoverflowSwiper swiperType="mine" />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
