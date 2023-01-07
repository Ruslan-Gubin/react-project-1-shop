import { iconsGame } from "data";
import { useHoverHits } from "hooks";
import React from "react";
import { HitsModal } from "../HitsModal";

import styles from "./FooterGameChatMenu.module.scss";

interface FooterGameChatMenuType {}

const FooterGameChatMenu: React.FC<FooterGameChatMenuType> = () => {
  const {hover, hoverRef} = useHoverHits()

  return (
    <div className={styles.root}>
      <div ref={hoverRef} className={styles.container}>
        <img src={iconsGame["chatGame"]} alt="icon chatGame" />
      </div>
      {hover &&
      <div className={styles.hits}>
        <HitsModal value="Чат" width={60} />
      </div>
      }
    </div>
  );
};

export { FooterGameChatMenu };
