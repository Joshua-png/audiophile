import PropTypes from "prop-types"
import Button from "../shared/Button"
import { Link } from "react-router-dom"
import useWindowWidth from "../../hooks/useWindowWidth"

function RecommendedProducts({ products }) {
  const windowWidth = useWindowWidth();

  let imageSize = "mobile";
  if (windowWidth >= 768 && windowWidth < 1440) {
    imageSize = "tablet";
  } else if (windowWidth >= 1440) {
    imageSize = "desktop";
  }

  return (
    <div className="text-center">
      <h3 className="mb-10 md:text-8 md:mb-13">You may also like</h3>
      <div className="md:flex md:gap-3">
        {products.map((product, i) => (
          <div key={i} className="mb-14 md:mb-0">
            <img src={product.image[imageSize]} alt={product.name} className="rounded-lg mb-8 md:mb-10" />
            <h5 className="mb-8">{product.name}</h5>
            <Link to={`/product/${product.slug}`} className="flex justify-center">
              <Button text="See Product" type="button" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

RecommendedProducts.propTypes = {
  products: PropTypes.array.isRequired
}

export default RecommendedProducts