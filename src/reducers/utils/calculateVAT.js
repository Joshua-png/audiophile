export const calculateVAT = (price) => {
  if (typeof price !== "number") {
    throw new Error("Invalid price");
  }
  return Math.round(price * 0.2);
};
