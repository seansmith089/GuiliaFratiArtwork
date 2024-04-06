import { Link } from "react-router-dom";
import useViewport from "../../../CustomHooks/useViewport";

import "./footer.css"

// ICON IMAGE IMPORTS
import instagram_colour from "../../../Images/website_images/socials/instagram_colour.png";
import linkedIn_colour from "../../../Images/website_images/socials/linkedIn_colour.png";
import tiktok_colour from "../../../Images/website_images/socials/tiktok_colour.png";
import facebook_colour from "../../../Images/website_images/socials/facebook_colour.png";
import insta_mobile from "../../../Images/website_images/socials/instagram_colour_mobile.png";
import linkedIn_mobile from "../../../Images/website_images/socials/linkedIn_colour_mobile.png";
import tiktok_mobile from "../../../Images/website_images/socials/tiktok_colour_mobile.png";
import facebook_mobile from "../../../Images/website_images/socials/facebook_colour_mobile.png";




function Footer() {
  const { width, breakpoint } = useViewport();

    return (
      <div className="footer-bar">
        {width < breakpoint && (
          <h1 className="mobile-footer-text">find me at...</h1>
        )}
        <div className="icon-container">
          {width > breakpoint && (
            <h1 className="desktop-footer-text">find me at ...</h1>
          )}
          <Link
            to={"https://www.facebook.com/profile.php?id=100079964044704"}
            target="_blank"
          >
            <img
              className="social-icon facebook"
              src={width < breakpoint ? facebook_mobile : facebook_colour}
              alt=""
            />
          </Link>
          <Link to={"https://www.instagram.com/_giuperterra/"} target="_blank">
            <img
              className="social-icon insta"
              src={width < breakpoint ? insta_mobile : instagram_colour}
              alt=""
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/giulia-frati-1059bb1b5"
            target="_blank"
          >
            <img
              className="social-icon linkedin"
              src={width < breakpoint ? linkedIn_mobile : linkedIn_colour}
              alt=""
            />
          </Link>
          <Link to="https://www.tiktok.com/@_giuperterraa" target="_blank">
            <img
              className="social-icon tiktok"
              src={width < breakpoint ? tiktok_mobile : tiktok_colour}
              alt=""
            />
          </Link>
        </div>
      </div>
    );
}

export default Footer; 