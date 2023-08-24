import React from "react";

import instagram from "../assets/imgs/instagram.png";
import twitter from "../assets/imgs/twitter.avif";
import telegram from "../assets/imgs/telegram.png";
import styles from "../styles/social.module.css";

const Social = ({ tel, insta, twit, scale }) => {
  return (
    <div className={styles.container} style={{ scale: scale }}>
      <a href={tel} className={styles.icon}>
        <img src={telegram} alt="telegram" height={17} width={17} />
      </a>
      <a href={insta} className={styles.icon}>
        <img src={instagram} alt="insta" height={17} width={17} />
      </a>
      <a href={twit} className={styles.icon}>
        <img src={twitter} alt="twitter" height={17} width={17} />
      </a>
    </div>
  );
};

export default Social;
