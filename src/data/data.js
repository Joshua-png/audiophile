
// utils/data.js
import { useProducts } from "../context/ProductsContext";

// This acts as a bridge to your Contentful data
export const getProducts = () => {
  const { products } = useProducts();
  return products;
};