import React, { useState, useEffect } from "react";
import pastWork1 from "../assets/images/pastWork1.png";
import pastWork2 from "../assets/images/workTwo.jpg";
import pastWork3 from "../assets/images/workThree.png";
import pastWork4 from "../assets/images/workFour.png";
import pastWork5 from "../assets/images/workFive.png";

const images = [
  { src: pastWork1 },
  { src: pastWork2},
  { src: pastWork3 },
  { src: pastWork4 },
  { src: pastWork5},
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = 4; // Number of images per slide on desktop
  const isMobile = window.innerWidth < 768;

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 transition-transform duration-700 ease-in-out">
        {images.slice(slideIndex, slideIndex + (isMobile ? 1 : visibleImages)).map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image.src}
              alt={image.caption}
              className="w-full  h-150 md:h-96 object-cover rounded-lg"
            />
            <div className="text-center text-white bg-black/50 p-2 rounded-b-lg">
              {image.caption}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setSlideIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          )
        }
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full text-2xl"
      >
        &#10094;
      </button>
      <button
        onClick={() => setSlideIndex((prevIndex) => (prevIndex + 1) % images.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full text-2xl"
      >
        &#10095;
      </button>
    </div>
  );
}

export default Slider;
