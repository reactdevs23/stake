import React from "react";
import { copy } from "../../images/images";
import styles from "./StakeLeaderBoard.module.css";

const StakeLeaderBoard = () => {
  const data = [
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
    {
      amount: 942,
      address: "0x8487869....9391",
    },
  ];
  return (
    <div className={[styles.wrapper].join(" ")}>
      <div className={styles.header}>
        <p className={[styles.text, styles.heading].join(" ")}>
          Stake Leaderboard{" "}
        </p>
        <p
          className={[
            styles.text,
            styles.secondaryText,
            styles.heading,
            styles.secondTitle,
          ].join(" ")}
        >
          Please select a time frame
        </p>
      </div>

      <div className={[styles.detailsContainer, styles.grScrollbar].join(" ")}>
        {data.map((el, i) => (
          <div className={styles.details} key={i}>
            <div className={styles.idAndKey}>
              <div className={styles.idContainer}>
                <p className={styles.id}>
                  {(i + 1).toString().padStart(2, "0")}
                </p>
              </div>
              <p className={styles.text}>Stake Amount: {el.amount} HTE</p>
            </div>
            <div className={styles.addressContainer}>
              <p className={styles.address}>{el.address}</p>
              <img src={copy} alt="#" className={styles.copy} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakeLeaderBoard;
