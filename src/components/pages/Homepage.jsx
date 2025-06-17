import HomepageHero from "../homepage/HomepageHero"
import ContentWrapper from "../shared/ContentWrapper"
import MarketingCard from "../shared/MarketingCard"
import NavLinks from "../navigation/NavLinks"
import FeaturedProductCard from "../homepage/FeaturedProductCard"
import PrimaryProductCard from "../homepage/PrimaryProductCard"
import SecondaryProductCard from "../homepage/SecondaryProductCard"

function Homepage() {
  return (
    <>
      <HomepageHero />
      <div className="md:mt-10 lg:mt-30">
        <ContentWrapper>
          <div className="mb-22.5 lg:mb-42">
            <NavLinks />
          </div>
          <div className="space-y-30 mb-30 md:space-y-24 lg:mb-50 lg:space-y-50">
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              <FeaturedProductCard />
              <PrimaryProductCard />
              <SecondaryProductCard />
            </div>
            <MarketingCard />
          </div>
        </ContentWrapper>
      </div>
    </>
  )
}

export default Homepage