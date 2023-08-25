import React from "react";

import styles from "../styles/navbar.module.css";
import logo from "../assets/imgs/logo.svg";
import NavbarSocial from "./NavbarSocial";
import NavbarLinks from "./NavbarLinks";
import NavbarHamburger from "./NavbarHamburger";
import { handleResize } from "../funcs/navBarResizeHandler";

const Navbar = () => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [innerWidth, setInnerWidth] = React.useState(0);
  const navbar = React.useRef();

  const hamburgerClassHandler = (e) => {
    setIsClicked(e);
  };

  React.useEffect(() => {
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  React.useEffect(() => {
    isClicked
      ? navbar.current.classList.add("dropdown")
      : navbar.current.classList.remove("dropdown");
    setInnerWidth(window.innerWidth);
  });

  return (
    <nav
      className={styles.container}
      id="nav"
      ref={navbar}
      style={{
        height: innerWidth <= 768 && isClicked && 200,
      }}
    >
      <a href="#" id="logo">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <NavbarSocial />
      <NavbarLinks />
      <NavbarHamburger toggle={hamburgerClassHandler} />
    </nav>
  );
};

export default Navbar;
