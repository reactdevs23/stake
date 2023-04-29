import React, { useState } from "react";

import styles from "./StakeAmount.module.css";
import { hte } from "../../../images/images";

const StakeAmount = ({ avialableUbs = 1.095684 }) => {
  const [amount, setAmount] = useState("");
  const handleKeyDown = (event) => {
    if (event.key !== "Backspace" && !/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };
  const progress = [25, 50, 75, 100];
  return (
    <div>
      <div className={styles.stakeAmountContainer}>
        <div className={styles.spaceBetween}>
          <p className={styles.title}>Stake Amount</p>
          <p className={styles.text}>Please enter amount</p>
        </div>{" "}
        <div className={styles.valueWrapper}>
          <form className={styles.form}>
            <input
              type="text"
              className={styles.input}
              value={amount}
              placeholder="Enter a value for the stake"
              onChange={(e) => setAmount(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <p className={[styles.ubs, styles.secondaryText].join(" ")}>MAX</p>
          </form>
          <div className={styles.hteContainer}>
            <img src={hte} alt="#" className={styles.image} />
            <span className={[styles.hte].join(" ")}>HTE</span>
          </div>
        </div>
        <div className={styles.progressContainer}>
          {progress.map((el, i) => (
            <p className={styles.progress} key={i}>
              {el}%
            </p>
          ))}
        </div>
        <div
          className={[styles.spaceBetween, styles.availableContainer].join(" ")}
        >
          <p className={styles.amount}>
            Available:{" "}
            <span className={styles.value}>
              {avialableUbs.toLocaleString("en-US", {
                maximumFractionDigits: 3,
              })}{" "}
              HTE
            </span>{" "}
          </p>
          <p className={styles.amount}>≈ {(2000).toLocaleString(2)} USDT</p>
        </div>{" "}
      </div>
    </div>
  );
};

export default StakeAmount;
