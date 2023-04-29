import React from "react";
import styles from "./Rate.module.css";

const Rate = ({ rate }) => {
  return (
    <div className={styles.rateContainer}>
      <div className={styles.spaceBetween}>
        <p className={styles.title}>Rate</p>
        <p className={styles.title}>1 UBS ≈ 2.57 USDT</p>
      </div>
      <div className={[styles.allRate, styles.grScrollbar].join(" ")}>
        {rate.map((el, i) => (
          <div
            className={[styles.spaceBetween, styles.rateWrapper].join(" ")}
            key={i}
          >
            <p className={styles.text}>{el.key}</p>{" "}
            <p className={styles.text}>{el.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rate;
