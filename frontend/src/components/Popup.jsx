// Popup.jsx
import React, { useState } from "react";

/* ────────────────────────────────────────────────────────────────────────── */
/* Re-usable quantity selector                                               */
/* ────────────────────────────────────────────────────────────────────────── */
function QuantitySelector({ initialQty = 1, onChange }) {
  const [qty, setQty] = useState(initialQty);

  const changeQty = (delta) => {
    const next = qty + delta;
    if (next < 1) return; // don’t allow 0 or negative
    setQty(next);
    onChange?.(next);     // notify parent ↔ backend
  };

  return (
    <div className="flex items-center gap-3">
      <button
        className="px-2 text-xl  hover:text-red-600"
        onClick={() => changeQty(-1)}
      >
        –
      </button>

      <span className="min-w-[2ch] text-center select-none">{qty}</span>

      <button
        className="px-2 text-xl  hover:text-green-600"
        onClick={() => changeQty(1)}
      >
        +
      </button>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/* Main popup                                                                */
/* ────────────────────────────────────────────────────────────────────────── */
export default function Popup({ product, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [product.image, product.image2];

  /* 👉 handle qty changes here (API, context, etc.) */
  const handleQuantityChange = async (qty) => {
    try {
      await fetch("/api/cart/quantity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: product._id, quantity: qty }),
      });
    } catch (err) {
      console.error("Failed to sync quantity", err);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white shadow-lg flex w-[60%] h-[90%] px-6 py-8"
      >
        {/* ✖ Close */}
        <button
          onClick={onClose}
          className="absolute top-0 right-2 text-gray-600 hover:text-black text-[2em]"
        >
          ×
        </button>

        {/* ◀ Slider side */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center">
          <div className="w-full h-[80%] flex items-center justify-center overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="max-h-full object-contain transition-all duration-300"
            />
          </div>

          {/* Dots */}
          <div className="mt-4 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full ${
                  i === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ▶ Info side */}
        <div className="w-1/2 h-full flex flex-col px-20  items-start gap-4  ">
          {/* Name & price */}
          <div className=" mt-[5vw]  space-y-5">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-xl font-medium">{product.price}</p>
          </div>

          <div className="sku-code text-[0.8em] font-semibold text-gray-400">
            <span >SKU: 0004</span>

          </div>

          {/* Colour swatch */}
          <div className="flex flex-col  gap-2 ">
            <span>Colour: blue*</span>
            <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-black" />
          </div>

          {/* ✅ Quantity selector */}
          <div className="flex flex-col  gap-2">
            <span>Quantity</span>
            <div className="border h-10 flex items center ">
  <QuantitySelector
    initialQty={1}
    onChange={handleQuantityChange}
  />
</div>

</div>

         <div className="button w-full mt-10 text-center ">
           {/* Add-to-cart */}
          <button
            onClick={() => console.log("Add to cart")}
            className="bg-black w-[100%] text-white font-semibold rounded-md  py-2 hover:underline"
          >
            Add to Cart
          </button>
         </div>

         <div>
          <a href="#">
            <span className="text-[0.8em] font-semibold underline  ">View More Details</span>
          </a>
         </div>
        </div>
      </div>
    </div>
  );
}
