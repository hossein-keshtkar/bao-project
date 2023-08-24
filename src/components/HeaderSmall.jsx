import React from "react";

import styles from "../styles/headerSmall.module.css";

import queen from "../assets/imgs/queenBee.svg";
import bee from "../assets/imgs/bee.svg";

const HeaderSmall = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bao}>
        <img src={bee} alt="bee" className={styles.firstBee} />
        <img src={queen} alt="queen" className={styles.queen} />
        <h1>BAO</h1>
      </div>
      <div className={styles.organization}>
        BTEAM DECENTRALIZED AUTONOMOUS ORGANIZATION
      </div>
      <div className={styles.register}>
        <img src={bee} alt="bee" className={styles.secBee} />
        <a href="#">Register In The Whitelist</a>
      </div>
    </div>
  );
};

export default HeaderSmall;
