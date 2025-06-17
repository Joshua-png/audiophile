import FacebookIcon from "../../assets/svgs/FacebookIcon"
import InstagramIcon from "../../assets/svgs/InstagramIcon"
import TwitterIcon from "../../assets/svgs/TwitterIcon"

function SocialIcons() {
  return (
    <div className="flex justify-center items-center gap-4">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FacebookIcon />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
        <TwitterIcon />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <InstagramIcon />
      </a>
    </div>
  )
}

export default SocialIcons