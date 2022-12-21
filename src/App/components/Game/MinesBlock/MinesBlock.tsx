import { MineType } from "models/GameType";
import React from "react";
import { useSelector } from "react-redux";
import { playerApi } from "store/rtkQuery";
import { selectAuth } from "store/slice";
import { ResorceIron } from "../ResorceIron";

import styles from "./MinesBlock.module.scss";

interface MenesBlockType {
  handlerIronValue: (value: MineType | null) => void;
  handlerClickCircle: (value: MineType) => void;
}

const MinesBlock: React.FC<MenesBlockType> = ({
  handlerIronValue,
  handlerClickCircle,
}) => {
  const { auth } = useSelector(selectAuth);
  const {
    data: playerData,
    isLoading: playerLoading,
    refetch: playerRefetch,
  } = playerApi.useGetPlayerQuery({ id: auth._id });

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
