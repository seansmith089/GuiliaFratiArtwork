import { Outlet} from "react-router-dom"
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import Footer from "../footer/Footer";

import "./navBar.css"

function NavBar(){
    return (
      <div className="root-layout">
        <div className="navbar">
            <MobileNavigation />
            <Navigation />
        </div>

        <div>
            <Outlet />
        </div>
        <div className="footer-container">
          <Footer />
        </div>
      </div>
    );
}

export default NavBar;