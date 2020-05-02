import React, { Component } from "react";
import "@styles/introBoxStyles.scss";

export default class IntroBox extends Component {
  render() {
    return (
      <div className="intro-box-container">
        <div className="intro-heading--1">MEMORIES,</div>
        <div className="intro-heading--2">
          WRITTEN IN CODE
          <span className="intro-heading-bullet">.</span>
        </div>
      </div>
    );
  }
}
