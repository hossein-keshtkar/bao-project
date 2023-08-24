import React from "react";

import hex from "../assets/imgs/hexagonSmall.svg";
import styles from "../styles/nftBig.module.css";
import dashed from "../assets/imgs/dashed-1.svg";
import bee from "../assets/imgs/bee.svg";
import nftHex from "../assets/imgs/hexHoney.webp";

const NftBig = () => {
  return (
    <section className={styles.container}>
      <div className={styles.first}>
        <img src={hex} alt="hex" className={styles.hex} />
      </div>
      <div className={styles.second}>
        <h1>What is NFT and what are the ways to generate income from it?</h1>
        <p>
          The NFTicket mini-course (which is currently free) introduces you to
          NFT and the best ways to generate it. I suggest watching this
          mini-course before starting anything in the NFT world!
        </p>
        <a href={"#"}>View NFTicket</a>
      </div>
      <div className={styles.third}>
        <img src={dashed} alt="dashed" className={styles.dashed} />
        <img src={bee} alt="bee" className={styles.bee} />
        <img src={nftHex} alt="nftHex" className={styles.nftHex} />
      </div>
    </section>
  );
};

export default NftBig;
