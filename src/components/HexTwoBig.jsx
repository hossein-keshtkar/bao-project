import React from "react";

import styles from "../styles/hexTwoBig.module.css";
import bee from "../assets/imgs/bee.svg";
import dashed from "../assets/imgs/dashed-1.svg";

const HexTwoBig = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgs}>
        <img src={bee} alt="bee" className={styles.bee} />
        <img src={dashed} alt="dashed" className={styles.dashed} />
      </div>
    </section>
  );
};

export default HexTwoBig;
