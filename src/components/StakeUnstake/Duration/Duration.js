import React from "react";
import styles from "./Duration.module.css";
import StakeAmount from "../StakeAmount/StakeAmount";

const Duration = ({ duration }) => {
  // const [active, setActive] = useState(1);
  return (
    <div className={styles.durationContainer}>
      <div className={styles.spaceBetween}>
        <p className={styles.title}>Duration</p>
        <p className={[styles.text, styles.title].join(" ")}>
          Please select a time frame
        </p>
      </div>
      <div className={styles.durations}>
        {duration.map((el, i) => (
          <div className={[styles.dayBox].join(" ")} key={i}>
            <p className={styles.day}>{el.day} Day</p>
            <div className={styles.apyBox}>
              <p className={styles.apyValue}>{el.apy}% </p>
              <p className={styles.apyText}>APY</p>
            </div>
          </div>
        ))}
      </div>
      <StakeAmount />
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Stake</button>
      </div>
    </div>
  );
};

export default Duration;
