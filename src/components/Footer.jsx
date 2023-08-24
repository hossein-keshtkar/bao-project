import React from "react";

import Social from "./Social";
import styles from "../styles/footer.module.css";
import bao from "../assets/imgs/bao.webp";
import bee from "../assets/imgs/bee.svg";
import leftFlower from "../assets/imgs/flowersLeftFooter.svg";
import rightFlower from "../assets/imgs/flowersRightFooter.svg";
import Scroll from "./Scroll";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.beeContainer}>
        <img src={bee} alt="bee" className={styles.bee} />
      </div>
      <Scroll />
      <div className={styles.mediaContainer}>
        <Social tel={"#"} insta={"#"} twit={"#"} scale={"0.8"} />
      </div>
      <img src={bao} alt="bao" className={styles.bao} />
      <img src={rightFlower} alt="flower" className={styles.rightFlower} />
      <img src={leftFlower} alt="flower" className={styles.leftFlower} />
    </footer>
  );
};

export default Footer;

