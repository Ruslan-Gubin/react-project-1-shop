import { TechnologiesStack } from 'components';
import React from 'react';
import { AboutUser } from 'ui';

import styles from './About.module.scss';

const About: React.FC = () => {

  return (
    <div className={styles.root}>
    <AboutUser />
    <TechnologiesStack />
  </div>
  );
};

export  {About};