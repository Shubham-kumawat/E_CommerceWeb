// import React from 'react'
// import gsap from 'gsap'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import { useEffect, useState } from "react";
// import { useCart } from "../context/CartContext"; // ★ new import
// import CartDrawer from "./CartDrawer";


// gsap.registerPlugin(ScrollToPlugin)

// function Header() {
//     const { itemCount } = useCart(); // ★ get global count
//     const [activeSection, setActiveSection] = useState("shop");
//     const [isCartOpen, setIsCartOpen] = useState(false);

//     useEffect(() => {
//         const sections = ["shop", "about"];
//         const observers = [];

//         sections.forEach((id) => {
//             const section = document.getElementById(id);
//             if (!section) return;

//             const observer = new IntersectionObserver(
//                 ([entry]) => {
//                     if (entry.isIntersecting) {
//                         setActiveSection(id);
//                     }
//                 },
//                 { threshold: 0.6 }
//             );

//             observer.observe(section);
//             observers.push(observer);
//         });

//         return () => {
//             observers.forEach((observer) => observer.disconnect());
//         };
//     }, []);

//     const handleScroll = (id) => {
//         const elem = document.getElementById(id);
//         if (elem) {
//             gsap.to(window, {
//                 duration: 1.2,
//                 scrollTo: { y: elem.offsetTop - 70 },
//                 ease: 'power2.out',
//                 onComplete: () => {
//                     setActiveSection(id); // ✅ Manual set active section after scroll ends
//                 },
//             });
//         }
//     };



//     return (
//         <div className='navbar fixed top-0 left-0 z-50 bg-white flex text-align w-full h-[8vw]'>
//             <div className='left-side w-[15%] h-full p-4 ml-15'>
//                 <p className='text-5xl font-semibold mb-2'>Tote</p>
//                 <button className='text-lg font-semibold'>Funky Printed Bags</button>
//             </div>

//             <div className='center-side flex justify-center items-center w-[50%] text-center font-semibold gap-4 py-4'>

//                 <a href="#shop" onClick={(e) => {
//                     e.preventDefault();
//                     handleScroll('shop');
//                 }}
//                     className={`transition-colors duration-200 ${activeSection === "shop" ? "text-gray-400" : "text-black hover:text-gray-400"
//                         }`}  >Shop</a>

//                 <a href="#about" onClick={(e) => { e.preventDefault(); handleScroll('about'); }}

//                     className={`transition-colors duration-200 ${activeSection === "about" ? "text-gray-400" : "text-black hover:text-gray-400"
//                         }`}
//                 >
//                     About
//                 </a>

//                 <a href="/faq" className="text-black hover:text-gray-400 transition-colors duration-200">FAQ</a>

//                 <a href="/gift-card" className="text-black hover:text-gray-400 transition-colors duration-200">Gift Card</a>

//                 <a href="/contact" className="text-black hover:text-gray-400 transition-colors duration-200">Contact</a>
//             </div>

//             <div className='right-side flex justify-center items-center gap-5 w-[30%] '>
//                 <div className='search-btn flex items-center  justify-center  '>
//                     <button
//                         type="button"
//                         className="w-40 h-20  cursor-pointer relative flex items-center  group rounded-md ">
//                         <div className='flex gap-2 '>
//                             <div className="w-6 h-6 ">
//                                 <img
//                                     src="/icons/search-line.svg"
//                                     alt="search"
//                                     className="w-full h-full  transition-all duration-200"
//                                 />
//                             </div>
//                             <div className=" font-semibold group-hover:text-blue-400 transition-colors duration-200">
//                                 Search
//                             </div>
//                         </div>
//                         <div className="absolute bottom-5 left-0 w-[90%] h-[1px] bg-black group-hover:opacity-0 transition-opacity duration-200" />
//                     </button>
//                 </div>
//                 <div>
//                     <a href="/login">
//                         <div className='flex gap-5'>
//                             <div>
//                                 <svg data-bbox="0 0 50 50" data-type="shape" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 50 50">
//                                     <g>
//                                         <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
//                                     </g>
//                                 </svg>
//                             </div>
//                             <p className='font-semibold'>Log In</p>
//                         </div>
//                     </a>

//                 </div>



//                 <div className="relative w-7 h-5"
//                     onClick={() => setIsCartOpen(true)}
//                     aria-label="Open cart">




//                     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="5.7 0 105.5 126.1" preserveAspectRatio="xMinYMax meet" data-hook="svg-icon-1">
//                         <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path>
//                         <path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
//                     </svg>
//                     <span className="absolute top-2 right-4 bg-black text-white text-[0.8em] h-2 rounded-full flex items-center justify-center">
//                         {itemCount}
//                     </span>
//                 </div>


//             </div>
//             <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//         </div>
//     )
// }

// export default Header




// import React, { useEffect, useState } from "react";
// import gsap from "gsap";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import { useCart } from "../context/CartContext";
// import CartDrawer from "./CartDrawer";
// import { Link } from 'react-router-dom';  // ★ Add this import


// gsap.registerPlugin(ScrollToPlugin);

// function Header() {
//   const { itemCount } = useCart();
//   const [activeSection, setActiveSection] = useState("shop");
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const sections = ["shop", "about"];
//     const observers = [];

//     sections.forEach((id) => {
//       const section = document.getElementById(id);
//       if (!section) return;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveSection(id);
//           }
//         },
//         { threshold: 0.6 }
//       );

//       observer.observe(section);
//       observers.push(observer);
//     });

//     return () => {
//       observers.forEach((observer) => observer.disconnect());
//     };
//   }, []);

//   const handleScroll = (id) => {
//     const elem = document.getElementById(id);
//     if (elem) {
//       gsap.to(window, {
//         duration: 1.2,
//         scrollTo: { y: elem.offsetTop - 70 },
//         ease: "power2.out",
//         onComplete: () => {
//           setActiveSection(id);
//         },
//       });
//       setIsMenuOpen(false); // Close menu on link click (mobile)
//     }
//   };

//   return (
//     <>
//       <div className="navbar fixed top-0 left-0 z-50 bg-white flex items-center w-full h-[8vw] px-4 md:px-10">
//         {/* Left side - logo */}
//         <div className="flex flex-col items-center  w-[15%] min-w-[120px]">
//           <p className="text-3xl md:text-5xl font-semibold mb-0">Tote</p>
//           <button className="hidden text-sm md:block md:text ml-3 text-lg hover:text-gray-400 font-semibold">
//             Funky Printed Bags
//           </button>
//         </div>

//         {/* Center - desktop menu */}
//         <div className="hidden md:flex justify-center items-center w-[50%] text-center font-semibold gap-8">
//            <Link
//         to="/#shop"
//         onClick={(e) => {
//           e.preventDefault();
//           handleScroll("shop");
//         }}
//             className={`transition-colors duration-200 cursor-pointer ${
//               activeSection === "shop"
//                 ? "text-gray-400"
//                 : "text-black hover:text-gray-400"
//             }`}
//           >
//             Shop
//               </Link>
//  <Link
//         to="/#about"
//         onClick={(e) => {
//           e.preventDefault();
//           handleScroll("about");
//         }}
//         className={`transition-colors duration-200 cursor-pointer ${
//           activeSection === "about"
//             ? "text-gray-400"
//             : "text-black hover:text-gray-400"
//         }`}
//       >
//         About
//       </Link>

//          <Link 
//   to="/faq" 
//   className="text-black hover:text-gray-400 transition-colors duration-200"
// >
//   FAQ
// </Link>

// <Link 
//   to="/gift-card" 
//   className="text-black hover:text-gray-400 transition-colors duration-200"
// >
//   Gift Card
// </Link>

// <Link 
//   to="/contact" 
//   className="text-black hover:text-gray-400 transition-colors duration-200"
// >
//   Contact
// </Link>
//         </div>

//         {/* Right side - Search, Login, Cart and Mobile menu button */}
//         <div className="flex items-center justify-end w-[35%] min-w-[150px] gap-5">
//           {/* Search button */}
//           <div className="hidden md:flex items-center cursor-pointer">
//             <button type="button" className="flex items-center gap-2 rounded-md">
//               <img
//                 src="/icons/search-line.svg"
//                 alt="search"
//                 className="w-6 h-6 transition-all duration-200"
//               />
//               <span className="font-semibold group-hover:text-blue-400">
//                 Search
//               </span>
//             </button>
//           </div>

//           {/* Login */}
//           <a href="/login" className="hidden md:flex items-center gap-2 font-semibold hover:text-gray-400">
//             <svg
//               data-bbox="0 0 50 50"
//               xmlns="http://www.w3.org/2000/svg"
//               width="25"
//               height="25"
//               viewBox="0 0 50 50"
//               fill="currentColor"
//             >
//               <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
//             </svg>
//             Log In
//           </a>

//           {/* Cart icon */}
//           <div
//             className="relative top-4 left-10 md:top-0 md:left-0 w-7 h-7 cursor-pointer"
//             onClick={() => setIsCartOpen(true)}
//             aria-label="Open cart"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               version="1.1"
//               width="100%"
//               height="100%"
//               viewBox="5.7 0 105.5 126.1"
//               preserveAspectRatio="xMinYMax meet"
//               data-hook="svg-icon-1"
//             >
//               <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path>
//               <path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
//             </svg>
//             <span className="absolute top-2 right-2.5 bg-black text-white text-[0.7em] rounded-full px-1">
//               {itemCount}
//             </span>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             className="md:hidden relative top-4 left-7 ml-2 p-2 rounded-md hover:bg-gray-200"
//             aria-label="Open menu"
//             onClick={() => setIsMenuOpen(true)}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 text-black"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile menu drawer */}
//       <div
//         className={`fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
//           isMenuOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         {/* Close button */}
//         <button
//           onClick={() => setIsMenuOpen(false)}
//           aria-label="Close menu"
//           className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-gray-600"
//         >
//           &times;
//         </button>

//         <nav className="flex flex-col mt-20 p-6 gap-6 font-semibold text-lg">
//           <a
//             href="#shop"
//             onClick={(e) => {
//               e.preventDefault();
//               handleScroll("shop");
//             }}
//             className={`cursor-pointer ${
//               activeSection === "shop"
//                 ? "text-gray-400"
//                 : "text-black hover:text-gray-400"
//             }`}
//           >
//             Shop
//           </a>

//           <a
//             href="#about"
//             onClick={(e) => {
//               e.preventDefault();
//               handleScroll("about");
//             }}
//             className={`cursor-pointer ${
//               activeSection === "about"
//                 ? "text-gray-400"
//                 : "text-black hover:text-gray-400"
//             }`}
//           >
//             About
//           </a>

//           <a
//             href="/faq"
//             onClick={() => setIsMenuOpen(false)}
//             className="text-black hover:text-gray-400"
//           >
//             FAQ
//           </a>

//           <a
//             href="/gift-card"
//             onClick={() => setIsMenuOpen(false)}
//             className="text-black hover:text-gray-400"
//           >
//             Gift Card
//           </a>

//           <a
//             href="/contact"
//             onClick={() => setIsMenuOpen(false)}
//             className="text-black hover:text-gray-400"
//           >
//             Contact
//           </a>
//         </nav>
//       </div>

//       <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
//     </>
//   );
// }

// export default Header;
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useCart } from "../context/CartContext";
import CartDrawer from "./CartDrawer";
import { Link, useLocation ,NavLink } from 'react-router-dom';

gsap.registerPlugin(ScrollToPlugin);

function Header() {
  const { itemCount } = useCart();
  const [activeSection, setActiveSection] = useState("shop");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Only set up intersection observers if we're on the home page
    if (location.pathname === '/') {
      const sections = ["shop", "about"];
      const observers = [];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          },
          { threshold: 0.6 }
        );

        observer.observe(section);
        observers.push(observer);
      });

      return () => {
        observers.forEach((observer) => observer.disconnect());
      };
    }
  }, [location.pathname]);

  const handleScroll = (id) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const elem = document.getElementById(id);
      if (elem) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: elem.offsetTop - 70 },
          ease: "power2.out",
          onComplete: () => {
            setActiveSection(id);
          },
        });
      }
    }
    setIsMenuOpen(false); // Close menu on link click (mobile)
  };

  // Reset active section when navigating away from home page
  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection(null);
    }
  }, [location.pathname]);

  return (
    <>
      <div className="navbar fixed top-0 left-0 z-50 bg-white flex items-center w-full h-[8vw] px-4 md:px-10">
        {/* Left side - logo */}
        <div className="flex flex-col items-center  w-[15%] min-w-[120px]">
          <p className="text-3xl md:text-5xl font-semibold mb-0">Tote</p>
          <button className="hidden text-sm md:block md:text ml-3 text-lg hover:text-gray-400 font-semibold">
            Funky Printed Bags
          </button>
        </div>

        {/* Center - desktop menu */}
        <div className="hidden md:flex justify-center items-center w-[50%] text-center font-semibold gap-8">
      <Link
  to="/"
  onClick={(e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      handleScroll("shop");
    }
  }}
  className={`transition-colors duration-200 cursor-pointer ${
    activeSection === "shop"
      ? "text-gray-400"
      : "text-black hover:text-gray-400"
  }`}
>
  Shop
</Link>
<Link
  to="/"
  onClick={(e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      handleScroll("about");
    }
  }}
  className={`transition-colors duration-200 cursor-pointer ${
    activeSection === "about"
      ? "text-gray-400"
      : "text-black hover:text-gray-400"
  }`}
>
  About
</Link>

<NavLink
  to="/faq"
  className={({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-gray-400" : "text-black hover:text-gray-400"
    }`
  }
>
  FAQ
</NavLink>

<NavLink
  to="/gift-card"
  className={({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-gray-400" : "text-black hover:text-gray-400"
    }`
  }
>
  Gift Card
</NavLink>

<NavLink
  to="/contact"
  className={({ isActive }) =>
    `transition-colors duration-200 ${
      isActive ? "text-gray-400" : "text-black hover:text-gray-400"
    }`
  }
>
  Contact
</NavLink>

        </div>

        {/* Right side - Search, Login, Cart and Mobile menu button */}
        <div className="flex items-center justify-end w-[35%] min-w-[150px] gap-5">
          {/* Search button */}
          <div className="hidden md:flex items-center cursor-pointer">
            {/* <button type="button" className="flex items-center gap-2 rounded-md">
              <img
                src="/icons/search-line.svg"
                alt="search"
                className="w-6 h-6 transition-all duration-200"
              />
              <span className="font-semibold group-hover:text-blue-400">
                Search
              </span>
            </button> */}

            <Link
  to="/search"
  className="flex items-center gap-2 rounded-md group"
>
  <img
    src="/icons/search-line.svg"
    alt="search"
    className="w-6 h-6 transition-all duration-200"
  />
  <span className="font-semibold group-hover:text-blue-400">
    Search
  </span>
</Link>
          </div>

          {/* Login */}
          <a href="/login" className="hidden md:flex items-center gap-2 font-semibold hover:text-gray-400">
            <svg
              data-bbox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              fill="currentColor"
            >
              <path d="M25 48.077c-5.924 0-11.31-2.252-15.396-5.921 2.254-5.362 7.492-8.267 15.373-8.267 7.889 0 13.139 3.044 15.408 8.418-4.084 3.659-9.471 5.77-15.385 5.77m.278-35.3c4.927 0 8.611 3.812 8.611 8.878 0 5.21-3.875 9.456-8.611 9.456s-8.611-4.246-8.611-9.456c0-5.066 3.684-8.878 8.611-8.878M25 0C11.193 0 0 11.193 0 25c0 .915.056 1.816.152 2.705.032.295.091.581.133.873.085.589.173 1.176.298 1.751.073.338.169.665.256.997.135.515.273 1.027.439 1.529.114.342.243.675.37 1.01.18.476.369.945.577 1.406.149.331.308.657.472.98.225.446.463.883.714 1.313.182.312.365.619.56.922.272.423.56.832.856 1.237.207.284.41.568.629.841.325.408.671.796 1.02 1.182.22.244.432.494.662.728.405.415.833.801 1.265 1.186.173.154.329.325.507.475l.004-.011A24.886 24.886 0 0 0 25 50a24.881 24.881 0 0 0 16.069-5.861.126.126 0 0 1 .003.01c.172-.144.324-.309.49-.458.442-.392.88-.787 1.293-1.209.228-.232.437-.479.655-.72.352-.389.701-.78 1.028-1.191.218-.272.421-.556.627-.838.297-.405.587-.816.859-1.24a26.104 26.104 0 0 0 1.748-3.216c.208-.461.398-.93.579-1.406.127-.336.256-.669.369-1.012.167-.502.305-1.014.44-1.53.087-.332.183-.659.256-.996.126-.576.214-1.164.299-1.754.042-.292.101-.577.133-.872.095-.89.152-1.791.152-2.707C50 11.193 38.807 0 25 0"></path>
            </svg>
            Log In
          </a>

          {/* Cart icon */}
          <div
            className="relative top-4 left-10 md:top-0 md:left-0 w-7 h-7 cursor-pointer"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="100%"
              height="100%"
              viewBox="5.7 0 105.5 126.1"
              preserveAspectRatio="xMinYMax meet"
              data-hook="svg-icon-1"
            >
              <path d="M99.8 28.4c0-1.2-0.9-2-2.1-2h-15c0 3.2 0 7.6 0 8.2 0 1.5-1.2 2.6-2.6 2.9 -1.5 0.3-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.9 0-4.7 0-8.2H40.1c0 3.2 0 7.3 0 8.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-0.6 0-5 0-8.2h-15c-1.2 0-2 0.9-2 2L8.3 124c0 1.2 0.9 2.1 2.1 2.1h96.3c1.2 0 2.1-0.9 2.1-2.1L99.8 28.4z"></path>
              <path d="M59.1 5.9c-2.9 0-2 0-2.9 0 -2 0-4.4 0.6-6.4 1.5 -3.2 1.5-5.9 4.1-7.6 7.3 -0.9 1.8-1.5 3.5-1.8 5.6 0 0.9-0.3 1.5-0.3 2.3 0 1.2 0 2.1 0 3.2 0 1.5-1.2 2.9-2.6 2.9 -1.5 0-2.9-0.9-3.2-2.3 0-0.3 0-0.3 0-0.6 0-1.2 0-2.3 0-3.5 0-3.2 0.9-6.4 2-9.4 1.2-2.3 2.6-4.7 4.7-6.4 3.2-2.9 6.7-5 11.1-5.9C53.5 0.3 55 0 56.7 0c1.5 0 2.9 0 4.4 0 2.9 0 5.6 0.6 7.9 1.8 2.6 1.2 5 2.6 6.7 4.4 3.2 3.2 5.3 6.7 6.4 11.1 0.3 1.5 0.6 3.2 0.6 4.7 0 1.2 0 2.3 0 3.2 0 1.5-1.2 2.6-2.6 2.9s-2.9-0.9-3.2-2.3c0-0.3 0-0.3 0-0.6 0-1.2 0-2.6 0-3.8 0-2.3-0.6-4.4-1.8-6.4 -1.5-3.2-4.1-5.9-7.3-7.3 -1.8-0.9-3.5-1.8-5.9-1.8C61.1 5.9 59.1 5.9 59.1 5.9L59.1 5.9z"></path>
            </svg>
            <span className="absolute top-2 right-2.5 bg-black text-white text-[0.7em] rounded-full px-1">
              {itemCount}
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative top-4 left-7 ml-2 p-2 rounded-md hover:bg-gray-200"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-gray-600"
        >
          &times;
        </button>

        <nav className="flex flex-col mt-20 p-6 gap-6 font-semibold text-lg">
                <Link
  to="/"
  onClick={(e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      handleScroll("shop");
    }
  }}
  className={`transition-colors duration-200 cursor-pointer ${
    activeSection === "shop"
      ? "text-gray-400"
      : "text-black hover:text-gray-400"
  }`}
>
  Shop
</Link>
<Link
  to="/"
  onClick={(e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      handleScroll("about");
    }
  }}
  className={`transition-colors duration-200 cursor-pointer ${
    activeSection === "about"
      ? "text-gray-400"
      : "text-black hover:text-gray-400"
  }`}
>
  About
</Link>

          <Link
            to="/faq"
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-gray-400"
          >
            FAQ
          </Link>

          <Link
            to="/gift-card"
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-gray-400"
          >
            Gift Card
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-black hover:text-gray-400"
          >
            Contact
          </Link>
        </nav>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default Header;