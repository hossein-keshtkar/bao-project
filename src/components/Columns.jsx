import React from "react";

import styles from "../styles/columns.module.css";
import dashed from "../assets/imgs/dashed-2.svg";
import bee from "../assets/imgs/bee.svg";
import SocialBig from "./SocialBig";

const Tutorial = () => {
  return (
    <div>
      <h2>Participation Tutorial in BAO events:</h2>
      <p>
        If you want to Premint or Freemint the bees, you need to participate in
        BAO events every day to earn more and more points.
      </p>
      <a href="#" className={styles.link}>
        Read The White Paper Carefully
      </a>
      <div className={styles.imgs}>
        <img src={dashed} alt="dashed" className={styles.dashed} />
        <img src={bee} alt="bee" className={styles.bee} />
      </div>
    </div>
  );
};

const Goal = () => {
  return (
    <div>
      <h2>What Is The Goal Of BAO?</h2>
      <p>
        This collection according to the Roadmap, moves towards a decentralized
        and self-directed organizational structure, where Bee holders can vote
        on proposed proposals and work together on major projects to improve
        their economic level...
      </p>
      <a href="#" className={styles.link}>
        View Participation Tutorial
      </a>
    </div>
  );
};

const Follow = () => {
  return (
    <div>
      <h2>Follow B-team activities on social networks:</h2>
      <p>
        To learn more about B-team and our community, follow us on Instagram and
        Telegram. Additionally, we only publish news about BAO collection on
        Twitter!
      </p>
      <div className={styles.social}>
        <SocialBig />
      </div>
    </div>
  );
};

const Columns = () => {
  return (
    <section className={styles.container}>
      <Tutorial />
      <Goal />
      <Follow />
    </section>
  );
};

export default Columns;
