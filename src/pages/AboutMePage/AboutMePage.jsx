import photo from "C:/Users/Sean/Documents/VSCode Files/giulia_website/src/Images/about_me_img_wide.png";

import AboutMe from "../../components/AboutMe/AboutMe";

import "./aboutMePage.css";

function AboutMePage() {
  return (
    <>
      <h1 className="page-title">- About Me -</h1>
      <div className="about-me-page-container">
        <AboutMe />
      </div>
      ,
    </>
  );
}

export default AboutMePage;
