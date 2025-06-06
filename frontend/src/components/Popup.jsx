import React from "react";

function Popup({ onClose }) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50  flex items-center justify-center bg-black/40 backdrop-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white px-6 py-4  shadow-lg text-center w-[60%] h-[90%]"
      >
      
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        <p className="text-lg font-semibold">Added to cart!</p>
      </div>
    </div>
  );
}

export default Popup;