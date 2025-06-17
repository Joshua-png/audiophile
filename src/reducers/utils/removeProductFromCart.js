export const removeProductFromCart = (products, action) => {
  if (typeof action.quantity !== "number") {
    throw new Error("Invalid quantity type. Quantity must be a number.");
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
  const productFromCart = products.find(product => product.id === action.product.id);
  if (productFromCart.quantity - action.quantity < 1) {
    return products.filter(product => product.id !== action.product.id);
  } else {
    return products.map(product => {
      if (product.id === action.product.id) {
        return { ...product, quantity: product.quantity - action.quantity };
      }
      return product;
    });
  }
};