import React from "react";

import styles from "../styles/fightBig.module.css";
import bee from "../assets/imgs/bee.svg";
import dashed from "../assets/imgs/dashed-6.svg";

const FightBig = () => {
  return (
    <section className={styles.container}>
      <div className={styles.left}>
        <div className={styles.img} />
      </div>
      <div className={styles.right}>
        <h1>
          COME
          <br /> CHILDREN
          <br />
          OUR TIME IS
          <br /> NOW!
        </h1>
        <code>Join me in the fight for freedom.</code>
        <div>
          <img src={dashed} alt="dashed" className={styles.dashed} />
          <img src={bee} alt="bee" className={styles.bee} />
        </div>
      </div>
    </section>
  );
};

export default FightBig;
