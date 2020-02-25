import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import HomeNavbar from "./HomeNavbar";
import SideBarAll from './../sharedComponents/sideBar';
export default class DoTest extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-component">
          <HomeNavbar />
          <div id="bg">
            <SideBarAll />
            <div className="svgDiv">
              <h1>Do you learn Programming?</h1>
            </div>
            <button className="test">Do Test</button>
            <Link to="/view/courses" className="back-left-btn">
              <i className="fas fa-chevron-left"></i>
            </Link>
            
          </div>
        </div>    
      </React.Fragment>
    );
  }
}
