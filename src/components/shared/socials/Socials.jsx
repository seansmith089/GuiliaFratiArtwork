import "./socials.css"

import insta_bw from "../../../Images/website_images/socials/instagram_bw.png"
import linkedIn_bw from "../../../Images/website_images/socials/linkedIn_bw.png"
import tiktok_bw from "../../../Images/website_images/socials/tiktok_bw.png"


function Socials(){
    return (
      <div className="landing-socials-container">
        <div className="landing-icon-container">
          <img className="social-icon insta-landing" src={insta_bw} alt="insta_bw" />
          <img className="social-icon linkedin-landing" src={linkedIn_bw} alt="linkedIn_bw" />
          <img className="social-icon tiktok-landing" src={tiktok_bw} alt="tiktok_bw" />
        </div>
      </div>
    );
}

export default Socials;