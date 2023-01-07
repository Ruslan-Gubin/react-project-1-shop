import React from "react";
import { Outlet } from "react-router-dom";
import { FooterGame } from "../FooterGame";
import { GameHeader } from "../GameHeader";

import styles from "./GameLayout.module.scss";

const GameLayout: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
      <GameHeader />
      </div>
      <div className={styles.outlet}> 
      <Outlet />
      </div>
      <div className={styles.footer}> 
      <FooterGame />
      </div>
    </div>
  );
};

export { GameLayout };
