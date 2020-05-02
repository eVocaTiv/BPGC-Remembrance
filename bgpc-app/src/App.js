import React from "react";
import "./App.css";
import "@styles/commonStyles.scss";
import { ParallaxSwiper, CoverflowSwiper, IntroBox, Navbar } from "@components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <IntroBox />
      <ParallaxSwiper />
      <CoverflowSwiper />
    </div>
  );
}

export default App;
