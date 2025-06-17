
import { createContext, useContext } from "react";
import { useContentful } from "../hooks/useContentful";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const { products, loading, error } = useContentful();
  
  return (
    <ProductsContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
};

// Custom hook for easy access
export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) throw new Error("useProducts must be used within a ProductsProvider");
  return context;
};