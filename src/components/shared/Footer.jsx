import { Link } from "react-router-dom"
import ContentWrapper from "./ContentWrapper"
import SocialIcons from "./SocialIcons"
import useWindowWidth from "../../hooks/useWindowWidth"

function Footer() {
  const windowWidth = useWindowWidth();
  return (
    <footer className="relative">
      {/* Decorative bar */}
      <div className="h-1 bg-black absolute top-0 left-0 right-0 z-10 md:max-w-196.5 md:mx-auto lg:max-w-277.25">
        <div className="w-25 bg-primary h-full mx-auto md:mx-10 lg:mx-0"></div>
      </div>
      {/* Footer content */}
      <div className="bg-black text-white text-center pb-9.5 z-20 pt-1 md:text-left md:pb-10 lg:pb-12">
        <ContentWrapper>
          <div className="space-y-12 md:space-y-8">
            <div className="space-y-12 md:space-y-8 lg:space-y-0 lg:flex lg:items-center lg:justify-between lg:mt-18">
              <Link to="/">
                <img src="/shared/desktop/logo.svg" alt="audiophile logo" className="block mx-auto mt-12 md:mx-0 md:mt-14 lg:mt-0" />
              </Link>
              <ul className="font-bold text-13px tracking-2px uppercase leading-normal space-y-4 md:flex md:space-y-0 md:gap-8">
                <li><Link className="hover:text-primary" to="/">Home</Link></li>
                <li><Link className="hover:text-primary" to="/category/headphones">Headphones</Link></li>
                <li><Link className="hover:text-primary" to="/category/speakers">Speakers</Link></li>
                <li><Link className="hover:text-primary" to="/category/earphones">Earphones</Link></li>
              </ul>
            </div>
            <div className="lg:flex lg:justify-between lg:items-end">
              <p className="opacity-50 font-medium lg:max-w-135">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
              {windowWidth >= 1440 && 
                <div className="mb-2">
                  <SocialIcons />
                </div>
              }
            </div>
          </div>
          <div className="mt-12 space-y-12 md:flex md:justify-between md:items-center md:mt-20 md:space-y-0">
            <p className="opacity-50 font-bold">Copyright 2025. All Rights Reserved</p>
            {windowWidth < 1440 && <SocialIcons />}
          </div>
        </ContentWrapper>
      </div>
    </footer>
  )
}

export default Footer