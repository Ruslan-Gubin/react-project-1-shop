import { MineType } from "models/GameType";
import React from "react";
import { ResorceIron } from "../ResorceIron";

import styles from "./MinesBlock.module.scss";

interface MenesBlockType {
  handlerIronValue: (value: MineType) => void
  handlerClickCircle: (value: MineType) => void
  minesArray: MineType[]
  mineInfo: MineType
}

const MinesBlock: React.FC<MenesBlockType> = ({handlerIronValue, minesArray, mineInfo, handlerClickCircle}) => {

  return (
    <div className={styles.root}>
      <div className={styles.mines}>
        <ul className={styles.mine}>
          {minesArray.map((mine) => (
            <li key={mine.id}>
              <ResorceIron mineInfo={mineInfo} handlerIronValue={handlerIronValue} mine={mine} handlerClickCircle={handlerClickCircle} />
            </li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export { MinesBlock };
