import React from "react";

import styles from "../styles/navbarLinks.module.css";

const NavbarLinks = () => {
  return (
    <ul className={styles.container} id={"navLinks"}>
      <li>
        <a href="#">EN GE</a>
      </li>
      <li>
        <a href="#">ART</a>
      </li>
      <li>
        <a href="#">CONNECT</a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
