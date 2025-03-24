import React, { useState, useEffect } from "react";
import pastWork1 from "../assets/images/pastWork1.png";
import pastWork2 from "../assets/images/workTwo.jpg";
import pastWork3 from "../assets/images/workThree.png";
import pastWork4 from "../assets/images/workFour.png";
import pastWork5 from "../assets/images/workFive.png";
import Left from "../assets/images/left.png"
import Right from "../assets/images/right.png"



const images = [pastWork1, pastWork2, pastWork3, pastWork4, pastWork5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-[95%] mx-auto overflow-hidden">
      <button
        onClick={prevSlide}
        className="absolute left-4 text-4xl  text-white px-4 py-2 rounded-full z-10"
      >
        <img src={Left} className="w-10 rounded-full" alt="" />
      </button>

      <div className="flex gap-6 transition-transform duration-500  ease-in-out">
        {images
          .slice(currentIndex, currentIndex + itemsPerView)
          .concat(images.slice(0, Math.max(0, itemsPerView - (images.length - currentIndex))))
          .map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-[400px] h-[450px] md:w-[400px] md:h-[500px] sm:w-full sm:h-[350px] object-cover rounded-lg shadow-xl"
            />
          ))}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-4 text-4xl items-center transition-all text-white  px-4 py-2  rounded-full z-20"
      >
        <img src={Right} className="w-10 rounded-full" alt="" />
        {/* <p>> </p> */}
      </button>
    </div>
  ); 
};

export default Slider;
