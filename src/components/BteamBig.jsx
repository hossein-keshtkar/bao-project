import React from "react";

import styles from "../styles/bteamBig.module.css";
import dashed from "../assets/imgs/dashed-3.svg";
import bee from "../assets/imgs/bee.svg";

const BteamBig = () => {
  return (
    <section className={styles.container}>
      <div>
        <p>WHO WE ARE</p>
        <h1>Bteam</h1>
      </div>
      <p className={styles.paragraph}>
        According to the Roadmap, this collection is going <br /> towards the
        formation of a decentralized and <br /> self-governed organization,
        where the bee owners <br /> can vote on the proposals, proposed by the
        members and <br /> start doing great things together to raise their
        economic level.
      </p>
      <a href={"#"}>Learn More</a>
      <div className={styles.imgs}>
        <img src={dashed} alt="dashed" className={styles.dashed} />
        <img src={bee} alt="bee" className={styles.bee} />
      </div>
    </section>
  );
};

export default BteamBig;
