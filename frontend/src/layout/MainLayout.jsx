// src/layout/MainLayout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

function MainLayout() {
  return (
    <CartProvider>
      <div className="pt-[8vw] w-full h-full">
        <Header />
        <Outlet /> {/* yahan page-wise content inject hota hai */}
        <Footer />
      </div>
    </CartProvider>
  );
}

export default MainLayout;
