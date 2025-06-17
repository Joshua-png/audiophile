export const addProductsToCart = (products, action) => {
  if (typeof action.quantity !== "number") {
    throw new Error("Invalid quantity type. Quantity must be a number.");
  }
  if (action.quantity < 1) {
    throw new Error("Quantity must be greater than 0.");
  }
  if (!Array.isArray(products)) {
    throw new Error("Invalid products type. Products must be an array.");
  }
  if (action.product === null || action.product === undefined) {
    throw new Error("Invalid product type. Product must be an action object.");
  }
  if (action.product.id === undefined) {
    throw new Error("Invalid product. Product must have an id.");
  }

  let productUpdated = false;
  const updatedProducts = products.map(product => {
    if (product.id === action.product.id) {
      productUpdated = true;
      return { ...product, quantity: product.quantity + action.quantity };
    }
    return product;
  });

  if (!productUpdated) {
    updatedProducts.push({ ...action.product, quantity: action.quantity });
  }
  return updatedProducts;
}