import React from 'react';

import styles from './LayoutMiltyHits.module.scss';

interface LayoutMiltyHitsType {
title: string
text: string
}

const LayoutMiltyHits:React.FC<LayoutMiltyHitsType> = ({title, text}) => {
  return (
    <div className={styles.root}>
    <div className={styles.containerHits}>
            <div className={styles.title}>
              <h2>{title}</h2>
            </div>
            <div className={styles.text}>
              <span>{text}</span>
            </div>
          </div>
    </div>
  );
};

export  {LayoutMiltyHits};