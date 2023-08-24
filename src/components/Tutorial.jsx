import React from "react";

import styles from "../styles/tutorial.module.css";
import bee from "../assets/imgs/bee.svg";
import flowers from "../assets/imgs/flowers.svg";
import Link from "./Link";

const Tutorial = () => {
  return (
    <section className={styles.container}>
      <h2>
        <img src={bee} alt="bee" className={styles.bee} />
        Participation Tutorial in BAO events:
      </h2>
      <p>
        If you want to Premint or Freemint the bees, you need to participate in
        BAO events every day to earn more and more points.
      </p>
      <Link href="#">Read The White Paper Carefully</Link>
      <div className={styles.flowers}>
        <img src={flowers} alt="flowers" />
      </div>
    </section>
  );
};

export default Tutorial;
