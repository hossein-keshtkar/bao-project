import React from "react";

import styles from "../styles/socialBig.module.css";
import tel1 from "../assets/imgs/telegram.png";
import twit1 from "../assets/imgs/twitter.avif";
import inst1 from "../assets/imgs/instagram.png";
import tel2 from "../assets/imgs/telegram-icon.svg";
import twit2 from "../assets/imgs/twitter-icon.svg";
import inst2 from "../assets/imgs/instagram-icon.svg";
import { telId, instId, twitId } from "../utils/socialBigIds";

const SocialBig = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [id, setId] = React.useState("");

  const hoverHandler = (e) => {
    e.type === "mouseenter" ? setIsHovered(true) : setIsHovered(false);
    e.type === "mouseenter" ? setId(e.target.id) : setId("");
  };

  return (
    <div className={styles.container}>
      <a
        href="#"
        id={telId}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        {isHovered && id === telId ? (
          <img src={tel2} alt="telegram" />
        ) : (
          <img src={tel1} alt="telegram" />
        )}
      </a>
      <a
        href="#"
        id={instId}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
        style={{ margin: "0 15px" }}
      >
        {isHovered && id === instId ? (
          <img src={inst2} alt="instagram" />
        ) : (
          <img src={inst1} alt="instagram" />
        )}
      </a>
      <a
        href="#"
        id={twitId}
        onMouseEnter={hoverHandler}
        onMouseLeave={hoverHandler}
      >
        {isHovered && id === twitId ? (
          <img src={twit2} alt="twitter" />
        ) : (
          <img src={twit1} alt="twitter" />
        )}
      </a>
    </div>
  );
};

export default SocialBig;
