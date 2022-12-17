import { iconsGame } from 'data';
import { MineType } from 'models/GameType';
import React from 'react';

import styles from './CircleBuild.module.scss';

interface ICircleBuild {
  level: number
  handlerClickCircle?: (value: MineType) => void
  mine?: MineType
  updateActive: boolean
}


const CircleBuild: React.FC<ICircleBuild> = ({ updateActive, level, handlerClickCircle, mine}) => {
  

  return (
    <div className={styles.container}>
      {mine && handlerClickCircle && updateActive ? 
      <div onClick={()=> handlerClickCircle(mine)} className={`${styles.rootActive} ${styles.root}`}> 
      <div className={`${styles.CircleContainerActive} ${styles.CircleContainer}`}>
      <div className={styles.CircleValue}>
      {level}
      </div>
      </div>
      </div>
    :  
      <div  className={styles.root}> 
      <div className={styles.CircleContainer}>
      <div className={styles.CircleValue}>
      {level}
      </div>
      </div>
      </div>
    
    }

    </div>
      
     
    
  );
};

export {CircleBuild};