import React from 'react';
import { iconsGame } from 'data';
import { CircleBuild } from '../CircleBuild';
import {  dateGame, } from 'utils';

import styles from './ResourceInfo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { playerAction, selectAuth, selectPlayer } from 'store/slice';
import { playerApi } from 'store/rtkQuery';

interface ResourceInfoType {
  text: string
  incom?: number
}

const ResourceInfo: React.FC<ResourceInfoType> = ({text, incom}) => {
  const { auth } = useSelector(selectAuth);
  const {data: playerData } = playerApi.useGetPlayerQuery({ id: auth._id });
  const {lastMinesInfo, nextLevelMinesUpdate, resourceBar, timeAvailableUpdate} = useSelector(selectPlayer) 
  const [nextLevel, setNextLevel] = React.useState(lastMinesInfo.level + 1)
  const [updateTimeCompleted, setUpdateTimeCompleted] = React.useState(dateGame.dateEndUpdateFormat(nextLevelMinesUpdate.time))
  const dispatch = useDispatch()

  React.useEffect(() => {
    setNextLevel(lastMinesInfo.level + 1)
    setUpdateTimeCompleted(dateGame.dateEndUpdateFormat(nextLevelMinesUpdate.time))
    if (playerData) {
      dispatch(playerAction.setTimeAvailableUpdate({income: playerData.income}))
    }
  },[lastMinesInfo])
 

  return (
    <div className={styles.root}>
      <div className={styles.container}>
    <h2 className={styles.title}>{lastMinesInfo.title}</h2>
    <p className={styles.text}>{text}</p>

    <div className={styles.updateInfo}>
    <div className={styles.level}>
    <CircleBuild level={lastMinesInfo.level} updateActive={false}/>
    </div>

    <div className={styles.population}>  
    <img src={iconsGame['population']} alt="icon population" />
    <span>{lastMinesInfo.piple}</span>
    </div>

{lastMinesInfo.income &&
    <div className={styles.incom}>
      <span>{lastMinesInfo.income}/ч</span>
    </div>
}

    <div className={styles.refreshIcon}>
    <img src={iconsGame['refresh']} alt="refresh icon" />
    </div>
    
{nextLevelMinesUpdate.income &&
    <div className={styles.incom}>
      <span>{nextLevelMinesUpdate.income}/ч</span>
    </div>
}

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
    {timeAvailableUpdate ?
        <span>
          Cтроительсто будет доступно в:  {dateGame.dateEndUpdateFormat(timeAvailableUpdate )}
        </span>
      : <span> Завершится строительство в: {updateTimeCompleted}
        </span>
    }
      </div>

    <div className={styles.icons}>
      <div className={styles.resurce}>
      <img  src={iconsGame['wood']} alt="Icon resurce" />
      <span
       style={resourceBar.wood < nextLevelMinesUpdate.wood ? {color: 'red'} : {color: ''}}
       className={styles.needResurce}
      >{nextLevelMinesUpdate.wood}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame['clay']} alt="Icon resurce" />
      <span 
      style={resourceBar.clay < nextLevelMinesUpdate.clay ? {color: 'red'} : {color: ''}}
      className={styles.needResurce}>
        {nextLevelMinesUpdate.clay}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame['iron']} alt="Icon resurce" />
      <span 
      style={resourceBar.iron < nextLevelMinesUpdate.iron ? {color: 'red'} : {color: ''}}
      className={styles.needResurce}
      >{nextLevelMinesUpdate.iron}</span>
      </div>
      <div className={styles.resurce}>
      <img src={iconsGame['wheat']} alt="Icon resurce" />
      <span
      style={resourceBar.wheat < nextLevelMinesUpdate.wheat ? {color: 'red'} : {color: ''}}
      className={styles.needResurce}
      >{nextLevelMinesUpdate.wheat}</span>
      </div>
    </div>
      </div>
    </div>
  );
};

export {ResourceInfo};