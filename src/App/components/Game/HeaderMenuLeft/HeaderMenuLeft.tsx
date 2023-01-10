import { IPlayerType } from "models/GameType";
import React from "react";
import { LayoutLeftMenu, BuildingQueueSlots, SityList } from "../";

import styles from "./HeaderMenuLeft.module.scss";

interface HeaderMenuLeftType {
  playerData: IPlayerType
}

const HeaderMenuLeft: React.FC<HeaderMenuLeftType> = ({playerData}) => {

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <BuildingQueueSlots />
         <SityList playerData={playerData} />
        <LayoutLeftMenu /> 
      </div>
    </div>
  );
};

export { HeaderMenuLeft };
