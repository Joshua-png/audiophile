import { Link } from "react-router-dom"
import useWindowWidth from "../../hooks/useWindowWidth"
import Button from "../shared/Button"
import ContentWrapper from "../shared/ContentWrapper"

function FeaturedProductCard() {
  const windowWidth = useWindowWidth();

  let imageUrl = "/home/mobile/image-speaker-zx9.png";
  if (windowWidth >= 768 && windowWidth < 1440) {
    imageUrl = "/home/tablet/image-speaker-zx9.png";
  } else if (windowWidth >= 1440) {
    imageUrl = "/home/desktop/image-speaker-zx9.png";
  }

  return (
    <article className="bg-[#d87d4a] text-white rounded-lg bg-no-repeat bg-sm-featured-product bg-sm-featured-product-pos bg-sm-featured-product-size md:bg-auto md:bg-md-featured-product-pos lg:bg-lg-featured-product-pos lg:bg-auto lg:overflow-hidden lg:relative">
      <div className="py-14 md:pt-13 md:pb-16 lg:py-0 lg:mt-33 lg:mb-31">
        <ContentWrapper>
          <div className="lg:flex lg:justify-center lg:gap-34">
            <img src={imageUrl} alt="ZX9 speaker" className="max-w-43 md:max-w-50 mx-auto md:mb-16 lg:mx-0 lg:max-w-95 lg:mb-0 lg:absolute lg:left-30 lg:-bottom-4" />
            <div className="text-center mt-8 lg:text-left lg:ml-auto lg:mr-24">
              <h1 className="mb-6 md:text-14 md:leading-14.5">ZX9<br />Speaker</h1>
              <p className="opacity-75 mb-6 md:mb-10 md:max-w-87 md:mx-auto">Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
              <div>
                <Link to="/product/zx9-speaker" className="flex justify-center lg:justify-start">
                  <Button text="See Product" type="button" variant="tertiary" />
                </Link>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </article>
  )
}

export default FeaturedProductCard