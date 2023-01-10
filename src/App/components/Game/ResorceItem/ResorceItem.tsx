import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerAction,  selectPlayer } from 'store/slice';
import {  useHover, useUpdateCountResource } from 'hooks';
import { iconsGame } from 'data';
import { ProgressGame } from 'ui';
import { MultiHitsModal } from '../MultiHitsModal';
import { IPlayerType } from 'models/GameType';
import styles from './ResorceItem.module.scss';

interface ResorceItemType {
  name: string
  title: string
  playerData: IPlayerType
} 

const ResorceItem: React.FC<ResorceItemType> = React.memo(({ playerData,  name,  title}) => {
  const {income, capasity} = playerData
  const updatePlayer: number =  Date.parse(playerData.updatedAt) 
  const {resourceBar} = useSelector(selectPlayer)    
  const [progres, setProgres] = React.useState<number>(0)
  const totalCount = useUpdateCountResource( updatePlayer, Number(playerData.resourceBar[name]), Number(income[name]), Number(capasity[name]))
  const dispatch = useDispatch() 
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const hover = useHover(hoverRef)

  React.useEffect(() => {
      dispatch(playerAction.setResourceBar({totalCount, name})) 
  },[totalCount])

  React.useEffect(() => {
    setProgres(Math.round((Number(resourceBar[name]) / Number(capasity[name])) * 100)) 
  },[ resourceBar])

  return (
    <div ref={hoverRef} className={name !== 'wheat' ? `${styles.root} ${styles.beforLine}` : styles.root}>
      <div className={styles.header}>
      <img className={styles.icon} src={iconsGame[name]} alt="icon resource" />
      <div className={styles.values}>
      <span className={styles.countValue}>{resourceBar[name]}</span>
      <span className={styles.totalValue}>/{capasity[name]}</span>
      </div>
      </div>
      {resourceBar[name] === capasity[name] ?
    <ProgressGame color='red' progres={progres} />  
    :
    <ProgressGame progres={progres} />  
    }
      
      <div className={styles.incomConta}>
        <span>+{income[name]}</span>
        
      </div>

      {hover && 
    <div className={styles.hitsModal}>
      <MultiHitsModal capasity={Number(capasity[name])} text='Заполнится через:' title={title}  width={230} totalCount={totalCount} incom={Number(income[name])} />
    </div>
      }

    </div>
  );
});

export  {ResorceItem};
