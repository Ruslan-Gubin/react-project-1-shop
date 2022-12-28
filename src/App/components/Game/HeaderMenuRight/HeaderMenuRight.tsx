import React from 'react';
import { MenuLayoutOptions, PlayerProgressBar, HeroInfo } from '../';


import styles from './HeaderMenuRight.module.scss';

interface HeaderMenuRightType {

}

const HeaderMenuRight: React.FC<HeaderMenuRightType> = () => {
  return (
    <div className={styles.root}>
    <MenuLayoutOptions />
    <PlayerProgressBar />
    <HeroInfo />
    </div>
  );
};

export {HeaderMenuRight};