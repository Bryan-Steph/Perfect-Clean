import React, { useState, useEffect } from "react";
import pastWork1 from "../assets/images/pastWork1.png";
import pastWork2 from "../assets/images/workTwo.jpg";
import pastWork3 from "../assets/images/workThree.png";

const images = [
  { src: pastWork1, caption: "Caption Text" },
  { src: pastWork2, caption: "Caption Two" },
  { src: pastWork3, caption: "Caption Three" },
];

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-full transition-opacity duration-700 ease-in-out ${
            index === slideIndex ? "block" : "hidden"
          }`}
        >
          <img
            src={image.src}
            alt={image.caption}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
            {image.caption}
          </div>
        </div>
      ))}

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

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === slideIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
