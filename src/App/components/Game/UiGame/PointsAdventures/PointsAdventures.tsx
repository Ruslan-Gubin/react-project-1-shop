import { iconsGame } from 'data';
import React from 'react';

import styles from './PointsAdventures.module.scss';

interface PointsAdventuresType {
  compassCount: number
}

const PointsAdventures: React.FC<PointsAdventuresType> = ({compassCount}) => {
  return (
    <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.header}><h2>Очки приключений</h2></div>
      <div className={styles.body}>
        <div className={styles.containsCoints}>
          <span>Имеется:</span>
        <img src={iconsGame['compassAdventure']} alt=" icon compassAdventure" />
        <div className={styles.countCompass}>x {compassCount}</div>
        </div>
        <div className={styles.containsTime}>
          <p>
          Следующий компас будет доступен через: <span>{'13:05:45'}</span>
          </p>
        </div>

      </div>
    </div>
    </div>
  );
};

export {PointsAdventures};