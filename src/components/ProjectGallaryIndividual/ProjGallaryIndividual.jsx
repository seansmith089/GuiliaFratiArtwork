import Modal from "../shared/modal/Modal";
import { useState } from "react";
import useViewport from "../../CustomHooks/useViewport";

import {
  peopleProject,
  animalsProject,
  commissionProject,
  foodProject,
  patternProject,
  bookProject,
} from "../../ImageData/imageData";

import "./projectGallaryIndividual.css";

function ProjectGallaryIndividual({ project }) {
  const people = peopleProject;
  const animals = animalsProject;
  const comms = commissionProject;
  const food = foodProject;
  const patterns = patternProject;
  const book = bookProject;

    const { width, breakpoint } = useViewport()

    const [modalActive, setModalActive] = useState(false);
    const [imgSrc, setImgSrc] = useState("");

    const handleClick = (src) => {
      setModalActive((modalActive) => !modalActive);
      setImgSrc(src);
    };


  return (
    <>
      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        imgSrc={imgSrc}
      />
      {project == "people" && width > breakpoint && (
        <h1 className="page-title"> - People Project -</h1>
      )}
      {project == "animals" && width > breakpoint && (
        <h1 className="page-title"> - Animals Project -</h1>
      )}
      {project == "comms" && width > breakpoint && (
        <h1 className="page-title">- Commission Projects -</h1>
      )}
      {project == "food" && width > breakpoint && (
        <h1 className="page-title">- Food & Drink Project -</h1>
      )}
      {project == "patterns" && width > breakpoint && (
        <h1 className="page-title">- Patterns Project -</h1>
      )}
      {project == "book" && width > breakpoint && (
        <h1 className="page-title">- Childrens Book Project -</h1>
      )}
      <div className="gal-img-container">
        {project == "people" &&
          people.map((image) => (
            <img
              key={image.key}
              className="gal-img"
              src={image.path}
              onClick={() => handleClick(image.path)}
            ></img>
          ))}
        {project == "animals" &&
          animals.map((image) => (
            <img
              key={image.key}
              className="gal-img"
              src={image.path}
              onClick={() => handleClick(image.path)}
            ></img>
          ))}
        {project == "comms" &&
          comms.map((image) => (
            <img
              key={image.key}
              className="gal-img"
              src={image.path}
              onClick={() => handleClick(image.path)}
            ></img>
          ))}
        {project == "food" &&
          food.map((image) => (
            <img
              key={image.key}
              className="gal-img"
              src={image.path}
              onClick={() => handleClick(image.path)}
            ></img>
          ))}
        {project == "patterns" &&
          patterns.map((image) => (
            <img
              key={image.key}
              className="gal-img"
              src={image.path}
              onClick={() => handleClick(image.path)}
            ></img>
          ))}
        {project == "book" &&
          book.map((image) => (
            <img
              key={image.key}
              className="gal-img"
              src={image.path}
              onClick={() => handleClick(image.path)}
            ></img>
          ))}
      </div>
    </>
  );
}

export default ProjectGallaryIndividual;
