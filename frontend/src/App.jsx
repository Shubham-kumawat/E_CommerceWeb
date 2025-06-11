

// import Header from './components/Header'
// import Card from './components/Card'
// import Footer from './components/Footer'
// import About from './components/About'
// function App() {

//   return (
//   <div className="pt-[8vw] w-full h-full">

//      <Header/>
//      <Card/>
//      <About/>
//      <Footer/>
//   </div>
//  )
// }

// export default App
// import Header from "./components/Header";
// import Card from "./components/Card";
// import Footer from "./components/Footer";
// import About from "./components/About";
// import { CartProvider } from "./context/CartContext";
// import ContactForm from "./components/ContactForm";

// function App() {
//   return (
//     <CartProvider>
//       <div className="pt-[8vw] w-full h-full">
//         <Header />
//         <Card />
//         <About />
//         <Footer />

//       </div>
//     </CartProvider>
//   );
// }

// export default App;

// src/App.jsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import GiftCard from "./pages/GiftCard";
import SearchBar from "./pages/SearchBar";

 function App() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-[8vw]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gift-card" element={<GiftCard />} />
            <Route path="/search" element={<SearchBar/>}/> {/* Add this if you have a GiftCard component */}
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )}
 
export default App;