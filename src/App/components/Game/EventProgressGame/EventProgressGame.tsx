import { IPlayerType } from 'models/GameType';
import React from 'react';
import { AdventuresProggress } from '../UiGame';

import styles from './EventProgressGame.module.scss';

interface EventProgressGameType {
  playerData: IPlayerType
  refetch: () => void
}

const EventProgressGame: React.FC<EventProgressGameType> = ({playerData, refetch}) => {

  return (
    <div className={styles.root}>
      {playerData.adventure.status && 
  <AdventuresProggress playerData={playerData} refetch={refetch} />
      }
    </div>
  );
};

export {EventProgressGame};