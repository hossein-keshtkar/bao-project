import React, { lazy, Suspense } from "react";

import Story from "./Story";
import styles from "../styles/contentsSmall.module.css";
import hive from "../assets/imgs/hive.svg";
import hexagon from "../assets/imgs/hexagon.svg";
import bee from "../assets/imgs/bee.svg";
import dashedBee from "../assets/imgs/dashedBee.svg";
import Fallback from "./Fallback";

const Tutorial = lazy(() => import("./Tutorial"));
const Follow = lazy(() => import("./Follow"));
const Goal = lazy(() => import("./Goal"));
const Bteam = lazy(() => import("./Bteam"));
const Nft = lazy(() => import("./Nft"));
const Training = lazy(() => import("./Training"));

const ContentsSmall = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <section className={styles.container}>
        <Story />
        <section className={styles.hexContainer}>
          <img src={hexagon} alt="hexagon" className={styles.hexagon} />
          <img src={bee} alt="bee" className={styles.hexBee} />
        </section>
        <Tutorial />
        <Goal />
        <Follow />
        <section className={styles.hiveContainer}>
          <img src={bee} alt="bee" className={styles.topHiveBee} />
          <img src={hive} alt="hive" className={styles.hive} />
          <img src={bee} alt="bee" className={styles.botHiveBee} />
        </section>
        <Bteam />
        <Nft />
        <section className={styles.dashedBeeContainer}>
          <img src={dashedBee} alt="bee" className={styles.dashedBee} />
        </section>
        <Training />
      </section>
    </Suspense>
  );
};

export default ContentsSmall;
