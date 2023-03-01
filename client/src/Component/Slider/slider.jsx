import React, { useState } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

//icon west bozuk

  return (
    <div className="slider-container">
      <div className="slider-wrapper">
        
        <div className="icon-west" onClick={prevSlide}>
          <ArrowBackIosIcon />
        </div>
        
        <div className="slider">
          <div className="container" style={{ width: `${data.length * 93}vw`, transform: `translateX(-${currentSlide * 93}vw)` }}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
          </div>
        </div>

          <div className="icon-east" onClick={nextSlide}>
            <ArrowForwardIosIcon />
          </div>

      </div>


    </div>
  );
};

export default Slider;