import { createContext, useContext, useEffect, useReducer } from "react"
import { cartReducer, createInitialCartState} from "../reducers/cartReducer"
import * as actions from "../actions/index"

const CartContext = createContext(null)

export const CartContextProvider = ({ children }) => {
  const getInitialCartState = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : createInitialCartState();
  };

  const [cart, dispatch] = useReducer(cartReducer, undefined, getInitialCartState);

  // Persist cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product, quantity = 1) {
    const action = actions.addProductToCart(product, quantity);
    dispatch(action);
  }

  function removeFromCart(product, quantity = 1) {
    const action = actions.removeProductFromCart(product, quantity);
    dispatch(action);
  }

  function clearCart() {
    const action = actions.clearCart();
    dispatch(action);
  }

  return (
    <CartContext.Provider 
      value={{ 
        cart, 
        addToCart, 
        removeFromCart, 
        clearCart 
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCartContext = () => {
  const contextValue = useContext(CartContext);
  if (!contextValue) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return contextValue;
}