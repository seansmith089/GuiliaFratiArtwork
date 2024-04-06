import { NavLink } from "react-router-dom";
import useViewport from "../../../CustomHooks/useViewport"

import "./navBar.css"

function NavLinks({open,setOpen}) {

    const { width, breakpoint } = useViewport();
    
    return (
      <ul>
        <li>
          <NavLink
            to="giuliafrati"
            className="nav-option"
            onClick={width < breakpoint ? () => setOpen(!open) : undefined}
          >
            HOME
            <span className="dots-home dots">....</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="projects"
            className="nav-option"
            onClick={width < breakpoint ? () => setOpen(!open) : undefined}
          >
            PROJECTS
            <span className="dots-projects dots">......</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="https://www.redbubble.com/people/tuliaha/shop"
            className="nav-option"
            target="_blank"
            onClick={width < breakpoint ? () => setOpen(!open) : undefined}
          >
            STORE
          </NavLink>
        </li>
        <li>
          <NavLink
            to="about"
            className="nav-option"
            onClick={width < breakpoint ? () => setOpen(!open) : undefined}
          >
            ABOUT ME
            <span className="dots-about dots">.......</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="contact"
            className="nav-option"
            onClick={width < breakpoint ? () => setOpen(!open) : undefined}
          >
            CONTACT
            <span className="dots-contact dots">......</span>
          </NavLink>
        </li>
      </ul>
    );
}

export default NavLinks;