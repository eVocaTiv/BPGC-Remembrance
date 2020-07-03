import React, { Component } from "react";
import "@styles/introBoxStyles.scss";
import { Parallax } from 'react-scroll-parallax';
 
class IntroBox extends Component {
  render() {
    return (
      <div className="intro-box-container">
        <div className="intro-heading--1">
          <Parallax x={[40, -40]} y={[70, -70]} tagOuter="figure">
            MEMORIES&nbsp;
          </Parallax>
        </div>

        <div className="intro-heading--2">
          <Parallax x={[-40, 40]} y={[70, -70]} tagOuter="figure">
            WRITTEN IN CODE
            <span className="intro-heading-bullet">. &nbsp; &#8675;</span>
          </Parallax>
        </div>
      </div>
    );
  }
}

export default IntroBox;
