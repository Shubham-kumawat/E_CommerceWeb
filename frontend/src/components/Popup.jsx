
import React, { useState } from "react";

function Popup({ product, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [product.image, product.image2];

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white px-6 py-8 shadow-lg flex w-[60%] h-[90%]"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-gray-600 hover:text-black text-[2em]"
        >
          ×
        </button>

        {/* Left Side: Slider */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <div className="w-full h-[80%] flex items-center justify-center overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="max-h-full object-contain transition-all duration-300"
            />
          </div>

          {/* Dot Indicators */}
          <div className="mt-4 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? "bg-black" : "bg-gray-400"
                }`}
              ></button>
            ))}
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center space-y-4">
          <h2 className="text-2xl font-semibold">{product.name}</h2>
          <p className="text-xl font-medium">{product.price}</p>

          <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800">
            Confirm Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
