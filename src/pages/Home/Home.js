import React from "react";
import StakeLeaderBoard from "../../components/StakeLeaderBoard/StakeLeaderBoard";
import StakeUnstake from "../../components/StakeUnstake/StakeUnStake";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.mainWrapper}>
      <div className="container">
        {" "}
        <div className={styles.wrapper}>
          <StakeLeaderBoard />
          <StakeUnstake />
        </div>
      </div>
    </div>
  );
};

export default Home;
