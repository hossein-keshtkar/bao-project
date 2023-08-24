import React from "react";

import styles from "../styles/footerBig.module.css";
import SocialBig from "./SocialBig";
import bao from "../assets/imgs/bao.webp";
import bee from "../assets/imgs/bee.svg";
import dashed from "../assets/imgs/dashed-6.svg";
import rightFlower from "../assets/imgs/flowersRightFooter.svg";
import leftFlower from "../assets/imgs/flowersLeftFooter.svg";
import Scroll from "../components/Scroll";

const FooterBig = () => {
  return (
    <footer className={styles.container}>
      <SocialBig />
      <img src={bao} alt="bao" className={styles.bao} />
      <div className={styles.imgs}>
        <img src={bee} alt="bee" className={styles.bee} />
        <img src={dashed} alt="dashed" className={styles.dashed} />
      </div>
      <Scroll />
      <img src={rightFlower} alt="flower" className={styles.rightFlower} />
      <img src={leftFlower} alt="flower" className={styles.leftFlower} />
    </footer>
  );
};

export default FooterBig;
