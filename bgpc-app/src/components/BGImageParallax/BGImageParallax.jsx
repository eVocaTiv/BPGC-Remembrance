import React, { Component } from 'react';
import '@styles/bgImageStyles.scss';
import { Parallax } from 'react-scroll-parallax';

class BGImageParallax extends Component {
  render() {
    const { imageNumber, yOffA, yOffB, doubleHeight } = this.props;
    return (
      <Parallax y={[yOffA, yOffB]} tagOuter="figure">
        <div
          className={`bg-img-container-parallax bg-img-container-parallax--${imageNumber} bg-img-double-ht-${doubleHeight}`}
        />
      </Parallax>
    );
  }
}

export default BGImageParallax;
