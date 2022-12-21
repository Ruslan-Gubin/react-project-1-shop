import React from 'react';
import { iconsGame } from 'data';
import { CircleBuild } from '../CircleBuild';
import {  dateGame, } from 'utils';

import styles from './ResurceInfo.module.scss';
import { useSelector } from 'react-redux';
import { selectPlayer } from 'store/slice';



const ResurceInfo: React.FC = () => {
  const {lastMinesInfo, nextLevelMinesUpdate} = useSelector(selectPlayer) 
  const [nextLevel, setNextLevel] = React.useState(lastMinesInfo.level + 1)
  const [updateTimeCompleted, setUpdateTimeCompleted] = React.useState(dateGame.dateEndUpdateFormat(nextLevelMinesUpdate.time))

  React.useEffect(() => {
    setNextLevel(lastMinesInfo.level + 1)
    setUpdateTimeCompleted(dateGame.dateEndUpdateFormat(nextLevelMinesUpdate.time))
  },[lastMinesInfo])
 

  return (
    <div className={styles.root}>
      <div className={styles.container}>
    <h2 className={styles.title}>{lastMinesInfo.title}</h2>
    <p className={styles.text}>Увеличение производства</p>

    <div className={styles.updateInfo}>
    <div className={styles.level}>
    <CircleBuild level={lastMinesInfo.level} updateActive={false}/>
    </div>

    <div className={styles.population}>  
    <img src={iconsGame['population']} alt="icon population" />
    <span>{lastMinesInfo.piple}</span>
    </div>

    <div className={styles.incom}>
      <span>{lastMinesInfo.income}/ч</span>
    </div>

    <div className={styles.refreshIcon}>
    <img src={iconsGame['refresh']} alt="refresh icon" />
    </div>

    <div className={styles.incom}>
      <span>{nextLevelMinesUpdate.income}/ч</span>
    </div>

    <div className={styles.population}>
    <img src={iconsGame['population']} alt="icon population" />
    <span>{nextLevelMinesUpdate.piple}</span>
    </div>

    <div className={styles.nextLevel}>
    <CircleBuild level={nextLevel} updateActive={false}/>
    </div>
    </div>

    <div className={styles.timeUpdate}>
      <img src={iconsGame['clock']} alt="icon clock" />
    <span>Время строительства:{dateGame.vievDate(nextLevelMinesUpdate.time)}</span>  
      </div>

      <div className={styles.endUpdateDate}>
        <span>
       Завершится строительство в: {updateTimeCompleted}
        </span>
      </div>

    <div className={styles.icons}>
      <div className={styles.resurce}>
      <img  src={iconsGame['wood']} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMinesUpdate.wood}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame['clay']} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMinesUpdate.clay}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame['iron']} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMinesUpdate.iron}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame['wheat']} alt="Icon resurce" />
      <span className={styles.needResurce}>{nextLevelMinesUpdate.wheat}</span>
      </div>
    </div>
      </div>
    </div>
  );
};

export {ResurceInfo};