import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerAction,  selectPlayer } from 'store/slice';
import {  useHover, useUpdateCountResource } from 'hooks';
import { iconsGame } from 'data';
import styles from './ResorceItem.module.scss';
import { ProgressGame } from 'ui';
import { MultiHitsModal } from '../MultiHitsModal';

interface ResorceItemType {
  updateTime: number
  lastCount: number
  incom: number
  capasity: number
  name: string
  title: string
} 

const ResorceItem: React.FC<ResorceItemType> = React.memo(({  name,  capasity, updateTime, lastCount, incom , title}) => {
  const {resourceBar} = useSelector(selectPlayer)   
  const [progres, setProgres] = React.useState<number>(0)
  const totalCount = useUpdateCountResource(updateTime, lastCount, incom, capasity)
  const dispatch = useDispatch() 
  const hoverRef = React.useRef<HTMLDivElement>(null)
  const hover = useHover(hoverRef)

  React.useEffect(() => {
      dispatch(playerAction.setResourceBar({totalCount, name})) 
  },[totalCount])

  React.useEffect(() => {
    setProgres(Math.round((Number(resourceBar[name]) / capasity) * 100)) 
  },[ resourceBar])
  
  return (
    <div ref={hoverRef} className={name !== 'wheat' ? `${styles.root} ${styles.beforLine}` : styles.root}>
      <div className={styles.header}>
      <img className={styles.icon} src={iconsGame[name]} alt="icon resource" />
      <div className={styles.values}>
      <span className={styles.countValue}>{resourceBar[name]}</span>
      <span className={styles.totalValue}>/{capasity}</span>
      </div>
      </div>
      <ProgressGame progres={progres} /> 
      
      <div className={styles.incomConta}>
        <span>+{incom}</span>
        
      </div>

      {hover && 
    <div className={styles.hitsModal}>
      <MultiHitsModal capasity={capasity} text='Заполнится через:' title={title}  width={230} totalCount={totalCount} incom={incom} />
    </div>
      }

    </div>
  );
});

export  {ResorceItem};
