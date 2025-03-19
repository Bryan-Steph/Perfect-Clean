import React, { useState, useEffect } from 'react';
import PastWork1 from '../assets/images/pastWork1.png';
import PastWork2 from '../assets/images/workTwo.jpg';
import PastWork3 from '../assets/images/workThree.png';
import PastWork4 from '../assets/images/workFour.png';

const images = [
  { src: PastWork1, caption: "Professional Cleaning" },
  { src: PastWork2, caption: "Neat Hallway" },
  { src: PastWork3, caption: "Deep Kitchen Cleaning" },
  { src: PastWork4, caption: "High-Quality Service" }
];

function OurWork() {
  const [slideIndex, setSlideIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="mt-0">
               <div className="sm:flex  sm:justify-between bg-[#dcfbd233]">
                <h1 className=" md:w-150 font-bold  text-5xl mx-0 ml-5 sm:ml-25 leading-tight mt-10 sm:mx-0">Our Past Works</h1>
                <div className="sm:w-1/2">
                <p className="  text-xl mx-5 my-10 sm:my-0 pt-10">Explore our portfolio to see the quality
                   and range of services we have provided to our satisfied clients.</p>
                <p className="sm:mt-5 text-blue-400 mt-10 mx-5"><a href="">Peek at our professional Work-folio</a> </p>
                </div>
               
            </div>

      {/* Slider Container */}
      <div className="relative w-full min-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg mt-10">
        {/* Images */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-700 ease-in-out ${
              index === slideIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-80 md:h-96 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-lg">
              {image.caption}
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full text-2xl"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
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
    </section>
  );
}

export default OurWork;
