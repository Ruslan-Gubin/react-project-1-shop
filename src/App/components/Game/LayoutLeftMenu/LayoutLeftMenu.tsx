import { iconsGame } from 'data';
import React from 'react';
import { LayoutLeftMenuItem } from '../LayoutLeftMenuItem';

import styles from './LayoutLeftMenu.module.scss';

interface LayoutLeftMenuType {

}

const LayoutLeftMenu: React.FC<LayoutLeftMenuType> = () => {
  return (
    <div className={styles.root}> 
    <div className={styles.container}>

      <LayoutLeftMenuItem icon={iconsGame['crown']} text={'Твое королевство'} />
      <LayoutLeftMenuItem icon={iconsGame['sword']} text={'Атаки на королевство'} />
      <LayoutLeftMenuItem icon={iconsGame['bookQuest']} text={'Книга заданий'} />
      <LayoutLeftMenuItem icon={iconsGame['analytics']} text={'Статистика'} />
      <LayoutLeftMenuItem icon={iconsGame['writeMessage']} text={'Беседы'} />
    </div>
    </div>
  );
};

export {LayoutLeftMenu};