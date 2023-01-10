import React from 'react';
import { IPlayerType } from 'models/GameType';
import { MenuLayoutOptions, PlayerProgressBar, HeroInfo, EventProgressGame } from '../';


import styles from './HeaderMenuRight.module.scss';

interface HeaderMenuRightType {
  playerData: IPlayerType 
  refetch: () => void
}

const HeaderMenuRight: React.FC<HeaderMenuRightType> = ({playerData, refetch}) => {

  return (
    <div className={styles.root}>
    {playerData &&
    <>
    <MenuLayoutOptions />
    <PlayerProgressBar playerLevel={playerData.level} health={playerData.health} experience={playerData.experience} />
    <HeroInfo  playerLevel={playerData.level}/>
    <EventProgressGame playerData={playerData} refetch={refetch} />
    </>
   }
    </div>
  );
};

export {HeaderMenuRight};