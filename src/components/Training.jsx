import React from "react";

import styles from "../styles/training.module.css";
import bee from "../assets/imgs/bee.svg";
import Link from "./Link";

const Training = () => {
  return (
    <section className={styles.container}>
      <h2>
        <img src={bee} alt="bee" className={styles.bee} />
        Comprehensive training course on NFT and definitive AllowList in
        Collections
      </h2>
      <p>
        The Morphiny income-oriented will teach you everything you need to know
        about NFT from beginner to advanced level after purchasing this course,
        you can easily take advantage of various oppurtunities in this market to
        generate income. This course is the only way to enter the core of our
        collections, which all become definitive AllowLists!
      </p>
      <Link href={"#"}>Learn More About The Course</Link>
    </section>
  );
};

export default Training;
