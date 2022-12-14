import React from 'react';
import { CardSkils } from "ui";
import { descriptionFrontend, descriptionBackend } from "data";

import styles from './TechnologiesStack.module.scss';

const TechnologiesStack: React.FC = () => {

  return (
    <div className={styles.stackContainer}>
      <h2 className={styles.stackTitle}>Технологии применены на этом сайте</h2>
      <div className={styles.technologies}>
      <div className={styles.fronternCard}>
        <CardSkils data={descriptionFrontend} title={'Frontend'} />
      </div>
      <div className={styles.backend}>
        <CardSkils data={descriptionBackend} title={'Backend'}/>
      </div>
      </div>
    </div>
  );
};

export  {TechnologiesStack};