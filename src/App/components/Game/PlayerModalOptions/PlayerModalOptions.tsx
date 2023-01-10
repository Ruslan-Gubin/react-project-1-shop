import React from 'react';
import { useSelector } from 'react-redux';
import { selectGameModal } from 'store/slice';
import { PlayerAdventure, PlayerAuction, PlayerInventory, PlayerParameters } from '../';
import { IPlayerType } from 'models/GameType';

import styles from './PlayerModalOptions.module.scss';

interface PlayerModalOptionsType {
playerData: IPlayerType
refetch: () => void
}

const PlayerModalOptions: React.FC<PlayerModalOptionsType> = ({playerData, refetch}) => {
  const {playerOptionsModal} = useSelector(selectGameModal) 

  const contentModal = [
    {id: 1, jsx: <PlayerInventory playerData={playerData} />, value: 'Инвентарь'},
    {id: 2, jsx: <PlayerParameters />, value: 'Параметры'},
    {id: 3, jsx: <PlayerAuction />, value: 'Аукцион'},
    {id: 4, jsx: <PlayerAdventure playerData={playerData} refetch={refetch} />, value: 'Приключение'},
  ]

  const checkValue =  playerOptionsModal.find(item => item.status) 
  const filterContent =  contentModal.filter(item => item.value === checkValue?.value) 

  return (
    <div className={styles.root}>
      <ul>
        {filterContent && filterContent.map(item =>  (
          <li key={item.id}>
            {item.jsx}
          </li>
        ))}
      </ul>
    </div>
  );
};

export {PlayerModalOptions};