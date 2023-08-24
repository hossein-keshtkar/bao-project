import React from "react";

import styles from "../styles/bteam.module.css";
import Link from "./Link";
import bee from "../assets/imgs/bee.svg";
import hexagon from "../assets/imgs/hexHoney.webp";

const Bteam = () => {
  return (
    <section className={styles.container}>
      <p>HOW ARE WE</p>
      <h1>Bteam</h1>
      <p>
        According to the Roadmap, this collection is going towards the formation
        of a decentralized and self-governed organization, where the bee owners
        can vote on the proposals, proposed by the members and start doing great
        things together to raise their economic level.
      </p>
      <Link href={"#"}>Learn More</Link>
      <div className={styles.imgContainer}>
        <img src={bee} alt="bee" className={styles.fistBee} />
        <img src={bee} alt="bee" className={styles.secBee} />
        <img src={hexagon} alt="hexagon" className={styles.hexagon} />
      </div>
    </section>
  );
};

export default Bteam;
