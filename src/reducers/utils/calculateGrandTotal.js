export const calculateGrandTotal = (cartSubTotal, shippingCosts) => {
  if (typeof cartSubTotal !== "number") {
    throw new Error("Invalid cart subtotal");
  }
  if (typeof shippingCosts !== "number") {
    throw new Error("Invalid shipping costs");
  }
  return cartSubTotal + shippingCosts;
};