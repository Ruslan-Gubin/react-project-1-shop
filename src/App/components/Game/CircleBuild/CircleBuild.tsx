import React from 'react';

import styles from './CircleBuild.module.scss';

interface ICircleBuild{
  active: boolean
}

const CircleBuild: React.FC<ICircleBuild> = ({active}) => {

  const value = 3

  return (
    <div className={active ? `${styles.rootActive} ${styles.root}` : styles.root}>
      <div className={active ?  `${styles.CircleContainerActive} ${styles.CircleContainer}` : styles.CircleContainer}>
    <div className={styles.CircleValue}>
      {value}
    </div>
      </div>
    </div>
  );
};

export {CircleBuild};