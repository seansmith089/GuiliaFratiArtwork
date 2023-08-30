import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./navBar.css";

function Navigation() {
    return (
      <nav className="navigation">
        <div className="name-nav">
          <Link to="guiliafrati">
            <h1 className="navbar-name">- GIULIA FRATI - </h1>
          </Link>
        </div>

        <NavLinks />
      </nav>
    );
}

export default Navigation;