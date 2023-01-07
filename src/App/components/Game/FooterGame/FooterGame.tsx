import React from "react";
import { FooterGameBar } from "../FooterGameBar";
import { FooterGameQueue } from "../FooterGameQueue";

import styles from "./FooterGame.module.scss";

interface FooterGameType {}

const FooterGame: React.FC<FooterGameType> = () => {
  return (
    <div className={styles.root}>
      <FooterGameQueue />
      <FooterGameBar />
    </div>
  );
};

export { FooterGame };
