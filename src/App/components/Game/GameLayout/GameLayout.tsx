import React from 'react';
import { Outlet } from 'react-router-dom';
import { GameHeader } from '../GameHeader';

import styles from './GameLayout.module.scss';

const GameLayout: React.FC = () => {
  return (
    <div className={styles.root}>

<GameHeader />
      <Outlet />
    </div>
  );
};

export  {GameLayout};