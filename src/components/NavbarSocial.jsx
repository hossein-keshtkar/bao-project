import React from "react";

import insta from "../assets/imgs/instagram-icon.svg";
import tel from "../assets/imgs/telegram-icon.svg";
import twit from "../assets/imgs/twitter-icon.svg";
import mail from "../assets/imgs/mail-icon.svg";
import disc from "../assets/imgs/discord-icon.svg";
import styles from "../styles/navbarSocial.module.css";

const NavbarSocial = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a href="#">
          <img src={mail} alt="mail" width={25} height={25} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={tel} alt="tel" width={25} height={25} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={insta} alt="insta" width={25} height={25} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={twit} alt="twit" width={25} height={25} />
        </a>
      </li>
      <li>
        <a href="#">
          <img src={disc} alt="disc" width={25} height={25} />
        </a>
      </li>
    </ul>
  );
};

export default NavbarSocial;
