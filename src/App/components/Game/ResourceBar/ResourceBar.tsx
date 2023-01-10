import { IPlayerType } from 'models/GameType';
import React from 'react';
import { ResorceItem } from '../ResorceItem';

import styles from './ResourceBar.module.scss';

interface ResourceBarType {
  playerData: IPlayerType
}

const ResourceBar: React.FC<ResourceBarType> = ({playerData}) => {
  
  return (
    <div className={styles.root}>
      <ResorceItem playerData={playerData} title={'Древесина'} name={'wood'}/>
      <ResorceItem playerData={playerData} title={'Глина'} name={'clay'}/>
      <ResorceItem playerData={playerData} title={'Железо'} name={'iron'}/>
      <ResorceItem playerData={playerData} title={'Зерно'} name={'wheat'}/>
    </div>
  );
};

export  {ResourceBar};