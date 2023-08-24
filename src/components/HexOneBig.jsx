import React from "react";

import styles from "../styles/hexOneBig.module.css";
import bee from "../assets/imgs/bee.svg";
import dashed from "../assets/imgs/dashed-4.svg";

const HexOneBig = () => {
  return (
    <section className={styles.container}>
      <div>
        <img src={dashed} alt="dashed" className={styles.dashed} />
        <img src={bee} alt="bee" className={styles.bee} />
      </div>
    </section>
  );
};

export default HexOneBig;
