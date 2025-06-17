import { Link } from "react-router-dom"
import useWindowWidth from "../../hooks/useWindowWidth"
import Button from "../shared/Button"

function SecondaryProductCard() {
  const windowWidth = useWindowWidth();
  let imageUrl = "/home/mobile/image-earphones-yx1.jpg";
  if (windowWidth >= 768 && windowWidth < 1440) {
    imageUrl = "/home/tablet/image-earphones-yx1.jpg";
  } else if (windowWidth >= 1440) {
    imageUrl = "/home/desktop/image-earphones-yx1.jpg";
  }

  return (
    <article className="grid grid-cols-1 md:grid-cols-2 gap-3">
      <img src={imageUrl} alt="YX1 Earphones" className="rounded-lg w-full"/>
      <div className="min-h-50 bg-off-grey rounded-lg md:min-h-0">
        <div className="mx-6 md:mx-10 lg:mx-24">
          <div className="space-y-8 py-10 md:py-25">
            <h2>YX1 Earphones</h2>
            <div>
              <Link to="/product/yx1-earphones">
                <Button text="See Product" type="button" variant="transparent" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SecondaryProductCard