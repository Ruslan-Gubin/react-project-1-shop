import React from "react";
import {  resourceUpdateRuls } from "data";
import { useHover, useMineNextLevelInfo } from "hooks";
import { MineType } from "models/GameType";
import { useSelector } from "react-redux";
import {  selectPlayer } from "store/slice";
import { ProgressGameUpdateTime } from "ui";
import { checkResorsUpdate } from "utils";
import { CircleBuild } from "../CircleBuild";

import styles from "./ResourceIron.module.scss";
import { ResourceInfo } from "../ResourceInfo";

interface ResorceIronType {
  mine: MineType
  handlerIronValue: (value: MineType| null) => void
  handlerClickCircle: (value: MineType) => void
}

const ResourceIron: React.FC<ResorceIronType> = React.memo(({ mine, handlerIronValue, handlerClickCircle }) => {  
   const { resourceBar , mineUpdateActive } = useSelector(selectPlayer);
  const {minesTargetRef} = useMineNextLevelInfo(mine, handlerIronValue)
  const [activeUpdate, setActiveUpdate] = React.useState<boolean>(false);
  const hover = useHover(minesTargetRef)

  React.useEffect(() => {
    if (resourceBar) {
      const checkResursForUpdate = checkResorsUpdate(mine, resourceBar, resourceUpdateRuls)
      setActiveUpdate(checkResursForUpdate)
    }
  },[resourceBar, mine]) 

  return (
    <div   className={styles.root}>
      <div ref={minesTargetRef} className={styles.mineContainer}>
      <img  className={styles.image} src={mine.imag} alt="resorce field" />
      <div className={styles.circle}>
        {mine &&
        <CircleBuild handlerClickCircle={handlerClickCircle} mine={mine} updateActive={activeUpdate}  level={mine.level}/>
      }
      </div>
      {mine._id === mineUpdateActive.mineId && 
      <div className={styles.progress}>
            <ProgressGameUpdateTime />
      </div>
      }
      </div>
      {hover && 
      <div className={styles.modalInfoUpdate}>
      <ResourceInfo  text={'Увеличение производства'}/>
      </div>
      }
    </div>
  );
});

export { ResourceIron };
