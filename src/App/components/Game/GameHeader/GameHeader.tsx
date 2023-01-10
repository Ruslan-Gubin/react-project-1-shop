import React from "react";
import { HeaderMenuLeft } from "../HeaderMenuLeft";
import { HeaderMenuRight } from "../HeaderMenuRight";
import { HeaderCenterBar } from "../HeaderCenterBar";
import styles from "./GameHeader.module.scss";
import { IPlayerType } from "models/GameType";

interface GameHeaderType {
  playerData: IPlayerType;
  refetch: () => void
}

const GameHeader: React.FC<GameHeaderType> = ({playerData, refetch}) => {

  return (
    <div className={styles.headerOption}>
      <div className={styles.root}>
        <div className={styles.headerMenuLeft}>
          <HeaderMenuLeft playerData={playerData} />
        </div>
        <div className={styles.center}>
          <HeaderCenterBar playerData={playerData} />
        </div>
        <div className={styles.headerMenuRight}>
          <HeaderMenuRight playerData={playerData} refetch={refetch}/>
        </div>
      </div>
    </div>
  );
};

export { GameHeader };
