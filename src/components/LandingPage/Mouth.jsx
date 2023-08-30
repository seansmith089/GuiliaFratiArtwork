import "./landingPageComps.css"

import mouth_image from "../../Images/people/Opera-senza-titolo 3_trimmed-min.jpg"

function Mouth() {
    return(
        <div className="image-container">
            <img className="mouth-image" src={mouth_image} alt="" />
        </div>
    )
}

export default Mouth;
