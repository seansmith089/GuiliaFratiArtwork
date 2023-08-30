import { useState } from "react";

import { homePageImages } from "../../ImageData/homePage";

import useViewport from "../../CustomHooks/useViewport";

import Modal from "../shared/modal/Modal";

import "./homePageGallary.css";

function HomePageGallary() {
  const images = homePageImages;

  const [modalActive, setModalActive] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const { width, breakpoint } = useViewport();

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
      <div className="gallery-container">
        <div className="colunm">
          <div className="home-image-div">
            <img
              className="home-img"
              src={images[0].path}
              alt="Pink Blonde"
              onClick={
                width > breakpoint
                  ? () => handleClick(images[0].path)
                  : undefined
              }
            />
          </div>
          <div className="home-image-div">
            <img
              className="home-img"
              src={images[1].path}
              alt="not found"
              onClick={
                width > breakpoint
                  ? () => handleClick(images[1].path)
                  : undefined
              }
            />
          </div>
        </div>
        <div className="colunm">
          <div className="home-image-div">
            <img
              className="home-img"
              src={images[2].path}
              alt="Spaceman"
              onClick={
                width > breakpoint
                  ? () => handleClick(images[2].path)
                  : undefined
              }
            />
          </div>
          <div className="home-image-div">
            <img
              className="home-img"
              src={images[3].path}
              alt="Donuts"
              onClick={
                width > breakpoint
                  ? () => handleClick(images[3].path)
                  : undefined
              }
            />
          </div>
        </div>
        <div className="colunm">
          <div className="home-image-div">
            <img
              className="home-img"
              src={images[4].path}
              alt="paolo"
              onClick={
                width > breakpoint
                  ? () => handleClick(images[4].path)
                  : undefined
              }
            />
          </div>
          <div className="home-image-div">
            <img
              className="home-img"
              src={images[5].path}
              alt="Frog"
              onClick={
                width > breakpoint
                  ? () => handleClick(images[5].path)
                  : undefined
              }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePageGallary;
