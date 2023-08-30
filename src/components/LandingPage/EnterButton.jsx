import "./landingPageComps.css"
import { NavLink } from "react-router-dom";

function EnterButton(){
    return (
      <div className="enter-btn-container">
        <div className="enter-btn">
          <NavLink to={"guiliafrati"}>
            <h1 className="enter-txt">-ENTER-</h1>
          </NavLink>
        </div>
      </div>
    );
}

export default EnterButton;