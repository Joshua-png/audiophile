import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from "./context/CartContext.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
