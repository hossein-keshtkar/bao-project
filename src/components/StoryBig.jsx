import React from "react";

import styles from "../styles/storyBig.module.css";
import flowers from "../assets/imgs/flowers.svg";

const StoryBig = () => {
  return (
    <section className={styles.container}>
      <h1>
        <span>BAO </span>
        <span className={styles.story}>STORY</span>
      </h1>
      <p>
        Plan A for the bees was to obey the queen...
        <br /> But after obedience took away their freedom, they teamed up and
        expelled the queen from their hive! <br /> After hours of thinking
        together, they came up with a plan B, so that they could be their own
        queen! <br />
        As a result, they formed an organization called BteamDAO to manage the
        hive autonomously. <br /> Now this is the first queenlees hive in the
        world, with the ownership of each of the bees in this hive, you can vote
        for each other's proposals and determine the path of the colony
        yourself! <br /> Membership in this hive is only for those who have
        decided to change financially...
      </p>

      <div className={styles.basket}>
        <img src={flowers} alt="flowers" />
      </div>
    </section>
  );
};

export default StoryBig;
