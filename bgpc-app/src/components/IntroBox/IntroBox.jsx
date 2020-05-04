import React, { Component } from "react";
import "@styles/introBoxStyles.scss";
import { Parallax } from 'react-scroll-parallax';
 
export default class IntroBox extends Component {
  render() {
    return (
      <div className="intro-box-container">
        <div className="intro-heading--1">
          <Parallax x={[40, -40]} y={[70, -70]} tagOuter="figure">
            MEMORIES{'_'}
          </Parallax>
        </div>

        <div className="intro-heading--2">
          <Parallax x={[-40, 40]} y={[70, -70]} tagOuter="figure">
            WRITTEN IN CODE
            <span className="intro-heading-bullet">.</span>
          </Parallax>
        </div>
      </div>
    );
  }
}
