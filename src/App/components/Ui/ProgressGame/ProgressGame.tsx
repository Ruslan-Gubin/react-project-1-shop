import React from 'react';

import styles from './ProgressGame.module.scss';

interface ProgressGameType {
  progres: number
  color?: string
}

const ProgressGame: React.FC<ProgressGameType> = ({progres, color='green' }) => {
  


  return (
    <div className={styles.progressRoot}>
      <div className={styles.progressContainer}>
      <div className={styles[`${color}`]}  style={{width: `${progres}%` }}>
      </div>
      </div>
      </div>
  );
};

export  {ProgressGame};