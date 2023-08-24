import React from "react";

import styles from "../styles/follow.module.css";
import bee from "../assets/imgs/bee.svg";
import hexagon from "../assets/imgs/hexagonSmall.svg";
import Social from "./Social";

const Follow = () => {
  return (
    <section className={styles.container}>
      <h2>
        <img src={bee} alt="bee" className={styles.bee} />
        Follow B-team <img src={hexagon} alt="hexagon" className={styles.hex}/> <br />
        activities on social networks:
      </h2>
      <p>
        To learn more about B-team and our community, follow us on Instagram and
        Telegram. Additionally, we only publish news about BAO collection on
        Twitter!
      </p>
      <Social tel={"#"} insta={"#"} twit={"#"} scale={1} />
    </section>
  );
};

export default Follow;
