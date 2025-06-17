import { Link } from "react-router-dom"
import Button from "../shared/Button"

function PrimaryProductCard() {
  return (
    <article className="rounded-lg bg-sm-primary-product bg-cover bg-right py-25 md:bg-md-primary-product lg:bg-lg-primary-product">
      <div className="mx-6 md:mx-16 lg:mx-24">
        <div className="space-y-8">
          <h2>ZX7 Speaker</h2>
          <div>
            <Link to="/product/zx7-speaker">
              <Button text="See Product" type="button" variant="transparent" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default PrimaryProductCard