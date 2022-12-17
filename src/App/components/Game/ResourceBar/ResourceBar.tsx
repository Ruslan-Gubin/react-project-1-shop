import React from 'react';
import { iconsGame, resurceBar } from 'data';
import { ResorceItem } from '../ResorceItem';

import styles from './ResourceBar.module.scss';

const ResourceBar: React.FC = () => {


  return (
    <div className={styles.root}>
      <ResorceItem line={true} icons={iconsGame.wood} value={resurceBar.wood} />
      <ResorceItem line={true} icons={iconsGame.clay} value={resurceBar.clay} />
      <ResorceItem line={true} icons={iconsGame.iron} value={resurceBar.iron} />
      <ResorceItem line={false} icons={iconsGame.wheat} value={resurceBar.wheat} />
    </div>
  );
};

export  {ResourceBar};