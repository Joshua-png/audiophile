import { Link } from "react-router-dom"
import PropTypes from "prop-types"

function MainNavLinkCard({ linkObj, handleLinkClick }) {
  const { imgSrc, alt, title, link } = linkObj;

  return (
    <Link to={link} onClick={handleLinkClick} className="group">
      <div className="min-h-20 min-w-56"></div>
      <div className="bg-off-grey rounded-lg relative">
        <div className="min-h-14"></div>
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
          <img src={imgSrc} alt={alt} className="mx-auto max-h-40" />
        </div>
        <h6 className="text-center text-15px lg:text-lg lg:mb-4">{title}</h6>
        <div className="mx-auto text-center flex justify-center items-center gap-3 pb-5 lg:pb-7.5">
          <p className="text-13px font-bold opacity-50 group-hover:text-primary">Shop</p>
          <img src="/shared/desktop/icon-arrow-right.svg" alt="Right arrow icon." />
        </div>
      </div>
    </Link>
  )
}

MainNavLinkCard.propTypes = {
  linkObj: PropTypes.object.isRequired,
  handleLinkClick: PropTypes.func,
}

export default MainNavLinkCard