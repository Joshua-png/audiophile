export const calculateCartSubtotal = (cartProducts) => {
  if (!cartProducts.length) return 0;
  if (cartProducts.some((item) => item === undefined || item === null)) {
    throw new Error("Undefined or null product in cart");
  }
  const invalidProduct = cartProducts.find((item) => typeof item.price !== "number");
  if (invalidProduct !== undefined) {
    throw new Error(`Invalid price for product (id: ${invalidProduct.id})`);
  };
  
  return cartProducts.reduce((acc, item) => acc + item.price * item.quantity, 0);
};