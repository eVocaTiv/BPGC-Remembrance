import React, { Component } from "react";
import "@styles/navbarStyles.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="nav-items-div">
          <span className="nav-item">Kunal Dewan</span>
          <span className="nav-item">Logo</span>
        </div>
      </div>
    );
  }
}
