import { Link } from "react-router-dom";

import { projectPreviewImages } from "../../ImageData/projectPreview";

import "./projectsGallary.css";

function ProjectsGallary() {
  const images = projectPreviewImages;

  return (
    <>
      <div className="proj-gallery-container">
        <div className="proj-row">
          <div className="proj-image-div">
            <img
              className="proj-img drink-tea"
              src={images[0].path}
              alt="drink-tea"
            />
            <Link to={"/projects/people"}>
              <div className="proj-title-container">
                <div className="proj-title-box">
                  <h1 className="projects-title">people</h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="proj-image-div">
            <img className="proj-img" src={images[1].path} alt="giraffe" />
            <Link to={"/projects/animals"}>
              <div className="proj-title-container">
                <div className="proj-title-box">
                  <h1 className="projects-title">animals</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="proj-row">
          <div className="proj-image-div">
            <img
              className="proj-img hotdog"
              src={images[2].path}
              alt="hotdog"
            />
            <Link to={"/projects/food"}>
              <div className="proj-title-container">
                <div className="proj-title-box">
                  <h1 className="projects-title">food & drink</h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="proj-image-div">
            <img className="proj-img " src={images[3].path} alt="" />
            <Link to={"/projects/comms"}>
              <div className="proj-title-container">
                <div className="proj-title-box">
                  <h1 className="projects-title">commissions</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="proj-row">
          <div className="proj-image-div">
            <img className="proj-img" src={images[4].path} alt="Spaceman" />
            <Link to={"/projects/patterns"}>
              <div className="proj-title-container">
                <div className="proj-title-box">
                  <h1 className="projects-title">patterns</h1>
                </div>
              </div>
            </Link>
          </div>
          <div className="proj-image-div ">
            <img
              className="proj-img childrens-book"
              src={images[5].path}
              alt="childrens-book"
            />
            <Link to={"/projects/book"}>
              <div className="proj-title-container">
                <div className="proj-title-box">
                  <h1 className="projects-title">childrens book</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsGallary;
