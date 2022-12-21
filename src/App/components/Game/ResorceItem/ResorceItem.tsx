import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerAction, selectAuth, selectPlayer } from 'store/slice';
import {  useUpdateCountResurce } from 'hooks';
import { iconsGame } from 'data';
import styles from './ResorceItem.module.scss';
import { playerApi } from 'store/rtkQuery';

interface ResorceItemType {
  updateTime: number
  lastCount: number
  incom: number
  capasity: number
  name: string
} 

const ResorceItem: React.FC<ResorceItemType> = React.memo(({  name,  capasity, updateTime, lastCount, incom }) => {
  const {resurceBar} = useSelector(selectPlayer)   
  const [progres, setProgres] = React.useState(0)
  const totalCount = useUpdateCountResurce(updateTime, lastCount, incom, capasity)
  const dispatch = useDispatch() 


  React.useEffect(() => {
      dispatch(playerAction.setResurceBar({totalCount, name})) 
  },[totalCount])

  React.useEffect(() => {
    setProgres(Math.round((Number(resurceBar[name]) / capasity) * 100)) 
  },[ resurceBar])
  
  return (
    <div className={name !== 'wheat' ? `${styles.root} ${styles.beforLine}` : styles.root}>
      <div className={styles.header}>
      <img className={styles.icon} src={iconsGame[name]} alt="icon resource" />
      <div className={styles.values}>
      <span className={styles.countValue}>{resurceBar[name]}</span>
      <span className={styles.totalValue}>/{capasity}</span>
      </div>
      </div>

      <div className={styles.progressRoot}>
      <div className={styles.progressContainer}>
      <div className={styles.progressCompleted} style={{width: `${progres}%`}}>
      </div>
      </div>
      </div>

      <div className={styles.incomConta}>
        <span>+{incom}</span>
        
      </div>

    </div>
  );
});

export  {ResorceItem};
