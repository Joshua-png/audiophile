import ContentWrapper from "../shared/ContentWrapper";
import NavLinks from "../navigation/NavLinks";
import MarketingCard from "../shared/MarketingCard";
import ProductInformation from "../products/ProductInformation";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
// import products from '../../data/data.json'
import RecommendedProducts from "../products/RecommendedProducts.jsx";
import { useProducts } from "../../context/ProductsContext.jsx";


function ProductDetailsPage() {
  const navigate = useNavigate();
  const { slug } = useParams();
  const { products } = useProducts();
  const product = products.find((product) => product.slug === slug);

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <ContentWrapper>
      <div className="mt-4 mb-6 md:mt-8 lg:mt-20 lg:mb-14">
        <button onClick={handleGoBack} className="opacity-50 text-15px hover:opacity-100 hover:text-primary hover:font-medium">Go Back</button>
      </div>
      <div className="mb-30 lg:mb-40">
        <ProductInformation product={product} />
      </div>
      <div className="mb-30 md:mb-10 lg:mb-30">
        <RecommendedProducts products={product.others} />
      </div>
      <div className="mb-30 lg:mb-40">
        <NavLinks />
      </div>
      <div className="mb-30 lg:mb-40">
        <MarketingCard />
      </div>
    </ContentWrapper>
  )
}

export default ProductDetailsPage