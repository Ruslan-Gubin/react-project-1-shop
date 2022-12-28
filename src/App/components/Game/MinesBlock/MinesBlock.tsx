import { IPlayerType, MineType } from "models/GameType";
import React from "react";
import { ResorceIron } from "../ResorceIron";

import styles from "./MinesBlock.module.scss";

interface MenesBlockType {
  handlerIronValue: (value: MineType | null) => void;
  handlerClickCircle: (value: MineType) => void;
  playerData: IPlayerType;
}

const MinesBlock: React.FC<MenesBlockType> = ({
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
                <ResorceIron
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

export { MinesBlock };
