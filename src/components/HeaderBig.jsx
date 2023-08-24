import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/headerBig.module.css";
import bao from "../assets/imgs/bao.webp";
import hex from "../assets/imgs/NFT-hex.svg";
import bee from "../assets/imgs/bee.svg";
import logo from "../assets/imgs/logo.svg";
import dashed from "../assets/imgs/dashed-1.svg";

const HeaderBig = () => {
  return (
    <section className={styles.container}>
      <Helmet>
        <link rel="preload" href={bao} as="image" type="image/webp" />
      </Helmet>
      <img src={bao} alt="bao" className={styles.bao} />
      <a href="#">Register In The Whitelist</a>
      <div className={styles.imgs}>
        <img src={hex} alt="hex" className={styles.hex} />
        <img src={logo} alt="logo" className={styles.logo} />
        <div className={styles.beeContainer}>
          <img src={bee} alt="bee" className={styles.bee} />
          <img src={dashed} alt="dashed" className={styles.dashed} />
        </div>
      </div>
    </section>
  );
};

export default HeaderBig;
