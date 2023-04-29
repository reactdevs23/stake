import React, { useState } from "react";

import Duration from "./Duration/Duration";
import Rate from "./Rate/Rate";

import styles from "./StakeUnStake.module.css";

const StakeUnstake = () => {
  const [stake, setStake] = useState(true);
  const duration = [
    {
      day: 10,
      apy: 10,
    },
    {
      day: 30,
      apy: 32,
    },
    {
      day: 60,
      apy: 80,
    },
    {
      day: 120,
      apy: 300,
    },
  ];
  const rate = [
    {
      key: "Slippage tolerance",
      value: "4.02%",
    },
    {
      key: "Minimum:",
      value: "4.02%",
    },
    {
      key: "Available quote:",
      value: "1 BUS",
    },
    {
      key: "Total personal quote:",
      value: "1,000 BUS",
    },
    {
      key: "Slippage tolerance",
      value: "4.02%",
    },
    {
      key: "Minimum:",
      value: "4.02%",
    },
    {
      key: "Available quote:",
      value: "1 BUS",
    },
    {
      key: "Total personal quote:",
      value: "1,000 BUS",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.stakeWrapper}>
        <div className={styles.stakeUnstake}>
          <button
            onClick={() => setStake(true)}
            className={[styles.button, stake && styles.activeButton].join(" ")}
          >
            Stake
          </button>
          <button
            onClick={() => setStake(false)}
            className={[styles.button, !stake && styles.activeButton].join(" ")}
          >
            unStake
          </button>
        </div>
        <Duration duration={duration} />

        <Rate rate={rate} />
      </div>
    </div>
  );
};

export default StakeUnstake;
