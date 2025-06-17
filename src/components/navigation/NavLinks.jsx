import MainNavLinkCard from "./MainNavLinkCard"
import PropTypes from "prop-types"

function NavLinks({ handleMobileNav, className}) {
  const links = [
    {
      title: "headphones",
      link: "/category/headphones",
      imgSrc: "/shared/desktop/image-category-thumbnail-headphones.png",
      alt: "earphones"
    },
    {
      title: "speakers",
      link: "/category/speakers",
      imgSrc: "/shared/desktop/image-category-thumbnail-speakers.png",
      alt: "speakers"
    },
    {
      title: "earphones",
      link: "/category/earphones",
      imgSrc: "/shared/desktop/image-category-thumbnail-earphones.png",
      alt: "earphones"
    }
  ];

  const componentInMobileNav = handleMobileNav !== undefined;

  return (
    <div className={`${className} ${componentInMobileNav && "overflow-y-auto max-h-[80vh]"}`}>
      <ul className={`uppercase py-8 bg-white space-y-4 md:flex md:space-y-0 md:justify-center md:gap-3 lg:grid lg:grid-cols-3 lg:py-0 ${componentInMobileNav && "px-6 rounded-b-md md:pb-14"}`}>
        {links.map((link, index) => (
          <li key={index}>
            <MainNavLinkCard linkObj={link} handleLinkClick={handleMobileNav} />
          </li>
          ))}
      </ul>
    </div>
  )
}

NavLinks.propTypes = {
  handleMobileNav: PropTypes.func,
  className: PropTypes.string,
}

export default NavLinks