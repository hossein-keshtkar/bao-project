import React from "react";

import styles from "../styles/navbarLinks.module.css";

const NavbarLinks = ({ id, isClicked }) => {
  const ul = React.useRef();

  React.useEffect(() => {
    ul.current.classList.toggle("isClicked");
  }, [isClicked]);

  return (
    <ul className={styles.container} id={id} ref={ul}>
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
