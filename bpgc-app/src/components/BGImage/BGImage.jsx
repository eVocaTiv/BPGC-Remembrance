
import React, { Component } from "react";
import "@styles/bgImageStyles.scss";

class BGImage extends Component {
  render() {
    const { imgSrc } = this.props;
    return (
        <div className="bg-img-container">
          <img className="bg-image" src={imgSrc} />
        </div>
    );
  }
}

export default BGImage;
