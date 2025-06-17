import * as constants from './actionTypes';

export const addProductToCart = (product, quantity) => {
  return {
    type: constants.ADD_TO_CART,
    product: product,
    quantity: quantity,
  }
};

export const removeProductFromCart = (product, quantity) => {
  return {
    type: constants.REMOVE_FROM_CART,
    product: product,
    quantity: quantity,
  }
};

export const clearCart = () => {
  return {
    type: constants.CLEAR_CART
  }
};