import React from "react";
import { HeaderMenuLeft } from "../HeaderMenuLeft";
import { HeaderMenuRight } from "../HeaderMenuRight";
import { HeaderCenterBar } from "../HeaderCenterBar";
import styles from "./GameHeader.module.scss";

const GameHeader: React.FC = () => {
  return (
    <div className={styles.headerOption}>
      <div className={styles.root}>
        <div className={styles.headerMenuLeft}>
          <HeaderMenuLeft />
        </div>
        <div className={styles.center}>
          <HeaderCenterBar />
        </div>
        <div className={styles.headerMenuRight}>
          <HeaderMenuRight />
        </div>
      </div>
    </div>
  );
};

export { GameHeader };
