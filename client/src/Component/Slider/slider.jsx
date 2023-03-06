import React, { useState } from "react";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "./slider.css";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://st3.myideasoft.com/idea/gj/35/themes/selftpl_5f1ab42205476/assets/uploads/slider_7.jpg?revision=7.2.5.0-10-1672303272",
    "https://st3.myideasoft.com/idea/gj/35/themes/selftpl_5f1ab42205476/assets/uploads/slider_4.jpg?revision=7.2.5.0-10-1672303272",
    "https://st3.myideasoft.com/idea/gj/35/themes/selftpl_5f1ab42205476/assets/uploads/slider_5.jpg?revision=7.2.5.0-10-1672303272",
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
          <div className="slider-container" style={{ width: `${data.length * 85}vw`, transform: `translateX(-${currentSlide * 85}vw)` }}>
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