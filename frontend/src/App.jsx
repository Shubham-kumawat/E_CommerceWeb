

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
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import About from "./components/About";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="pt-[8vw] w-full h-full">
        <Header />
        <Card />
        <About />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;