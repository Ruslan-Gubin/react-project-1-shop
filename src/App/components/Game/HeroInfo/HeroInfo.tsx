import { iconsGame } from 'data';
import React from 'react';
import { HeroAvatar } from '../HeroAvatar';

import styles from './HeroInfo.module.scss';

interface HeroInfoType {

}

const HeroInfo: React.FC<HeroInfoType> = () => {
  const playerLevel = 1


  return (
    <div className={styles.root}>
<div className={styles.container}>

      <div className={styles.link}>
      <div className={styles.itemContainer}>
  <img className={styles.item} src={iconsGame['compass']} alt="Icon compass" />
      </div>
      </div>

  <HeroAvatar />

      <div className={`${styles.link} ${styles.reverseBlock}`} style={{borderBottomLeftRadius: 0}}>
      <div className={styles.itemContainer}>
  <span>Ур</span>
  <span>{playerLevel}</span>
      </div>
      </div>

</div>
    </div>
  );
};

export {HeroInfo};