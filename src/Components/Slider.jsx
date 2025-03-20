import React, { useState, useEffect } from "react";
import pastWork1 from "../assets/images/pastWork1.png";
import pastWork2 from "../assets/images/workTwo.jpg";
import pastWork3 from "../assets/images/workThree.png";
import pastWork4 from "../assets/images/workFour.png";
import pastWork5 from "../assets/images/workFive.png";

const images = [pastWork1, pastWork2, pastWork3, pastWork4, pastWork5];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4); // Default for desktop

  // Update images per view based on screen width
  useEffect(() => {
    const handleResize = () => {
      setItemsPerView(window.innerWidth < 768 ? 1 : 4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Move to the next set of images
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= images.length ? 0 : prevIndex + 1
    );
  };

  // Move to the previous set of images
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center w-[95%] mx-auto overflow-hidden">
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 text-4xl bg-gray-900 text-white px-4 py-2 rounded-full z-10"
      >
        ←
      </button>

      {/* Image Container */}
      <div className="flex gap-6 transition-transform duration-500 ease-in-out">
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

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 text-4xl bg-gray-900 text-white px-4 py-2 rounded-full z-10"
      >
        →
      </button>
    </div>
  );
};

export default Slider;
