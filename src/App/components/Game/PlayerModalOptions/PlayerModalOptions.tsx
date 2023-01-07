import React from 'react';
import { useSelector } from 'react-redux';
import { selectGameModal } from 'store/slice';
import { PlayerAdventure } from '../PlayerAdventure';
import { PlayerAuction } from '../PlayerAuction';
import { PlayerInventory } from '../PlayerInventory';
import { PlayerParameters } from '../PlayerParameters';

import styles from './PlayerModalOptions.module.scss';

interface PlayerModalOptionsType {

}

const PlayerModalOptions: React.FC<PlayerModalOptionsType> = () => {
  const {playerOptionsModal} = useSelector(selectGameModal)

  const contentModal = [
    {id: 1, jsx: <PlayerInventory />, value: 'Инвентарь'},
    {id: 2, jsx: <PlayerParameters />, value: 'Параметры'},
    {id: 3, jsx: <PlayerAuction />, value: 'Аукцион'},
    {id: 4, jsx: <PlayerAdventure />, value: 'Приключение'},
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