import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import mega from "../assets/mega-sale.jpg"; // 



const images = [
  mega,
  "https://m.media-amazon.com/images/G/31/img24/TVs/Abhilasha/GW/sep1/Samsung_Autorotator_1400x679_3._SX1242_QL85_FMpng_.png",
  "https://i.pinimg.com/736x/b5/97/c3/b597c32700b8769c0b77dee0c75d1a4a.jpg"
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="slider">
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>
      <img src={images[current]} alt="banner" className="slide-image" />
      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
};

export default Slider;