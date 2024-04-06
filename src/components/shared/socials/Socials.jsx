import "./socials.css"
import { Link } from "react-router-dom"

import insta_bw from "../../../Images/website_images/socials/instagram_bw.png"
import linkedIn_bw from "../../../Images/website_images/socials/linkedIn_bw.png"
import tiktok_bw from "../../../Images/website_images/socials/tiktok_bw.png"


function Socials(){
    return (
      <div className="landing-socials-container">
        <div className="landing-icon-container">
          <Link to={"https://www.instagram.com/_giuperterra/"} target="_blank">
            <img
              className="social-icon insta-landing"
              src={insta_bw}
              alt="insta_bw"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/giulia-frati-1059bb1b5"
            target="_blank"
          >
            <img
              className="social-icon linkedin-landing"
              src={linkedIn_bw}
              alt="linkedIn_bw"
            />
          </Link>
          <Link to="https://www.tiktok.com/@_giuperterraa" target="_blank">
            <img
              className="social-icon tiktok-landing"
              src={tiktok_bw}
              alt="tiktok_bw"
            />
          </Link>
        </div>
      </div>
    );
}

export default Socials;