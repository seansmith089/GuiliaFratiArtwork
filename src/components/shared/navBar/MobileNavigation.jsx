// ICON IMPORTS
import { LuMenu } from "react-icons/lu";
import { VscChromeClose } from "react-icons/vsc";


import NavLinks from "./NavLinks";

import { useState } from "react";
import { Link } from "react-router-dom";

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = 
        <LuMenu
            className="hamburger"
            size={"2.5rem"}
            color="white"
            onClick={() => setOpen(!open)}
      />
    const closeIcon = (
      <VscChromeClose
        className="close"
        size={"2rem"}
        color="white"
        onClick={() => setOpen(!open)}
      />
    );


  return (
    <nav className="mobile-navigation">
      <Link to="guiliafrati">
        <h1 className="name-mobile">- GIULIA FRATI -</h1>
      </Link>
      {open ? closeIcon : hamburgerIcon}
      {open && <NavLinks open={open} setOpen={setOpen} />}
    </nav>
  );
}

export default MobileNavigation;
