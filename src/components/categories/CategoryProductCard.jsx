import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Button from "../shared/Button"
import useWindowWidth from "../../hooks/useWindowWidth"

function CategoryProductCard({ product, rowReverse = false }) {
  const windowWidth = useWindowWidth();

  let imageUrl = product.categoryImage.mobile;
  if (windowWidth >= 768 && windowWidth < 1440) {
    imageUrl = product.categoryImage.tablet;
  } else if (windowWidth >= 1440) {
    imageUrl = product.categoryImage.desktop;
  }

  return (
    <div className={`lg:flex lg:justify-between lg:gap-31 lg:items-center ${rowReverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
      <img src={imageUrl} alt={product.name} className="mb-8 mx-auto md:mb-13 lg:max-w-135"/>
      <div className="md:max-w-143 md:mx-auto ">
        {product.new && <p className="text-sm text-center uppercase tracking-10px leading-19 text-primary lg:text-left lg:mb-4">New Product</p>}
        <h2 className="mt-6 text-center md:mt-4 md:text-10 md:max-w-95 md:mx-auto lg:mx-0 lg:text-left">{product.name}</h2>
        <p className="mt-6 text-center opacity-50 md:mt-7 lg:mt-7.5 lg:text-left">{product.description}</p>
        <div className="mt-6 text-center md:mt-7 lg:mt-10">
          <Link to={`/product/${product.slug}`} className="flex justify-center lg:justify-start">
            <Button text="See Product" type="button" />
          </Link>
        </div>
      </div>
    </div>
  )
}

CategoryProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  rowReverse: PropTypes.bool,
}

export default CategoryProductCard