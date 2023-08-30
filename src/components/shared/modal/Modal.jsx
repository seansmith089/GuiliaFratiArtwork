import "./modal.css"
import { useState } from "react"
import { VscChromeClose } from "react-icons/vsc";



function Modal({modalActive, setModalActive, imgSrc}) {
    
    const closeBtnHandler = () => {
        setModalActive( modalActive => !modalActive)
    }

    return (
      <>
        {modalActive && (
          <div className="backdrop" onClick={closeBtnHandler}>
            <div className="modal-image-container">
              {/* <button onClick={closeBtnHandler}>Close</button> */}
              <img className="modal-image" src={imgSrc} alt="" />
              <VscChromeClose
                size={"3rem"}
                onClick={() => closeBtnHandler}
                className="modal-close"
              />
            </div>
          </div>
        )}
      </>
    );
}

export default Modal;