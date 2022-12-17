import React from 'react';
import { iconsGame } from 'data';
import { CircleBuild } from '../CircleBuild';
import { checkResurce } from 'utils/checkResorsUpdate';
import { MineType } from 'models/GameType';
import {  dateGame, } from 'utils';

import styles from './ResurceInfo.module.scss';


interface ResurceInfoType {
  minesInfo: MineType
  nextLevelMineUpdate: checkResurce
}

const ResurceInfo: React.FC<ResurceInfoType> = ({minesInfo, nextLevelMineUpdate}) => {
  const [nextLevel, setNextLevel] = React.useState(minesInfo.level + 1)
  const [updateTimeCompleted, setUpdateTimeCompleted] = React.useState(dateGame.dateEndUpdateFormat(nextLevelMineUpdate.time))

  React.useEffect(() => {
    setNextLevel(minesInfo.level + 1)
    setUpdateTimeCompleted(dateGame.dateEndUpdateFormat(nextLevelMineUpdate.time))
  },[minesInfo])

 

  return (
    <div className={styles.root}>
      <div className={styles.container}>
    <h2 className={styles.title}>{minesInfo.title}</h2>
    <p className={styles.text}>Увеличение производства</p>

    <div className={styles.updateInfo}>
    <div className={styles.level}>
    <CircleBuild level={minesInfo.level} updateActive={false}/>
    </div>

    <div className={styles.population}>
    <img src={iconsGame.population} alt="icon population" />
    <span>{minesInfo.piple}</span>
    </div>

    <div className={styles.incom}>
      <span>{minesInfo.income}/ч</span>
    </div>

    <div className={styles.refreshIcon}>
    <img src={iconsGame.refresh} alt="refresh icon" />
    </div>

    <div className={styles.incom}>
      <span>{nextLevelMineUpdate.income}/ч</span>
    </div>

    <div className={styles.population}>
    <img src={iconsGame.population} alt="icon population" />
    <span>{nextLevelMineUpdate.piple}</span>
    </div>

    <div className={styles.nextLevel}>
    <CircleBuild level={nextLevel} updateActive={false}/>
    </div>
    </div>

    <div className={styles.timeUpdate}>
      <img src={iconsGame.clock} alt="icon clock" />
    <span>Время строительства:{dateGame.vievDate(nextLevelMineUpdate.time)}</span>  
      </div>

      <div className={styles.endUpdateDate}>
        <span>
       Завершится строительство в: {updateTimeCompleted}
        </span>
      </div>

    <div className={styles.icons}>
      <div className={styles.resurce}>
      <img  src={iconsGame.wood} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMineUpdate.wood}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame.clay} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMineUpdate.clay}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame.iron} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMineUpdate.iron}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame.wheat} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMineUpdate.wheat}</span>
      </div>
    </div>
      </div>
    </div>
  );
};

export {ResurceInfo};