import React from "react";
import "./Banner.css";
import {cam} from "../../assests/index"

const Banner = () => {
  return (
    <div className="bg-banner">
      <div className="ellipse-right"></div>
      <div className="ellipse-left"></div>
      <div className="big-circle"></div>
      <div className="small-circle"></div>
      <div className="photo-text-container">
        <h1 className="photo-text">
          Corporate <br /> Photography
        </h1>
      </div>
      <div className="cam-pic">
        <img src={cam} alt="cam-pic"/>
      </div>
    </div>
  );
};

export default Banner;
