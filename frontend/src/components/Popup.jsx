// // Popup.jsx
// import React, { useState } from "react";
// import { useCart } from "../context/CartContext"; // ★ new import


// function QuantitySelector({ initialQty = 1, onChange }) {
//   const [qty, setQty] = useState(initialQty);

//   const changeQty = (delta) => {
//     const next = qty + delta;
//     if (next < 1) return; // don’t allow 0 or negative
//     setQty(next);
//     onChange?.(next);     // notify parent ↔ backend
//   };

//   return (
//     <div className="flex items-center gap-3">
//       <button
//         className="px-2 text-xl  hover:text-red-600"
//         onClick={() => changeQty(-1)}
//       >
//         –
//       </button>

//       <span className="min-w-[2ch] text-center select-none">{qty}</span>

//       <button
//         className="px-2 text-xl  hover:text-green-600"
//         onClick={() => changeQty(1)}
//       >
//         +
//       </button>
//     </div>
//   );
// }


// export default function Popup({ product, onClose }) {
//     const { addToCart } = useCart(); // ★ use addToCart
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [qty, setQty] = useState(1); // ★ track local qty
//   const images = [product.image, product.image2];

//   /* 👉 handle qty changes here (API, context, etc.) */
//   const handleQuantityChange = async (qty) => {
//     try {
//       await fetch("/api/cart/quantity", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ productId: product._id, quantity: qty }),
//       });
//     } catch (err) {
//       console.error("Failed to sync quantity", err);
//     }
//   };

//    const handleAdd = () => {
//     addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, qty);
//     onClose();
//   };

//   return (
//     <div
//       onClick={onClose}
//       className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-sm"
//     >
//       <div
//         onClick={(e) => e.stopPropagation()}
//         className="relative bg-white shadow-lg flex w-[60%] h-[90%] px-6 py-8"
//       >
//         {/* ✖ Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-0 right-2 text-gray-600 hover:text-black text-[2em]"
//         >
//           ×
//         </button>

//         {/* ◀ Slider side */}
//         <div className="w-1/2 h-full flex flex-col items-center justify-center">
//           <div className="w-full h-[80%] flex items-center justify-center overflow-hidden">
//             <img
//               src={images[currentIndex]}
//               alt={`Slide ${currentIndex}`}
//               className="max-h-full object-contain transition-all duration-300"
//             />
//           </div>

//           {/* Dots */}
//           <div className="mt-4 flex gap-2">
//             {images.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentIndex(i)}
//                 className={`w-2 h-2 rounded-full ${
//                   i === currentIndex ? "bg-black" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* ▶ Info side */}
//         <div className="w-1/2 h-full flex flex-col px-20  items-start gap-4  ">
//           {/* Name & price */}
//           <div className=" mt-[5vw]  space-y-5">
//             <h2 className="text-2xl font-semibold">{product.name}</h2>
//             <p className="text-xl font-medium">{product.price}</p>
//           </div>

//           <div className="sku-code text-[0.8em] font-semibold text-gray-400">
//             <span >SKU: 0004</span>

//           </div>

//           {/* Colour swatch */}
//           <div className="flex flex-col  gap-2 ">
//             <span>Colour: blue*</span>
//             <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-black" />
//           </div>

//           {/* ✅ Quantity selector */}
//           <div className="flex flex-col  gap-2">
//             <span>Quantity</span>
//             <div className="border h-10 flex items center ">
  
//       <QuantitySelector initialQty={1} onChange={setQty} />
 
// </div>

// </div>

//          <div className="button w-full mt-10 text-center ">
//            {/* Add-to-cart */}
//           <button
//           onClick={handleAdd} 
//             className="bg-black w-[100%] text-white font-semibold rounded-md  py-2 hover:underline"
//           >
//             Add to Cart
//           </button>
//          </div>

//          <div>
//           <a href="#">
//             <span className="text-[0.8em] font-semibold underline  ">View More Details</span>
//           </a>
//          </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

function QuantitySelector({ initialQty = 1, onChange }) {
  const [qty, setQty] = useState(initialQty);

  const changeQty = (delta) => {
    const next = qty + delta;
    if (next < 1) return;
    setQty(next);
    onChange?.(next);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        className="px-2 text-xl hover:text-red-600"
        onClick={() => changeQty(-1)}
      >
        –
      </button>
      <span className="min-w-[2ch] text-center select-none">{qty}</span>
      <button
        className="px-2 text-xl hover:text-green-600"
        onClick={() => changeQty(1)}
      >
        +
      </button>
    </div>
  );
}

export default function Popup({ product, onClose }) {
  const { addToCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const images = [product.image, product.image2];

  const handleAdd = () => {
    addToCart(
      { id: product.id, name: product.name, price: product.price, image: product.image },
      qty
    );
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-sm p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white shadow-lg flex flex-col sm:flex-row w-full max-w-4xl h-auto sm:h-[90%] p-4 sm:p-8 rounded-md overflow-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-3xl sm:text-4xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        {/* Images */}
        <div className="w-full sm:w-1/2 h-60 sm:h-full flex flex-col items-center justify-center">
          <div className="w-full h-full flex items-center justify-center overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="max-h-full object-contain transition-all duration-300"
            />
          </div>
          <div className="mt-4 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-black" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="w-full sm:w-1/2 h-full flex flex-col px-0 sm:px-8 mt-6 sm:mt-0 items-start gap-4">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold">{product.name}</h2>
            <p className="text-lg sm:text-xl font-medium">${product.price}</p>
          </div>

          <div className="text-sm sm:text-base font-semibold text-gray-400">
            SKU: 0004
          </div>

          <div className="flex flex-col gap-1">
            <span>Colour: blue*</span>
            <div className="w-5 h-5 rounded-full bg-blue-500 border-2 border-black" />
          </div>

          <div className="flex flex-col gap-2 w-full">
            <span>Quantity</span>
            <div className="border h-10 flex items-center px-2">
              <QuantitySelector initialQty={1} onChange={setQty} />
            </div>
          </div>

          <button
            onClick={handleAdd}
            className="bg-black w-full text-white font-semibold rounded-md py-2 hover:underline"
          >
            Add to Cart
          </button>

          <a href="#" className="text-sm font-semibold underline mt-2">
            View More Details
          </a>
        </div>
      </div>
    </div>
  );
}
