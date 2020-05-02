import React from "react";
import "./App.css";
import "@styles/commonStyles.scss";
import { ParallaxSwiper, CoverflowSwiper } from "@components";

function App() {
  return (
    <div className="App">
      <ParallaxSwiper />
      <CoverflowSwiper />
    </div>
  );
}

export default App;
