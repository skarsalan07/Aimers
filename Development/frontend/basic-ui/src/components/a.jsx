import React, { useState } from 'react';
import '../assets/css/nav.css';


const images = [
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner2-1680x900.jpg",
  "https://ecommerce-1-0-main-frontend.vercel.app/img/mainbanner1-1680x900.jpg"
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div className="carousel-container">
      <div className="arrow left-arrow" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>

      {images.map((image, index) => (
        current === index && (
          <div key={image} className="slide">
            <img src={image} alt="carousel" className="slide-image" />
          </div>
        )
      ))}

      <div className="arrow right-arrow" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="icon">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  );
}

export default Carousel;
