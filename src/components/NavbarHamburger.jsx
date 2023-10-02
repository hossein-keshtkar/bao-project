import React from "react";

import styles from "../styles/navbarHamburger.module.css";

const NavbarHamburger = ({ toggle }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const ul = React.useRef();

  const addIsClickedClassHandler = () => {
    ul.current.classList.toggle("isClicked");

    setIsClicked((prev) => !prev);
  };

  React.useEffect(() => {
    toggle(isClicked);
  }, [isClicked]);

  return (
    <ul
      className={styles.container}
      ref={ul}
      id="navbar-hamburger"
      onClick={addIsClickedClassHandler}
    >
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default NavbarHamburger;
