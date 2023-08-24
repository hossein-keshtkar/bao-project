import React from "react";

import bee from "../assets/imgs/bee.svg";
import styles from "../styles/nft.module.css";
import Link from "./Link";

const Nft = () => {
  return (
    <section className={styles.container}>
      <h2>
        <img src={bee} alt="bee" className={styles.bee} />
        What is NFT and what are the ways to generate income from it?
      </h2>
      <p>
        The NFTicket mini-course (which is currently free) introduces you to NFT
        and the best ways to generate it. I suggest watching this mini-course
        before starting anything in the NFT world!
      </p>
      <Link href={"#"}>View NFTicket</Link>
    </section>
  );
};

export default Nft;
