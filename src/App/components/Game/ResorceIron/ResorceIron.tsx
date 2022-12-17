import {  resurceBarCount, resurceUpdateRuls } from "data";
import { MineType } from "models/GameType";
import React from "react";
import { checkResorsUpdate } from "utils";
import { CircleBuild } from "../CircleBuild";

import styles from "./ResorceIron.module.scss";

interface ResorceIronType {
  mine: MineType
  handlerIronValue: (value: MineType) => void
  handlerClickCircle: (value: MineType) => void
  mineInfo: MineType
}

const ResorceIron: React.FC<ResorceIronType> = ({ mine, handlerIronValue, mineInfo, handlerClickCircle }) => {  
  const minesTargetRef = React.useRef<HTMLDivElement>(null)
  const [activeUpdate, setActiveUpdate] = React.useState(false);

  React.useEffect(() => {
    const res = checkResorsUpdate(mine, resurceBarCount, resurceUpdateRuls,)
    setActiveUpdate(res)
  },[]) 


  const on = () => handlerIronValue(mine);
  const off = () => handlerIronValue(mineInfo);

  React.useEffect(() => {
    if (!minesTargetRef.current) {
      return;
    }
    const node = minesTargetRef.current;

    node.addEventListener("mouseenter", on);
    node.addEventListener('mouseleave', off);

    return function () {
      node.removeEventListener("mouseenter", on);
      node.removeEventListener('mouseleave', off);
    }
  },[])

 
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
