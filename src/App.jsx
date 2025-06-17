import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/pages/Homepage.jsx";
import Footer from "./components/shared/Footer.jsx"
import Navbar from "./components/navigation/Navbar.jsx"
import ProductDetailsPage from "./components/pages/ProductDetailsPage.jsx"
import CategoryPage from "./components/pages/CategoryPage.jsx"
import CheckoutPage from "./components/pages/CheckoutPage.jsx"

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
