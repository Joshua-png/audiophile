import { useParams } from "react-router"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"
import CategoryProductCard from "../categories/CategoryProductCard"
import { useProducts } from "../../context/ProductsContext.jsx";

function CategoryPage() {
  const { category } = useParams()
  const { products } = useProducts();
  const productsInCategory = products.filter(product => product.category === category).sort((a) => a.new ? -1 : 1);

  return (
      <>
        <h2 className="bg-black text-white min-h-25.5 flex justify-center items-center md:min-h-61.5 lg:min-h-60">{category}</h2>
        <ContentWrapper>
          <div className="space-y-30 mt-16 mb-30 md:mt-30 lg:mt-40 lg:space-y-40">
            {productsInCategory.map((product, index) => (
              <div key={product.slug}>
                <CategoryProductCard product={product} rowReverse={index % 2 !== 0} key={product.slug} />
              </div>
            ))}
            <NavLinks />
            <MarketingCard />
          </div>
        </ContentWrapper>
      </>
  )
}

export default CategoryPage