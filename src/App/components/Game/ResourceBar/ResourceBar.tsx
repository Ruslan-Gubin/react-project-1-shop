import { IPlayerType } from 'models/GameType';
import React from 'react';
import { ResorceItem } from '../ResorceItem';

import styles from './ResourceBar.module.scss';

interface ResourceBarType {
  playerData: IPlayerType
}

const ResourceBar: React.FC<ResourceBarType> = ({playerData}) => {
  const updatePlayer: number = playerData ? Date.parse(playerData.updatedAt) : 0
  

  return (
    <div className={styles.root}>
    {playerData && 
    <>
      <ResorceItem title={'Древесина'}  updateTime={updatePlayer} lastCount={playerData.resourceBar.wood} incom={playerData.income.wood} capasity={playerData.capasity.wood} name={'wood'}/>
      <ResorceItem title={'Глина'} updateTime={updatePlayer} lastCount={playerData.resourceBar.clay} incom={playerData.income.clay} capasity={playerData.capasity.clay} name={'clay'}/>
      <ResorceItem title={'Железо'} updateTime={updatePlayer} lastCount={playerData.resourceBar.iron} incom={playerData.income.iron} capasity={playerData.capasity.iron} name={'iron'}/>
      <ResorceItem title={'Зерно'} updateTime={updatePlayer} lastCount={playerData.resourceBar.wheat} incom={playerData.income.wheat} capasity={playerData.capasity.wheat} name={'wheat'}/>
    </>
    }
    </div>
  );
};

export  {ResourceBar};