import { useState } from "react";
import React from "react";
import Slider from "react-slick";
import "./Sliders.css";

import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import { FliqaIndiaWedding,one,two } from "../../assests/index";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  ); 
}



function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}

const Sliders = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const images = [
    FliqaIndiaWedding,
    one,
    two,
    one,
  ];

  var settings = {
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 3,
    autoplay: true,
    autoplayspeed: 1000,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
    <div className="mt-5">
      <h1 className="slide-head">Introducing packages</h1>
      <p className="slide-para">Let’s have a look on the package details (Prices are incl. GST)</p>
    </div>
    <div className="slider">
      <Slider {...settings} style={{ width: "80%" }}>
        {images.map((img, index) => (
          <div
            className={index === slideIndex ? "slide slide-active" : "slide"}
            key={index}
          >
            <img src={img} alt="slides" />
            <div className="shadow-slider"></div>
          </div>
        ))}
      </Slider>
    </div>
    </>
    
  );
};

export default Sliders;
