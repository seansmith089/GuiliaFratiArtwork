import heart from "../../Images/heart_red.png"
import "./thanks.css"

function Thanks() {
    return (
      <div className="thanks-page-container">
        <h1 className="page-title">Thanks!</h1>
        <div className="heart-container">
            <img className="heart-image" src={heart} alt="" />
        </div>
      </div>
    );
}

export default Thanks;