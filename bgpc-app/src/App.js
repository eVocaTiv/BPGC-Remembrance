import React from "react";
import "./App.css";
import "@styles/commonStyles.scss";
import { ParallaxSwiper, CoverflowSwiper, IntroBox, Navbar } from "@components";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
        <div className="App">
          <Navbar />
          <IntroBox />
          <ParallaxSwiper />
          <CoverflowSwiper />
        </div>
      </ParallaxProvider>
  );
}

export default App;
