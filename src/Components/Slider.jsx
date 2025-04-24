import React from "react";
import Slider from "react-slick";
import pastWork1 from "../assets/images/pastWork1.png";
import pastWork2 from "../assets/images/workTwo.jpg";
import pastWork3 from "../assets/images/workThree.png";
import pastWork4 from "../assets/images/workFour.png";
import pastWork5 from "../assets/images/workFive.png";
import Left from "../assets/images/left.png";
import Right from "../assets/images/right.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [pastWork1, pastWork2, pastWork3, pastWork4, pastWork5];

// Custom Arrow Components
const NextArrow = ({ onClick }) => {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <img src={Right} className="w-10 rounded-full bg-black" alt="Next" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 cursor-pointer" onClick={onClick}>
      <img src={Left} className="w-10 rounded-full bg-black" alt="Previous" />
    </div>
  );
};

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-[95%] mx-auto overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="px-2">
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[450px] md:h-[500px] sm:h-[350px] object-cover rounded-lg shadow-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;