import { IPlayerType, MineType } from "models/GameType";
import React from "react";
import { ResourceIron } from "../ResourceIron";

import styles from "./MinesBlock.module.scss";

interface MenesBlockType {
  handlerIronValue: (value: MineType | null) => void;
  handlerClickCircle: (value: MineType) => void;
  playerData: IPlayerType;
}

const MinesBlockF: React.FC<MenesBlockType> = ({
  handlerIronValue,
  handlerClickCircle,
  playerData,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.mines}>
        <ul className={styles.mine}>
          {playerData &&
            playerData.mines.map((mine) => (
              <li key={mine._id}>
                <ResourceIron
                  handlerIronValue={handlerIronValue}
                  mine={mine}
                  handlerClickCircle={handlerClickCircle}
                />
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export const MinesBlock = React.memo(MinesBlockF);
