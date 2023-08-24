import React from "react";
import { Helmet } from "react-helmet";

import styles from "../styles/story.module.css";
import bee from "../assets/imgs/bee.svg";
import dashed from "../assets/imgs/dashed.avif";

const Story = () => {
  return (
    <section className={styles.container}>
      <Helmet>
        <link rel="preload" href={dashed} as="image" type="image/avif" />
      </Helmet>
      <img src={dashed} alt="dashed" className={styles.dashed} />
      <h2>
        <img src={bee} alt="bee" className={styles.bigBee} />
        BAO STORY
        <img src={bee} alt="bee" className={styles.smallBee} />
      </h2>
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
    </section>
  );
};

export default Story;
