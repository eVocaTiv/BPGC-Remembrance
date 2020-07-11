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

// TODO: Refactor 

import v1img1 from '@images/verticalImages/v1img1.jpg';
import v2img1 from '@images/verticalImages/v2img1.jpg';
import v2img2 from '@images/verticalImages/v2img2.jpg';
import v3img1 from '@images/verticalImages/v3img1.jpg';
import v3img2 from '@images/verticalImages/v3img2.jpg';
import v4img1 from '@images/verticalImages/v4img1.jpg';
import v5img1 from '@images/verticalImages/v5img1.jpg';
import v5img2 from '@images/verticalImages/v5img2.jpg';

import click2 from '@images/clicks/img2.jpg';
import click3 from '@images/clicks/img3.jpg';
import click4 from '@images/clicks/img4.jpg';
import click5 from '@images/clicks/img5.jpg';
import click6 from '@images/clicks/img6.jpg';
import click7 from '@images/clicks/img7.jpg';
import click8 from '@images/clicks/img8.jpg';
import click9 from '@images/clicks/img9.jpg';
import click10 from '@images/clicks/img10.jpg';

import click11 from '@images/clicks/img11.jpg';
import click12 from '@images/clicks/img12.jpg';
import click13 from '@images/clicks/img13.jpg';
import click14 from '@images/clicks/img14.jpg';
import click15 from '@images/clicks/img15.jpg';
import click16 from '@images/clicks/img16.jpg';
import click17 from '@images/clicks/img17.jpg';
import click18 from '@images/clicks/img18.jpg';
import click19 from '@images/clicks/img19.jpg';
import click20 from '@images/clicks/img20.jpg';

import click21 from '@images/clicks/img21.jpg';
import click22 from '@images/clicks/img22.jpg';
import click23 from '@images/clicks/img23.jpg';
import click24 from '@images/clicks/img24.jpg';
import click26 from '@images/clicks/img26.jpg';
import click28 from '@images/clicks/img28.jpg';
import click29 from '@images/clicks/img29.jpg';
import click30 from '@images/clicks/img30.jpg';

import click31 from '@images/clicks/img31.jpg';
import click32 from '@images/clicks/img32.jpg';
import click33 from '@images/clicks/img33.jpg';
import click35 from '@images/clicks/img35.jpg';
import click36 from '@images/clicks/img36.jpg';
import click37 from '@images/clicks/img37.jpg';
import click38 from '@images/clicks/img38.jpg';
import click39 from '@images/clicks/img39.jpg';
import click40 from '@images/clicks/img40.jpg';

import click42 from '@images/clicks/img42.jpg';
import click43 from '@images/clicks/img43.jpg';
import click44 from '@images/clicks/img44.jpg';
import click45 from '@images/clicks/img45.jpg';

import click49 from '@images/clicks/img49.jpg';
import click41 from '@images/clicks/img41.jpg';
import click51 from '@images/clicks/img51.jpg';
import click54 from '@images/clicks/img54.jpg';

import click61 from '@images/clicks/img61.jpg';
import click62 from '@images/clicks/img62.jpg';
import click63 from '@images/clicks/img63.jpg';
import click64 from '@images/clicks/img64.jpg';
import click65 from '@images/clicks/img65.jpg';
import click68 from '@images/clicks/img68.jpg';
import click69 from '@images/clicks/img69.jpg';

import click71 from '@images/clicks/img71.jpg';
import click72 from '@images/clicks/img72.jpg';
import click73 from '@images/clicks/img73.jpg';
import click74 from '@images/clicks/img74.jpg';
import click75 from '@images/clicks/img75.jpg';
import click76 from '@images/clicks/img76.jpg';

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
        <VerticalFlipSwiper  images={[v1img1,  click2, click3, click4, click5, click6, click7, click44, click8, click9, click10]} />
        <VerticalFlipSwiper images={[v2img1, v2img2, click11, click12, click13, click14, click15, click16, click17, click68, click22]} />
        <VerticalFlipSwiper images={[v3img1, v3img2, click19, click20, click21, click23, click24,  click26, click29, click30, click69]} />
        <CubeSwiper />

        <BGImageParallax imageNumber={1} yOffA={100} yOffB={-50} />
        <VerticalFlipSwiper images={[v5img2, v5img1 , click33, click36, click39, click61, click64, click71, click75, click49]} />
        <VerticalFlipSwiper images={[click38, v4img1,  click32 , click45, click40,  click37, click62, click65, click76, click72, click43]} />
        <VerticalFlipSwiper images={[click63, click54, click41, click28,  click42, click31, click73, click18, click74, click51]} />
        <BGImageParallax doubleHeight imageNumber={2} yOffA={50} yOffB={10} />
        <CoverflowSwiper autoPlay centeredSlides swiperType="coverflow-wide" />
        <CoverflowSwiper autoPlay swiperType="mine" />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
