import React from "react";

import styles from "../styles/goal.module.css";
import bee from "../assets/imgs/bee.svg";
import Link from "./Link";

const Goal = () => {
  return (
    <section className={styles.container}>
      <h2>
        <img src={bee} alt="bee" className={styles.bee} />
        What Is The Goal Of BAO?
      </h2>
      <p>
        This collection according to the Roadmap, moves towards a decentralized
        and self-directed organizational structure, where Bee holders can vote
        on proposed proposals and work together on major projects to improve
        their economic level...
      </p>
      <Link href={"#"}>View Participation Tutorial</Link>
    </section>
  );
};

export default Goal;
