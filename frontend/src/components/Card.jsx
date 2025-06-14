// import Popup from "./Popup.jsx";
// import React, { useState } from "react";

// function Card() {
//     const data = [
//         {id:1,image: '/product_img/product1a.jpg', image2: '/product_img/product1b.jpg', name: "I'm a product", price: 15.00 },
//         {id:2, image: '/product_img/p2a.avif', image2: '/product_img/p2b.avif', name: "I'm a product", price: 25.00 },
//         {id:3, image: '/product_img/p3a.avif', image2: '/product_img/p3b.avif', name: "I'm a product", price: 35.00 },
//         {id:4, image: '/product_img/p41.avif', image2: '/product_img/p42.avif', name: "I'm a product", price: 35.00 },
//         {id:5, image: '/product_img/p51.avif', image2: '/product_img/p52.avif', name: "I'm a product", price: 35.00 },
//         {id:6, image: '/product_img/p61.avif', image2: '/product_img/p62.avif', name: "I'm a product", price: 35.00 },
//         {id:7, image: '/product_img/p71.avif', image2: '/product_img/p72.avif', name: "I'm a product", price: 35.00 },
//         {id:8, image: '/product_img/p81.avif', image2: '/product_img/p82.avif', name: "I'm a product", price: 35.00 },
//         {id:9, image: '/product_img/p91.avif', image2: '/product_img/p92.avif', name: "I'm a product", price: 35.00},
//         {id:10, image: '/product_img/p101.avif', image2: '/product_img/p102.avif', name: "I'm a product", price: 35.00 },
//         {id:11, image: '/product_img/p111.avif', image2: '/product_img/p112.avif', name: "I'm a product", price: 35.00 },
//         {id:12, image: '/product_img/p113.avif', image2: '/product_img/p1132.avif', name: "I'm a product", price: 35.00 },
//     ];
//  const [showPopup, setShowPopup] = useState(false);
// const [selectedProduct, setSelectedProduct] = useState(null);


//  const handleAddToCart = (product) => {
//   setSelectedProduct(product);   // प्रोडक्ट चुनो
//   setShowPopup(true);            // पॉप-अप खोल दो
// };



// return (
//     <div id="shop" className="w-full min-h-screen px-10 py-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ml-15 mr-15">
//         {data.map((elem, index) => (
//           <div key={index} className="w-108 mb-20 group rounded-md">
//             <div className="w-108 h-100 relative rounded-lg overflow-hidden cursor-pointer image-container">
//               <img
//                 src={elem.image}
//                 alt="Front"
//                 className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"
//               />
//               <img
//                 src={elem.image2}
//                 alt="Back"
//                 className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
//               />
//             </div>

//             <div className="w-full h-20 px-3 py-4 text-center">
//               <div className="cursor-pointer">
//                 <h2 className="font-semibold">{elem.name}</h2>
//                 <p className="font-semibold mt-3">${elem.price}.00</p>
//               </div>
//             </div>

//             <div className="h-20 relative">
//               <button
//                 onClick={() => handleAddToCart(elem)}
//                 className="mt-15 w-4/5 cursor-pointer absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0
//                            group-hover:opacity-100 transition duration-300 bg-white text-black border border-black px-4 py-2 rounded 
//                            hover:bg-black hover:text-white z-10"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {showPopup && selectedProduct && (
//         <Popup
//           product={selectedProduct}
//           onClose={() => setShowPopup(false)}
//         />
//       )}
//     </div>
//   );
// }
// export default Card;


import Popup from "./Popup.jsx";
import React, { useState } from "react";

function Card() {
    const data = [
        { id: 1, image: '/product_img/product1a.jpg', image2: '/product_img/product1b.jpg', name: "I'm a product", price: "15.00" },
        { id: 2, image: '/product_img/p2a.avif', image2: '/product_img/p2b.avif', name: "I'm a product", price: " 25.00" },
        { id: 3, image: '/product_img/p3a.avif', image2: '/product_img/p3b.avif', name: "I'm a product", price: "35.00" },
        { id: 4, image: '/product_img/p41.avif', image2: '/product_img/p42.avif', name: "I'm a product", price: "35.00" },
        { id: 5, image: '/product_img/p51.avif', image2: '/product_img/p52.avif', name: "I'm a product", price: "35.00" },
        { id: 6, image: '/product_img/p61.avif', image2: '/product_img/p62.avif', name: "I'm a product", price: '35.00' },
        { id: 7, image: '/product_img/p71.avif', image2: '/product_img/p72.avif', name: "I'm a product", price: "35.00" },
        { id: 8, image: '/product_img/p81.avif', image2: '/product_img/p82.avif', name: "I'm a product", price: "35.00" },
        { id: 9, image: '/product_img/p91.avif', image2: '/product_img/p92.avif', name: "I'm a product", price: '35.00' },
        { id: 10, image: '/product_img/p101.avif', image2: '/product_img/p102.avif', name: "I'm a product", price: "35.00" },
        { id: 11, image: '/product_img/p111.avif', image2: '/product_img/p112.avif', name: "I'm a product", price: "35.00" },
        { id: 12, image: '/product_img/p113.avif', image2: '/product_img/p1132.avif', name: "I'm a product", price: " 35.00" },
    ];

    const [showPopup, setShowPopup] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleAddToCart = (product) => {
        setSelectedProduct(product);
        setShowPopup(true);
    };

    return (
        <div id="shop" className="w-full min-h-screen px-4 py-4 sm:px-10 sm:py-5 ">
            <div className="grid grid-cols-2 sm:grid-cols-2 px-12 md:grid-cols-3 md:gap-2 ">
                {data.map((elem, index) => (
                    <div key={index} className="w-full   mx-auto   md:mb-10 group rounded-md">


                        <div className="md:w-full md:h-100  h-40 relative rounded-lg overflow-hidden cursor-pointer sm:cursor-pointer image-container"
                            onClick={() => handleAddToCart(elem)}
                        >
                            onClick={() => handleAddToCart(elem)}
                            <img
                                src={elem.image}
                                alt="Front"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0"

                            />
                            <img
                                src={elem.image2}
                                alt="Back"
                                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                            />
                        </div>

                        <div className="w-full md:h-20 h-10 px-3 py-4 text-center">
                            <div className="cursor-pointer">
                                <h2 className="font-semibold text-lg sm:text-xl">{elem.name}</h2>
                                <p className="font-semibold mt-3">${elem.price}</p>
                            </div>
                        </div>

                        <div className="h-20 relative  ">
                            <button
                                onClick={() => handleAddToCart(elem)}
                                className="hidden md:block   mt-15 w-4/5 cursor-pointer absolute bottom-3 left-1/2 transform -translate-x-1/2 opacity-0
                                           group-hover:opacity-100 transition duration-300 bg-white text-black border border-black px-4 py-2 rounded 
                                           hover:bg-black hover:text-white z-10"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showPopup && selectedProduct && (
                <Popup
                    product={selectedProduct}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
}

export default Card;
