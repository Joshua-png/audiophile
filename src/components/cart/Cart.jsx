import { useCartContext } from "../../context/CartContext"
import { useNavigate } from "react-router"
import { useState } from "react"
import PropTypes from "prop-types"
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"
import formatPrice from "../utils/formatPrice"

function Cart({ closeCartOverlay }) {
  const { cart, clearCart, addToCart, removeFromCart } = useCartContext();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleCheckoutNavigation = () => {
    setError(null);
    if (cart.products.length === 0) {
      setError("Please add products to your cart before proceeding to checkout");
      return;
    }
    closeCartOverlay();
    navigate("/checkout");
  }

  const handleRemoveProduct = (product) => {
    removeFromCart(product);
  }

  const handleAddProduct = (product) => {
    addToCart(product);
  }

  return (
    <div onClick={closeCartOverlay}>
      <ContentWrapper>
        <div
          className="bg-white rounded-lg mt-6 py-8 px-7 flex flex-col max-h-[75vh] overflow-y-auto md:max-w-95 md:ml-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-9">
            <h6>Cart ({cart.products.length})</h6>
            <button className="underline opacity-50 text-15px hover:opacity-100 hover:text-primary hover:font-medium" onClick={clearCart}>Remove all</button>
          </div>
          {error && <p className="text-red-500 text-sm mb-6">{error}</p>}
          <div className="space-y-6 mb-8">
            {cart.products.map((product) => (
              <div key={product.id} className="flex justify-between items-center">
                <div className="flex gap-4 w-full items-center justify-between">
                  <div className="flex justify-center items-center gap-4">
                    <img src={product.image.mobile} alt={product.name} className="w-16 h-16 rounded-lg" />
                    <div>
                      <p className="font-bold text-15px">{product.shortName}</p>
                      <p className="opacity-50">{formatPrice(product.price)}</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center justify-center">
                    <div className="flex gap-1 justify-center items-center bg-off-grey">
                      <button onClick={() => handleRemoveProduct(product)} className="px-4 py-2 h-full opacity-25 font-bold hover:opacity-100 hover:text-primary">-</button>
                      <p className="font-bold text-13px tabular-nums">{product.quantity}</p>
                      <button onClick={() => handleAddProduct(product)} className="px-4 py-2 h-full opacity-25 font-bold hover:opacity-100 hover:text-primary">+</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mb-6 uppercase">
            <p className="opacity-50">total</p>
            <h6>{formatPrice(cart.subtotal)}</h6>
          </div>
          <Button text="Checkout" type="button" onClick={handleCheckoutNavigation} />
        </div>
      </ContentWrapper>
    </div>
  )
}

Cart.propTypes = {
  closeCartOverlay: PropTypes.func,
}

export default Cart