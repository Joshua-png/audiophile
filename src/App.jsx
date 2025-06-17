import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/pages/HomePage";
import Footer from "./components/shared/Footer"
import Navbar from "./components/navigation/Navbar"
import ProductDetailsPage from "./components/pages/ProductDetailsPage"
import CategoryPage from "./components/pages/CategoryPage"
import CheckoutPage from "./components/pages/CheckoutPage"

const App = () => {
  const location = useLocation();
  const NavbarSpacer = () => (
    location.pathname !== "/" && <div className="min-h-22.5 bg-black"></div>
  );
  return (
    <div className="flex flex-col min-h-screen">
      
      <header>
        <Navbar />
        <NavbarSpacer />
      </header>
      <main className="grow overflow-auto">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="*" element={<h1 className="py-40 text-center">Page Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
