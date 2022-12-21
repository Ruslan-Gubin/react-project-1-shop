import {  resurceUpdateRuls } from "data";
import { useMineNextLevelInfo } from "hooks";
import { MineType } from "models/GameType";
import React from "react";
import { useSelector } from "react-redux";
import {  selectPlayer } from "store/slice";
import { checkResorsUpdate } from "utils";
import { CircleBuild } from "../CircleBuild";

import styles from "./ResorceIron.module.scss";

interface ResorceIronType {
  mine: MineType
  handlerIronValue: (value: MineType| null) => void
  handlerClickCircle: (value: MineType) => void
}

const ResorceIron: React.FC<ResorceIronType> = ({ mine, handlerIronValue, handlerClickCircle }) => {  
  const { resurceBar } = useSelector(selectPlayer);
  const {minesTargetRef} = useMineNextLevelInfo(mine, handlerIronValue)
  const [activeUpdate, setActiveUpdate] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (resurceBar) {
      const checkResursForUpdate = checkResorsUpdate(mine, resurceBar, resurceUpdateRuls)
      setActiveUpdate(checkResursForUpdate)
    }
  },[resurceBar]) 

  return (
    <div ref={minesTargetRef}  className={styles.root}>
      <img className={styles.image} src={mine.imag} alt="resorce field" />
      <div className={styles.circle}>
        {mine &&
        <CircleBuild handlerClickCircle={handlerClickCircle} mine={mine} updateActive={activeUpdate}  level={mine.level}/>
        }
      </div>
    </div>
  );
};

export { ResorceIron };
