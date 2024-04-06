import { Link } from "react-router-dom";

import { projectPreviewImages } from "../../ImageData/projectPreview";

import people_btn from "../../Images/website_images/buttons/people.png";
import food_btn from "../../Images/website_images/buttons/food_and_drink.png";
import animals from "../../Images/website_images/buttons/animals.png";
import commissions from "../../Images/website_images/buttons/commissions.png";
import patterns from "../../Images/website_images/buttons/patterns.png";
import book from "../../Images/website_images/buttons/book.png"

import "./projectsGallary.css";

function ProjectsGallary() {
  const images = projectPreviewImages;

  return (
    <>
      <div className="proj-gallery-container">
        <div className="proj-row">
          <div className="proj-image-div">
            <img
              className="proj-img red-face"
              src={images[0].path}
              alt="drink-tea"
            />
            <Link to={"/projects/people"}>
              <div className="proj-title-container">
                <img src={people_btn} className="people_btn" alt="" />
              </div>
            </Link>
          </div>
          <div className="proj-image-div">
            <img className="proj-img" src={images[1].path} alt="giraffe" />
            <Link to={"/projects/animals"}>
              <div className="proj-title-container">
                {/* <div className="proj-title-box">
                  <h1 className="projects-title">animals</h1>
                </div> */}
                <img src={animals} className="animal_btn" />
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
                <img src={food_btn} className="food_btn" alt="food_btn" />
              </div>
            </Link>
          </div>
          <div className="proj-image-div">
            <img className="proj-img " src={images[3].path} alt="comm_img" />
            <Link to={"/projects/comms"}>
              <div className="proj-title-container">
                {/* <div className="proj-title-box">
                  <h1 className="projects-title">commissions</h1>
                </div> */}
                <img src={commissions} className="comms_btn" />
              </div>
            </Link>
          </div>
        </div>
        <div className="proj-row">
          <div className="proj-image-div">
            <img className="proj-img" src={images[4].path} alt="Spaceman" />
            <Link to={"/projects/patterns"}>
              <div className="proj-title-container">
                {/* <div className="proj-title-box">
                  <h1 className="projects-title">patterns</h1>
                </div> */}
                <img
                  src={patterns}
                  className="patterns_btn"
                  alt="patterns-btn"
                />
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
                {/* <div className="proj-title-box">
                  <h1 className="projects-title">childrens book</h1>
                </div> */}
                <img src={book} className="book_btn" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectsGallary;
