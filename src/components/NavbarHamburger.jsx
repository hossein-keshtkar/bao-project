import React from "react";

import styles from "../styles/navbarHamburger.module.css";

const NavbarHamburger = ({ toggle }) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const ul = React.useRef();

  const classHandler = () => {
    ul.current.classList.toggle("isClicked");

    setIsClicked((state) => !state);

    toggle(isClicked);
  };

  return (
    <ul className={styles.container} ref={ul} onClick={classHandler}>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

export default NavbarHamburger;
