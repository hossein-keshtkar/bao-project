import React from "react";

import styles from "../styles/navbar.module.css";
import logo from "../assets/imgs/logo.svg";
import NavbarSocial from "./NavbarSocial";
import NavbarLinks from "./NavbarLinks";
import NavbarHamburger from "./NavbarHamburger";
import { handleResize } from "../funcs/navBarResizeHandler";
import NavbarDropDown from "./NavbarDropDown";

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.container} id="nav">
      <a href="#" id="logo">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <NavbarSocial />
      <NavbarLinks id={"navLinks"} isClicked={isClicked} />
      <NavbarHamburger toggle={(e) => setIsClicked(e)} />
      {isClicked && <NavbarDropDown />}
    </nav>
  );
};

export default Navbar;
