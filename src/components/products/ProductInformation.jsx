import { useState } from 'react'
import { useCartContext } from '../../context/CartContext.jsx'
import Button from '../shared/Button.jsx'
import PropTypes from 'prop-types'
import formatPrice from '../utils/formatPrice.js'
import useWindowWidth from '../../hooks/useWindowWidth.js'

function ProductInformation({ product }) {
  const [counter, setCounter] = useState(1);
  const { addToCart } = useCartContext();
  const windowWidth = useWindowWidth();

  function increment() {
    if (counter === 99) return;
    setCounter(prev => prev + 1);
  }

  function decrement() {
    if (counter === 1) return;
    setCounter(prev => prev - 1);
  }

  function handleAddToCart() {
    try {
      addToCart(product, counter);
    } catch (error) {
      console.error(error);
    }
    setCounter(1);
  }

  let imageUrl = product.image.mobile;
  let gallerySize = "mobile";
  if (windowWidth >= 768 && windowWidth < 1440) {
    imageUrl = product.image.tablet;
    gallerySize = "tablet";
  } else if (windowWidth >= 1440) {
    imageUrl = product.image.desktop;
    gallerySize = "desktop";
  }

  return (
    <div className="space-y-22 md:space-y-30 lg:space-y-40">
      <div className="md:flex md:justify-between md:items-center md:gap-17.5 lg:gap-31 lg:justify-normal">
        <img src={imageUrl} alt={product.name} className={`rounded-lg md:max-w-70 md:mb-0 lg:max-w-135 ${product.new ? "mb-8" : "mb-10"}`} />
        <div className="lg:max-w-111">
          {product.new && <p className="text-sm uppercase tracking-10px leading-19 text-primary mb-6 md:text-xs lg:mb-4">New Product</p>}
          <h1 className="mb-6 md:text-7 lg:mb-8 lg:text-10">{product.name}</h1>
          <p className="mb-6 opacity-50 lg:mb-8">{product.description}</p>
          <h6 className="mb-7.5 lg:mb-12">{formatPrice(product.price)}</h6>
          <div className="flex gap-4 items-center justify-center md:justify-start">
            <div className="flex gap-4 justify-center items-center min-h-12 min-w-30 bg-off-grey">
              <button onClick={decrement} className="px-4 py-2 h-full opacity-25 font-bold hover:text-primary hover:opacity-100">-</button>
              <p className="font-bold tabular-nums w-8 text-center">{counter}</p>
              <button onClick={increment} className="px-4 py-2 h-full opacity-25 font-bold hover:text-primary hover:opacity-100">+</button>
            </div>
            <Button text="Add to Cart" type="button" onClick={handleAddToCart} />
          </div>
        </div>
      </div>
      <div className="space-y-22 md:space-y-30 lg:flex lg:gap-31 lg:space-y-0">
        <div className="lg:max-w-158">
          <h3 className="mb-6 md:text-8">Features</h3>
          <p className="opacity-50">
          {product.features.split("\n\n").map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <><br /><br /></>}
            </span>
          ))}
          </p>
        </div>
        <div className="md:flex lg:flex-col">
          <h3 className="mb-6 md:text-8 md:w-1/2 lg:w-auto">In the box</h3>
          <ul className="space-y-2">
            {product.includes.map((item, index) => (
              <li key={index} className="flex gap-6">
                <p className="text-primary font-bold">{item.quantity}x</p>
                <p className="opacity-50">{item.item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-[2fr_3fr] md:grid-rows-2">
        <img src={product.gallery.first[gallerySize]} alt="Gallery image 1" className="rounded-lg h-full w-full object-cover" />
        <img src={product.gallery.second[gallerySize]} alt="Gallery image 2" className="rounded-lg h-full w-full object-cover md:col-start-1 md:row-start-2" />
        <img src={product.gallery.third[gallerySize]} alt="Gallery image 3" className="rounded-lg h-full w-full object-cover md:row-span-2 md:col-start-2 md:row-start-1" />
      </div>
    </div>
  )
}

ProductInformation.propTypes = {
  product: PropTypes.object.isRequired
}

export default ProductInformation