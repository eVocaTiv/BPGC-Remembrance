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
  Footer,
} from '@components';
import { ParallaxProvider } from 'react-scroll-parallax';
import bgImageKeyboard from '@images/img1.jpg';
import v1img1 from '@images/verticalImages/v1img1.jpg';
import v2img1 from '@images/verticalImages/v2img1.jpg';
import v2img2 from '@images/verticalImages/v2img2.jpg';
import v3img1 from '@images/verticalImages/v3img1.jpg';
import v3img2 from '@images/verticalImages/v3img2.jpg';
import v4img1 from '@images/verticalImages/v4img1.jpg';
import v5img1 from '@images/verticalImages/v5img1.jpg';
import v5img2 from '@images/verticalImages/v5img2.jpg';

function App() {
  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <IntroBox />
        <ParallaxSwiper />
        <CoverflowSwiper autoPlay centeredSlides />
        <CubeSwiper />
        <BGImage imgSrc={bgImageKeyboard} />
        <VerticalFlipSwiper
          preload
          yOffA={-200}
          yOffB={-425}
          images={[v1img1]}
        />
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
        <VerticalFlipSwiper yOffA={180} yOffB={-40} images={[v5img1, v5img2]} />
        <VerticalFlipSwiper preload yOffA={10} yOffB={50} images={[v4img1]} />
        <BGImageParallax doubleHeight imageNumber={2} yOffA={-20} yOffB={10} />
        <CoverflowSwiper autoPlay centeredSlides swiperType="coverflow-wide" />
        <CoverflowSwiper autoPlay swiperType="mine" />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
