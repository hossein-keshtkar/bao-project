import React from "react";

import styles from "../styles/navbarDropDown.module.css";

const NavbarDropDown = () => {
  return (
    <div className={styles.container}>
      <ul>
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
    </div>
  );
};

export default NavbarDropDown;
