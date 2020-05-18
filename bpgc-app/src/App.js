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
  NotFoundPage,
} from '@components';
import { checkForInvalidBrowser, mobileCheck } from '@utils/helpers';
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
  if (checkForInvalidBrowser() || mobileCheck()) {
    return <NotFoundPage />;
  }

  return (
    <ParallaxProvider>
      <div className="App">
        <Navbar />
        <IntroBox />
        <ParallaxSwiper />
        <CoverflowSwiper autoPlay centeredSlides />
        <BGImage imgSrc={bgImageKeyboard} />
        <VerticalFlipSwiper preload images={[v1img1]} />
        <VerticalFlipSwiper images={[v2img1, v2img2]} />
        <VerticalFlipSwiper images={[v3img1, v3img2]} />
        <CubeSwiper />

        <BGImageParallax imageNumber={1} yOffA={100} yOffB={-50} />
        <VerticalFlipSwiper images={[v5img1, v5img2]} />
        <VerticalFlipSwiper images={[v4img1]} />
        <VerticalFlipSwiper images={[v1img1]} />
        <BGImageParallax doubleHeight imageNumber={2} yOffA={50} yOffB={10} />
        <CoverflowSwiper className="top-extra-50-margin" autoPlay centeredSlides swiperType="coverflow-wide" />
        <CoverflowSwiper  className="top-extra-50-margin" topMargin autoPlay swiperType="mine" />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
